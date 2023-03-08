import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import sponsorImage from "@/public/v2/sponsor_image.png";

const SponsorTypes: FC = ({}) => {
  return (
    <div className={styles.sponsorTypesContent}>
      <div className={styles.title}>Sponsors </div>
      <div className={styles.sponsorImage}>
        <Image src={sponsorImage} alt='' className={styles.image}></Image>
      </div>
    </div>
  );
};

export default SponsorTypes;
