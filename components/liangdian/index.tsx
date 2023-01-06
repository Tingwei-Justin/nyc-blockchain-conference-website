import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import clock from "@/public/clock.png"
import address from "@/public/address.png"

const Liangdian: FC = ({}) => {
  return (
    <div className={styles.liangdianContent}>
      <div className={styles.title}>
        LIANGDIAN
      </div>
      <div className={styles.titleLine}/>
      <div className={styles.titleTip}>
        THE MOST SIGNIFICANT INTERNATIONAL INSTITUTIONAL WEB3 EVENT OF 2023
      </div>
      <div className={styles.liangdianInfo}>
        <div className={styles.liangdianInfoItems}>
          <div className={styles.liangdianItemsItem}>
            <div className={styles.liangdianItem}>
              <div className={styles.itemIndex}>
                1
              </div>
            </div>
          </div>
        </div>
        <div  className={styles.liangdianInfoItem}>

        </div>
      </div>
    </div>
  )
}

export default Liangdian;