import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import agenda1 from "@/public/agenda1.jpg"
import agenda2 from "@/public/agenda2.jpg"

const Agenda: FC = ({}) => {
  return (
    <div className={styles.agendaContent}>
      <div className={styles.title}>
        AGENDA
      </div>
      <div className={styles.agendaWrap}>
        <div className={styles.leftLine}>
          <div className={styles.arc}>
            <div className={styles.arcContent}/>
          </div>
          <div className={`${styles.arc} ${styles.arcTwo}`}>
            <div className={styles.arcContent}/>
          </div>
        </div>
        <div className={styles.nymInfoItem}>
          <div className={styles.nycInfo}>
            <span className={styles.infoTime}>2023-01-09 12:00 # NFTNYC</span>
            <span className={styles.infoTip}>More than just an event</span>
          </div>
          <div className={styles.nycImage}>
            <Image className={styles.agenda1} src={agenda1} alt="agenda1" />
          </div>
        </div>
        <div className={styles.nymInfoItem}>
          <div className={styles.nycInfo}>
            <span className={styles.infoTime}>2023-01-09 12:00 # NFTNYC</span>
            <span className={styles.infoTip}>More than just an event</span>
          </div>
          <div className={styles.nycImage}>
            <Image className={styles.agenda2} src={agenda2} alt="agenda2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda;