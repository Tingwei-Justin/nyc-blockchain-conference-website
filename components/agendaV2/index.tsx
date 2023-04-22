import { FC } from "react";
import styles from "./styles.module.scss";

interface agendaProps {
  agendaRes: Array<agendaItem>
}
interface agendaItem {
  title: string
  time: string
}
const AgendaV2: FC<agendaProps> = (props) => {
  const {
    agendaRes
  } = props
  return (
    <div className={styles.agendaV2Content}>
      <div className={styles.title}>Agenda</div>
      <div className={styles.content}>
        <div className={styles.contentTopBar}>
          <div className={styles.topBarItem}>Time</div>
          {/* <div className={styles.topBarItem}>Speaker</div> */}
          <div className={styles.topBarItem}>Topic</div>
        </div>
        {
          agendaRes.map((item, index) => {
            return (
              <div key={index} className={styles.agendaInfoItem}>
                <div className={styles.itemDate}>{item.time}</div>
                <div className={styles.itemInfo}>{item.title}</div>
            </div>
            )
          })
        }
        {/* <div className={styles.agendaInfoItem}>
          <div className={styles.itemDate}>2023-01-09 12:00</div>
          <div className={styles.itemName}>Gillian</div>
          <div className={styles.itemInfo}>
            How to rebuild the industry consensus after the conllapse of 3AC？
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AgendaV2;
