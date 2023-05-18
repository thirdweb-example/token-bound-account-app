import { ethers } from "ethers";
import { SmartWallet } from "@thirdweb-dev/wallets";
import {
  TWApiKey,
  factoryAddress,
  activeChain,
  nftDropAddress,
} from "../const/constants";
import { SmartContract, NFT } from "@thirdweb-dev/sdk";
import { WalletOptions } from "@thirdweb-dev/wallets";
import type { SmartWalletConfig } from "@thirdweb-dev/wallets";
import type { BaseContract } from "ethers";

export const getExtraData = (token: NFT) => {
  const data = ethers.utils.defaultAbiCoder.encode(
    ["uint256", "address", "uint256"],
    [activeChain.chainId, nftDropAddress, token.metadata.id]
  );
  console.log(data);
  return data;
};

export default function newSmartWallet(token: NFT) {
  //ABI encode the address, chainId and tokenId for the token to bind the account to

  //Smart Wallet config object
  const config: WalletOptions<SmartWalletConfig> = {
    chain: activeChain, // the chain where your smart wallet will be or is deployed
    factoryAddress: factoryAddress, // your own deployed account factory address
    thirdwebApiKey: TWApiKey, // obtained from the thirdweb dashboard
    gasless: true, // enable or disable gasless transactions
    factoryInfo: {
      createAccount: async (
        factory: SmartContract<BaseContract>,
        owner: string
      ) => {
        return await factory.prepare("createAccount", [
          owner,
          getExtraData(token),
        ]);
      },
      getAccountAddress: async (factory: SmartContract<BaseContract>) => {
        return await factory.call("getAccountAddress", [getExtraData(token)]);
      },
    },
  };
  return new SmartWallet(config);
}
