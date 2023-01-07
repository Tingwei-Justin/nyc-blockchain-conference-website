import { NextPage } from "next";
import styles from "./index.module.scss";
import Banner from '../components/banner'
import Liangdian from '../components/liangdian'
import Agenda from '../components/agenda'
import Ticketing from '../components/ticketing'
import Vote from '../components/vote'
<<<<<<< HEAD
import Speaker from "@/components/speaker";
=======
import Speaker from "../components/speaker";
import Sponsor from "../components/sponsor";
>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Liangdian></Liangdian>
      <Agenda></Agenda>
      <Ticketing></Ticketing>
      <Vote></Vote>
      <Speaker></Speaker>
<<<<<<< HEAD
=======
      <Sponsor></Sponsor>
>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912
    </div>
  );
};

export default Home;