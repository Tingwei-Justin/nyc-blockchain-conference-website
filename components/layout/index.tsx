import { FC } from "react";
import { NavBar } from "../navbar/index";
import styles from "./styles.module.scss";
export const Layout: FC<{ children: JSX.Element }> = (props) => {
  const {
    children
  } = props
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
