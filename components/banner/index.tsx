import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Carousel } from "antd";
import clock from "@/public/clock.png";
import { baseUrl } from "@/contants/apis";
// const bannerStyleList = [banner1, banner2, banner3, banner4, banner5];
interface detailProps {
  bannerRes: detail;
  bannerList: Array<bannerItem>;
}
interface bannerItem {
  url: string;
}
interface detail {
  detail: detailInfo;
}
interface detailInfo {
  title: string;
  detail: string;
  time: string;
}
const Banner: FC<detailProps> = (props) => {
  const {
    bannerRes: { detail },
    bannerList,
  } = props;
  return (
    <div className={styles.banner}>
      <Carousel autoplay dots={{ className: styles.dots }}>
        {bannerList.map((item, index) => {
          return (
            <div className={styles.bannerStyleItem} key={index}>
              <Image
                className={styles.bannerItemImage}
                alt=""
                width={1920}
                height={1020}
                src={item.url.replace(".", baseUrl)}
              ></Image>
            </div>
          );
        })}
      </Carousel>
      <div className={styles.bannerContent}>
        <div>
          <div className={styles.title}>Bit Block Summit</div>
          <div className={styles.title}>
            {/* {detail.title} */}
            <span className={styles.nyc}>Blockchain & AI</span>
          </div>
          <div className={styles.description}>{detail.detail}</div>
        </div>
        <div className={styles.meetingInfo}>
          <Image className={styles.clockimg} src={clock} alt="logo" />
          <div className={styles.meetInfoContent}>
            <div className={styles.infoDate}>
              Date : <span className={styles.date}>{detail.time}</span> • NYC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
