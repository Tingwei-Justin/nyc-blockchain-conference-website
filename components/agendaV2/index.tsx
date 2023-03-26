import { FC } from "react";
import styles from "./styles.module.scss";

const AgendaV2: FC = ({}) => {
  return (
    <div className={styles.agendaV2Content}>
      <div className={styles.title}>Agenda</div>
      <div className={styles.content}>
        <div className={styles.contentTopBar}>
          <div className={styles.topBarItem}>Time</div>
          {/* <div className={styles.topBarItem}>Speaker</div> */}
          <div className={styles.topBarItem}>Topic</div>
        </div>
        <div className={styles.agendaInfoItem}>
          <div className={styles.itemDate}>2023-06-01 至 2023-06-02</div>
          {/* <div className={styles.itemName}>Gillian</div> */}
          <div className={styles.itemInfo}>2023 WEB Leaders Summit</div>
        </div>
        <div className={styles.agendaInfoItem}>
          <div className={styles.itemDate}>2023-06-01 至 2023-06-02</div>
          {/* <div className={styles.itemName}>Gillian</div> */}
          <div className={styles.itemInfo}>2023 Metaverse Citizens Summit</div>
        </div>
        <div className={styles.agendaInfoItem}>
          <div className={styles.itemDate}>2023-06-01 至 2023-06-02</div>
          {/* <div className={styles.itemName}>Gillian</div> */}
          <div className={styles.itemInfo}>
            Supervision, compliance, and consensus rebuild
          </div>
        </div>
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
