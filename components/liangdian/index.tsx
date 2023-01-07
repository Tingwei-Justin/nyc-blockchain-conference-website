import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import liangdian from "@/public/liangdian.png"

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
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  1
                </div>
                <div className={styles.itemInfo}>
                  Co-hosted by CTH Group, a leading global blockchain ecosystem builder, 
                  and the City of Miami, the Miami Web3 Summit will be the most significant 
                  international institutional Web3 event of 2022 as we witness this once-in-a-generation 
                  transformation toward our future digital economy.
                </div>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  2
                </div>
                <div className={styles.itemInfo}>
                  Co-hosted by CTH Group, a leading global blockchain ecosystem builder, 
                  and the City of Miami, the Miami Web3 Summit will be the most significant 
                  international institutional Web3 event of 2022 as we witness this once-in-a-generation 
                  transformation toward our future digital economy.
                </div>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemIndex}>
                  3
                </div>
                <div className={styles.itemInfo}>
                  Co-hosted by CTH Group, a leading global blockchain ecosystem builder, 
                  and the City of Miami, the Miami Web3 Summit will be the most significant 
                  international institutional Web3 event of 2022 as we witness this once-in-a-generation 
                  transformation toward our future digital economy.
                </div>
              </div>
            </div>
            <div className={styles.liangdianBanner}>
              <Image className={styles.liangdianImg} src={liangdian} alt="liangdianLogo"  />
            </div>
          </div>
        </div>
        <div className={styles.liangdianInfoItem}>
          <div className={styles.itemIndex}>
            4
          </div>
          <div className={styles.liangdianInfoItemWord}>
            Co-hosted by CTH Group, a leading global blockchain ecosystem builder, 
            and the City of Miami, the Miami Web3 Summit will be the most significant 
            international institutional Web3 event of 2022 as we witness this once-in-a-generation 
            transformation toward our future digital economy.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Liangdian;