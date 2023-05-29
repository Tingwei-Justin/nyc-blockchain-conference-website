import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import sponsorImage from "@/public/v2/agenda.png";

const AgendaImage: FC = ({}) => {
  return (
    <div className={styles.container}>
      <Image src={sponsorImage} alt="" className={styles.image}></Image>
    </div>
  );
};

export default AgendaImage;
