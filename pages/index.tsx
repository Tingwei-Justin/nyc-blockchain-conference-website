import type { NextPage } from "next";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      hello word!
    </div>
  );
};

Home.getInitialProps = () => {
  return {
  };
};

export default Home;