import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoLight from "@/public/logo.png";

const NAV_LIST = [
  {
    title: "Speaker",
    link: "/speaker",
  },
  {
    title: "Sponsors",
    link: "/sponsors",
  },
  {
    title: "Agenda",
    link: "/",
  },
  {
    title: "Vote",
    link: "/",
  },
  {
    title: "Speaksers",
    link: "/",
  },
];

export const NavBar: FC = ({}) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <Image src={logoLight} alt="logo" />
      </Link>
      <ul className={styles.navUl}>
        {NAV_LIST.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <li key={index} className={styles.navLi}>
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className={styles.ticketButton}>TICKETING</div>
    </div>
  );
};
