import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoLight from "@/public/bbsnyc.png";
import ConnectBut from "@/components/connectBut";

const NAV_LIST = [
  {
    title: "Speaker",
    link: "/speaker",
  },
  {
    title: "Sponsors",
    link: "/sponsors",
  },
  // {
  //   title: 'Agenda',
  //   link: '/',
  // },{
  //   title: 'Vote',
  //   link: '/',
  // },{
  //   title: 'Speaksers',
  //   link: '/',
  // },
];

export const NavBar: FC = ({}) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.logoContent}>
          <Image src={logoLight} alt="logo" />
        </div>
      </Link>
      <ul className={styles.navUl}>
        {NAV_LIST.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <li className={styles.navLi} key={index}>
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <Link
        href={
          "https://www.eventbrite.com/e/bit-block-summit-nyc-2023-tickets-516213768277"
        }
        target="_blank"
      >
        <div className={styles.ticketButton}>
          {/* <ConnectBut /> */}
          TICKETING
        </div>
      </Link>
    </div>
  );
};
