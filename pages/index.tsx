import type { NextPage } from "next";
import styles from "../styles/Main.module.css";
import NFTGrid from "../components/NFT/NFTGrid";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { nftDropAddress } from "../const/constants";
import Container from "../components/Container/Container";
import toast from "react-hot-toast";
import toastStyle from "../util/toastConfig";

/**
 * The home page of the application.
 */
const Home: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address);

  return (
    <Container maxWidth="lg">
      {address ? (
        <div className={styles.container}>
          <h1>Your NFTs</h1>
          <p>
            Browse the NFTs inside your personal wallet, select one to connect a
            token bound smart wallet & view it&apos;s balance.
          </p>
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
              action={async (contract) => await contract?.erc721.claim(1)}
              onSuccess={() => {
                toast("NFT Claimed!", {
                  icon: "✅",
                  style: toastStyle,
                  position: "bottom-center",
                });
              }}
              onError={(e) => {
                console.log(e);
                toast(`NFT Claim Failed! Reason: ${e.message}`, {
                  icon: "❌",
                  style: toastStyle,
                  position: "bottom-center",
                });
              }}
            >
              Claim NFT
            </Web3Button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Connect a personal wallet to view your owned NFTs</h2>
          <ConnectWallet />
        </div>
      )}
    </Container>
  );
};

export default Home;
