import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/speaker.png";
import Link from "next/link";

const ALLSPEAKERS = [
  // {
  //   url: speaker,
  //   name: "George Soros",
  //   postion: "Chair of Soros Fund Management LLC",
  // },
  {
    url: "/speakers/Roosevelt.png",
    name: "Roosevelt Skerrit",
    postion: "Prime Minister of Dominica",
  },
  // {
  //   url: speaker,
  //   name: "Dickon Mitchell",
  //   postion: "Prime Minister of Grenada",
  // },
  {
    url: "/speakers/allen_chastanet_2.png",
    name: "Allen Chastanet",
    postion: "Former Prime Minister of St Lucia",
  },
  {
    url: "/speakers/Peter_David_02.jpg",
    name: "Peter David",
    postion: "Representative of Grenada",
  },
  {
    url: "/speakers/Star.png",
    name: "Star Xu",
    postion: "CEO of OKX",
  },
  {
    url: "/speakers/Eric.png",
    name: "Eric Adams",
    postion: "Mayor of New York",
  },
  {
    url: "/speakers/JohnF.png",
    name: "John F. Manning",
    postion: "Harvard Law School",
  },
  {
    url: "/speakers/Erwin.png",
    name: "Erwin Chemerinsky",
    postion: "Dean of UC Berkeley School of Law",
  },
  {
    url: "/speakers/Gillian.png",
    name: "Gillian Lester",
    postion: "Dean of Columbia Law School",
  },
  {
    url: "/speakers/Feng.png",
    name: "Feng Xiao",
    postion: "Wanxiang Blockchai",
  },
  {
    url: "/speakers/Vitalik.png",
    name: "Vitalik Buterin",
    postion: "Founder of ETH Foundation",
  },
  {
    url: "/speakers/cz.png",
    name: "CZ",
    postion: "Binance CEO",
  },
  {
    url: "/speakers/Brian.png",
    name: "Brian Armstrong",
    postion: "CEO of Coinbase",
  },
  {
    url: "/speakers/JustinSun.png",
    name: "Justin Sun",
    postion: "Founder of TRON",
  },
  {
    url: "/speakers/JackKong.png",
    name: "JACK Kong",
    postion: "Founder of Nano Labs",
  },
  {
    url: "/speakers/Eddie_chong.png",
    name: "Eddie Chong",
    postion: "Founder of Dcoreum",
  },
  {
    url: "/speakers/barry.png",
    name: "Barry Silbert",
    postion: "Founder of Grayscale",
  },
  {
    url: "/speakers/Cathie.png",
    name: "Cathie Wood",
    postion: "Founder of Ark Invest",
  },
  // {
  //   url: "/speakers/Cathie.png",
  //   name: "Ray Dalio",
  //   postion: "Founder of Bridgewater Associates",
  // },
  {
    url: "/speakers/Wensheng.png",
    name: "Wensheng Cai",
    postion: "Chairman of Meitu",
  },
  {
    url: "/speakers/fish.png",
    name: "Discus Fish",
    postion: "Cobo Co-founder",
  },

  {
    url: "/speakers/Chao.png",
    name: "CHAO MA",
    postion: "Chairman of Realord Group",
  },
  {
    url: "/speakers/JackYi.png",
    name: "Jack Yi",
    postion: "Founder of LD Capital",
  },
  {
    url: "/speakers/jundu.png",
    name: "Jun Du",
    postion: "CEO of New Huo Tech",
  },
];
const Speaker = () => {
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>SPEAKER (RSVP LIST)</div>
        {/* <div className={styles.apply}>
          <Link href="/speaker">APPLY</Link>
          <Image
            src={rightArrow}
            className={styles.rightAllow}
            alt="right_allow"
          ></Image>
        </div> */}
      </div>
      <ul className={styles.allspeaker}>
        {ALLSPEAKERS.map((item, index) => {
          return (
            <li key={index} className={styles.speakersLi}>
              <Image
                src={item.url}
                alt={item.name + index}
                className={styles.speakerImg}
                width={200}
                height={200}
              ></Image>
              <span>{item.name}</span>
              <p>{item.postion}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Speaker;
