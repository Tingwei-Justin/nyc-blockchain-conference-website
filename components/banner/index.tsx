import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import clock from "@/public/clock.png";
import address from "@/public/address.png";

const Banner: FC = ({}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div>
          <div className={styles.title}>Bit Block Summit | NYC</div>
          <div className={styles.description}>
            BBS.NYC is the top summit in the blockchain field. It is
            co-sponsored by top universities in the United States, governments
            of Caribbean countries, and well-known Wall Street investors! Every
            year, more than two theme events and more than 20 online forums are
            held around the world.
          </div>
        </div>

        {/* <div className={styles.meetingCome} />
        <div className={styles.bannerBackground} /> */}
        <div className={styles.meetingInfo}>
          <Image className={styles.clockimg} src={clock} alt="logo" />
          <div className={styles.meetInfoContent}>
            <div className={styles.infoDate}>Date : June 02-03 • NYC</div>
            {/* <div className={styles.infoAddress}>
              {"ADDRESS "}
              <Image
                className={styles.logoimg}
                src={address}
                alt="logo"
                width={35}
                height={35}
              />
              {"TBD"}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
