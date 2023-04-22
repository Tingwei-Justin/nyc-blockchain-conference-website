import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import bbs_nyc_icon from "@/public/v2/bbs_nyc_icon.png";
import retrospect from "@/public/v2/retrospect.png";
import regulate from "@/public/v2/regulate.png";
import reshape from "@/public/v2/reshape.png";
import rebuild from "@/public/v2/rebuild.png";

const bbsTypeList = [
  {
    icon: retrospect,
    text: "RETROSPECT",
  },
  {
    icon: regulate,
    text: "REGULATE",
  },
  {
    icon: reshape,
    text: "RESHAPE",
  },
  {
    icon: rebuild,
    text: "REBUILD",
  },
];

interface bbsRes {
  bbsRes: bbsDetail
}
interface bbsDetail {
  detail: string
}
const Bbs: FC<bbsRes> = (props) => {
  return (
    <div className={styles.bbsContent}>
      <div className={styles.bbsTitle}>
        <div className={styles.title}>BBS.NYC</div>
        <Image src={bbs_nyc_icon} alt="" className={styles.bbsIcon}></Image>
      </div>
      <div className={styles.bbsWrap}>
        <div className={styles.bbsTypeList}>
          {bbsTypeList.map((item, index) => {
            return (
              <div key={index} className={styles.typeItem}>
                <Image
                  src={item.icon}
                  alt=""
                  className={styles.typeItemIcon}
                ></Image>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.line}></div>
        <div className={styles.bbsInfo}>
          {props.bbsRes.detail}
        </div>
      </div>
    </div>
  );
};

export default Bbs;
