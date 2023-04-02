import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const ALL_PEOPLES = [
  {
    url: "/thinkTankPeoples/Jianing_yu.jpg",
    name: "",
    postion: "",
  },
  {
    url: "/thinkTankPeoples/Yan_meng.jpg",
    name: "",
    postion: "",
  },
  {
    url: "/thinkTankPeoples/Hui_han.png",
    name: "",
    postion: "",
  },
]
const ThinkTankPeoples = () => {
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>Honorary Advisor</div>
      </div>
      <ul className={styles.allspeaker}>
        {ALL_PEOPLES.map((item, index) => {
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

export default ThinkTankPeoples;
