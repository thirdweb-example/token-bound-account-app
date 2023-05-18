import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Main.module.css";
import NFTGrid from "../components/NFT/NFTGrid";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
  useClaimNFT,
} from "@thirdweb-dev/react";
import { nftDropAddress } from "../const/constants";
import Container from "../components/Container/Container";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address);

  //NFT information
  const { mutate: claimNft, isLoading: nftClaimLoading } =
    useClaimNFT(nftDropContract);

  return (
    <Container maxWidth="lg">
      {address ? (
        <>
          <h1>Your NFTs</h1>
          <p>Browse which NFTs are available from the collection.</p>
          <NFTGrid
            nfts={nfts}
            isLoading={isLoading}
            emptyText={
              "Looks like you don't own any NFTs. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
            }
          />
          <div className={styles.btnContainer}>
            <Web3Button
              contractAddress={nftDropAddress}
              action={async () =>
                await claimNft({
                  to: address,
                  quantity: 1,
                })
              }
              isDisabled={nftClaimLoading}
            >
              Claim NFT
            </Web3Button>
          </div>
        </>
      ) : (
        <ConnectWallet />
      )}
    </Container>
  );
};

export default Home;
