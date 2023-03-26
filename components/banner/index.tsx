import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Carousel } from "antd";
import banner1 from "../../public/v2/banner1.png";
import banner2 from "../../public/v2/banner2.png";
import banner3 from "@/public/v2/banner3.png";
import banner4 from "@/public/v2/banner4.png";
import banner5 from "@/public/v2/banner5.png";
import clock from "@/public/clock.png";

const bannerStyleList = [banner1, banner2, banner3, banner4, banner5];

const Banner: FC = ({}) => {
  return (
    <div className={styles.banner}>
      <Carousel autoplay dots={{ className: styles.dots }}>
        {bannerStyleList.map((item, index) => {
          return (
            <div className={styles.bannerStyleItem} key={index}>
              <Image
                className={styles.bannerItemImage}
                alt=""
                src={item}
              ></Image>
            </div>
          );
        })}
      </Carousel>
      <div className={styles.bannerContent}>
        <div>
          <div className={styles.title}>
            Bit Block Summit <span className={styles.nyc}>NYC</span>
          </div>
          <div className={styles.description}>
            BBS.NYC is the top summit in the blockchain field. It is
            co-sponsored by top universities in the United States, governments
            of Caribbean countries, and well-known Wall Street investors! Every
            year, more than two theme events and more than 20 online forums are
            held around the world.
          </div>
        </div>
        <div className={styles.meetingInfo}>
          <Image className={styles.clockimg} src={clock} alt="logo" />
          <div className={styles.meetInfoContent}>
            <div className={styles.infoDate}>
              Date : <span className={styles.date}>1st - 2nd June</span> • NYC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
