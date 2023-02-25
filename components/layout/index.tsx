import { FC } from "react";
// import { Footer } from "../footer/index";
import { NavBar } from "../navbar/index";
import { FooterV2 } from '../footerV2/index'
import styles from "./styles.module.scss";

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <FooterV2 />
    </div>
  );
};
