import type { NextPage } from "next";
import styles from "./index.module.scss";
import Banner from '../components/banner'
import Liangdian from '../components/liangdian'
import Agenda from '../components/agenda'
import Ticketing from '../components/ticketing'
import Vote from '../components/vote'
import Speaker from "../components/speaker";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Liangdian></Liangdian>
      <Agenda></Agenda>
      <Ticketing></Ticketing>
      <Vote></Vote>
      <Speaker></Speaker>
    </div>
  );
};

Home.getInitialProps = () => {
  return {
  };
};

export default Home;