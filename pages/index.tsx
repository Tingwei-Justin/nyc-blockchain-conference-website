import type { NextPage } from "next";
import styles from "./index.module.scss";
import Banner from '../components/banner';
import Liangdian from '../components/Liangdian';
import Sponsor from "../components/sponsor";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Liangdian></Liangdian>
      <Sponsor></Sponsor>
    </div>
  );
};

Home.getInitialProps = () => {
  return {
  };
};

export default Home;