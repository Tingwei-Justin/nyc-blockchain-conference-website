import { NextPage } from "next";
import styles from "./index.module.scss";
import Banner from "../components/banner";
import Liangdian from "../components/liangdian";
import Agenda from "../components/agenda";
import Ticketing from "../components/ticketing";
import Vote from "../components/vote";
import Speaker from "@/components/speaker";
import Sponsor from "../components/sponsor";
import Intro from "@/components/intro";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Intro></Intro>
      <Liangdian></Liangdian>
      <Agenda></Agenda>

      {/* <Vote></Vote> */}
      <Speaker></Speaker>
      <Ticketing></Ticketing>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
