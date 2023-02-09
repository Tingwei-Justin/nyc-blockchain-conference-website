import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Dominica from "@/public/sponsor/Dominica.png";
import Grenada from "@/public/sponsor/Grenada.png";
import Saint_Lucia from "@/public/sponsor/Saint_Lucia.png";
import right_allow from "@/public/rightAllow.png";

const SPONSOR_LIST = [
  Dominica,
  Grenada,
  Saint_Lucia,
  // token_pocket,
  // binance,
  // meta_mask,
  // trust,
  // token_pocket,
  // binance,
  // meta_mask,
  // trust,
  // token_pocket,
  // binance,
  // meta_mask,
  // trust,
  // token_pocket,
  // binance,
  // meta_mask,
  // trust,
  // token_pocket,
  // binance,
  // meta_mask,
  // trust,
  // token_pocket,
];
const Sponsor: FC = ({}) => {
  return (
    <div className={styles.sponsorContent}>
      <div className={styles.head}>
        <div className={styles.title}>SPONSOR</div>
        <div className={styles.apply}>
          APPLY
          <Image
            src={right_allow}
            className={styles.rightAllow}
            alt="right_allow"
          ></Image>
        </div>
      </div>

      <div className={styles.wrap}>
        <div className={styles.sponsorWrap}>
          {SPONSOR_LIST.map((item, index) => {
            return (
              <div key={index} className={styles.sponsorItem}>
                <Image
                  width={300}
                  height={200}
                  layout="intrinsic"
                  // objectFit=""
                  // className={styles.itemImg}
                  alt="itemImg"
                  src={item}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
