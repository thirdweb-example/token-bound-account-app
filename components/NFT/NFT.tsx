import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "./NFT.module.css";

type Props = {
  nft: NFT;
};

// Each NFT component shows the NFT image, name, and token ID.
export default function NFTComponent({ nft }: Props) {
  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />

      <p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p>
      <p className={styles.nftName}>{nft.metadata.name}</p>
    </>
  );
}
