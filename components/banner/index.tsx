import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import clock from "@/public/clock.png"
import address from "@/public/address.png"

const Banner: FC = ({}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.meetingCome}/>
        <div className={styles.bannerBackground}/>
        <div className={styles.meetingInfo}>
          <Image src={clock} alt="logo" width={77} height={77} />
          <div className={styles.meetInfoContent}>
            <div className={styles.infoDate}>
              Date : MAY   26-28 • NYC
            </div>
            <div className={styles.infoAddress}>
              {'ADDRESS '}
              <Image src={address} alt="logo" width={35} height={35} />
              {' XXXXX-XXXX-XXXX'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;