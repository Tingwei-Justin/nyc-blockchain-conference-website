import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoLight from "@/public/bbsnyc.png";
import ConnectBut from "@/components/connectBut";
import email from "@/public/v2/email.png";
import twitter from "@/public/v2/twitter.png";
import { baseUrl } from "@/contants/apis";

const NAV_LIST = [
  // {
  //   title: "Speaker",
  //   link: "/speaker",
  // },
  // {
  //   title: "Sponsors",
  //   link: "/sponsors",
  // },
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
const ICON_LIST = [
  {
    icon: email,
    href: "mailto:info@bbs.nyc",
    target: "_blank",
  },
  {
    icon: twitter,
    href: "https://twitter.com/@BBSNYC2023",
    target: "_blank",
  },
];

export const NavBar: FC = ({}) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.logoContent}>
          <Image src={logoLight} alt="logo" />
        </div>
      </Link>
      {/*<ul className={styles.navUl}>
        {NAV_LIST.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <li className={styles.navLi} key={index}>
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>*/}
      <ul className={styles.navUl}>
        {ICON_LIST.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <li className={styles.navLi} key={index}>
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt=""
                    height={30}
                    width={30}
                    style={{ objectFit: "contain" }}
                    // className={styles.concatIcon}
                  ></Image>
                )}
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
