import type { NextPage } from "next";
import styles from "./index.module.scss";
import Banner from '../components/banner'
import Liangdian from '../components/Liangdian'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Liangdian></Liangdian>
    </div>
  );
};

Home.getInitialProps = () => {
  return {
  };
};

export default Home;