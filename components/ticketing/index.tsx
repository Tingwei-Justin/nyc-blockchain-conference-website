import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import agenda2 from "@/public/agenda2.jpg"
import logo from "@/public/logo.png"

const TICKET_LIST = [
  {
    title: 'Two-Day Pass',
    total: '$1,199.00',
    infoPart: 'register by Jan. 13 to save $800 on walk-up rates',
    infoPartTwo: 'A third day of Consensus. Plus, opportunities to learn, grow and connect with professionals in a relaxed environment.',
  },
  {
    title: 'Two-Day Pass',
    total: '$1,199.00',
    infoPart: 'register by Jan. 13 to save $800 on walk-up rates',
    infoPartTwo: 'A third day of Consensus. Plus, opportunities to learn, grow and connect with professionals in a relaxed environment.',
  },
  {
    title: 'Two-Day Pass',
    total: '$1,199.00',
    infoPart: 'register by Jan. 13 to save $800 on walk-up rates',
    infoPartTwo: 'A third day of Consensus. Plus, opportunities to learn, grow and connect with professionals in a relaxed environment.',
  },
  {
    title: 'Two-Day Pass',
    total: '$1,199.00',
    infoPart: 'register by Jan. 13 to save $800 on walk-up rates',
    infoPartTwo: 'A third day of Consensus. Plus, opportunities to learn, grow and connect with professionals in a relaxed environment.',
  },
  {
    title: 'Two-Day Pass',
    total: '$1,199.00',
    infoPart: 'register by Jan. 13 to save $800 on walk-up rates',
    infoPartTwo: 'A third day of Consensus. Plus, opportunities to learn, grow and connect with professionals in a relaxed environment.',
  },
]
const Ticketing: FC = ({}) => {
  return (
    <div className={styles.ticketing}>
      <div className={styles.title}>
        TICKETING
      </div>
      <div className={styles.ticketWarp}>
        {TICKET_LIST.map((item, index) => {
          return <div key={index} className={styles.ticketItem}>
          <div className={styles.itemHead}>
            <Image className={styles.headIcon} src={logo} alt="logo"/>
            <div className={styles.headTitle}>
              {item.title}
            </div>
            <div className={styles.blackCircle}/>
            <div className={styles.blackCircleTwo}/>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.total}>
              {item.total}
            </div>
            <div className={styles.infoPart}>
              {item.infoPart}
            </div>
            <div className={styles.infoPartTwo}>
              {item.infoPartTwo}
            </div>
          </div>
          <div className={styles.itemFoot}>
            <div className={styles.footButton}>
              PURCHASE PASS
            </div>
            <div className={styles.footButton}>
              PURCHASE WITH CRYPTO
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Ticketing;