import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import strategic_1 from "@/public/v2/strategic_1.png";
import strategic_2 from "@/public/v2/strategic_2.png";
import strategic_3 from "@/public/v2/strategic_3.png";
import submit_binance from "@/public/v2/submit_binance.png";
import submit_im_token from "@/public/v2/submit_im_token.png";
import submit_math from "@/public/v2/submit_math.png";
import email from "@/public/v2/email.png";
import paper from "@/public/v2/paper.png";
import twitter from "@/public/v2/twitter.png";
import wawa from "@/public/v2/wawa.png";
import footer_bbs from "@/public/v2/footer_bbs.png";
import Coat_of_arms_of_Dominic from "@/public/Strategic/Coat_of_arms_of_Dominic.png"
import bbs_logo_2 from "@/public/Strategic/bbs_logo_2.png"
import hashkey_logo from "@/public/Strategic/hashkey_logo.png"
import payment_asia from "@/public/Strategic/payment_asia.png"
import Huobi from "@/public/Strategic/Huobi.png"
import tron_logo from "@/public/Strategic/tron_logo.png"
import metaera_summit from "@/public/metaera_summit.png"

const strategicImgList = [
  Coat_of_arms_of_Dominic,
  bbs_logo_2,
  hashkey_logo,
  payment_asia,
  Huobi,
  tron_logo,
];
const submitImgList = [
  metaera_summit
];
const footerIconTextList = [
  {
    icon: email,
    text: "info@bbs.nyc",
  },
  // {
  //   icon: paper,
  //   text: 'info@bbs.nyc'
  // },
  {
    icon: twitter,
    text: "@BBSNYC2023",
  },
  // {
  //   icon: wawa,
  //   text: 'info@bbs.nyc'
  // }
];
const footerHelpList = [
  "Mobile app",
  "Community",
  "Company",
  "Help desk",
  "Blog",
  "Resources",
];

export const FooterV2: FC = () => {
  return (
    <div className={styles.footerV2}>
      <div className={styles.strategicPartners}>
        <div className={styles.title}>Strategic partners</div>
        <div className={styles.iconList}>
          {strategicImgList.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item}
                  alt=""
                  objectFit='contain'
                  className={styles.strategicPartnersIcon}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.summitPartners}>
        <div className={styles.title}>Summit partners</div>
        <div className={styles.iconList}>
          {submitImgList.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item}
                  alt=""
                  className={styles.summitPartnersIcon}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bbs}>
          <div className={styles.bbsLeft}>
            <Image src={footer_bbs} alt="" className={styles.footerBbs}></Image>
            Bit Block Summit | NYC
          </div>
          <div className={styles.bbsRight}>
            <div className={styles.rightTop}>
              Retrospect | Regulate | Reshape | Rebuild
            </div>
            <div className={styles.rightBottom}>
              {footerHelpList.map((item, index) => {
                return (
                  <div key={index} className={styles.rightBottomTextItem}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.concat}>
          {footerIconTextList.map((item, index) => {
            return (
              <div key={index} className={styles.concatItem}>
                <Image
                  src={item.icon}
                  alt=""
                  className={styles.concatIcon}
                ></Image>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
