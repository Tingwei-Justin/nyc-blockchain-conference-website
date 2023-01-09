import { NextPage } from "next";
import styles from "./index.module.scss";
import Agenda from '../../components/agenda'

const Sponsors: NextPage = () => {
  return (
    <div className={styles.container}>
      <Agenda></Agenda>
    </div>
  );
};

export default Sponsors;