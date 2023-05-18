import {
  ThirdwebSDKProvider,
  useAddress,
  useContract,
  useBalance,
  useClaimToken,
} from "@thirdweb-dev/react";
import React from "react";
import { activeChain, tokenAddress } from "../../const/constants";
import { Signer } from "ethers";
import style from "../../styles/Token.module.css";

interface ConnectedProps {
  signer: Signer | undefined;
}

const SmartWalletConnected: React.FC<ConnectedProps> = ({ signer }) => {
  return (
    <ThirdwebSDKProvider signer={signer} activeChain={activeChain}>
      <ClaimTokens />
    </ThirdwebSDKProvider>
  );
};

const ClaimTokens = () => {
  const address = useAddress();
  const { contract: tokenContract } = useContract(tokenAddress, "token-drop");
  //Token information
  const { data: tokenBalance, isLoading: loadingBalance } =
    useBalance(tokenAddress);
  const { mutateAsync: claimToken, isLoading: loadingClaimToken } =
    useClaimToken(tokenContract);

  return (
    <div className={style.listingContainer}>
      <h2>This is Your Token Bound Smart Wallet!</h2>
      {address ? (
        loadingBalance ? (
          <h2>Loading Balance...</h2>
        ) : (
          <div className={style.pricingContainer}>
            <h2>Balance: {tokenBalance?.displayValue}</h2>
            <button
              onClick={async () =>
                await claimToken({
                  to: address,
                  amount: 10,
                })
              }
              disabled={loadingClaimToken}
              className={style.card}
            >
              Claim 10 Tokens
            </button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default SmartWalletConnected;
