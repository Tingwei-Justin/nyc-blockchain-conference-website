import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const ALL_PEOPLES = [
  {
    url: "/honorarySecretary/rick.png",
    name: "Rick",
    postion: "",
  },
  {
    url: "/honorarySecretary/Justin_z.jpg",
    name: "Justin_z",
    postion: "",
  },
  {
    url: "/honorarySecretary/Stephen_c.jpg",
    name: "Stephen_c",
    postion: "",
  },,
  {
    url: "/honorarySecretary/Tracy_z.png",
    name: "Tracy_z",
    postion: "",
  },,
  {
    url: "/honorarySecretary/KK.jpg",
    name: "KK",
    postion: "",
  },,
  {
    url: "/honorarySecretary/Allan.jpg",
    name: "Allan",
    postion: "",
  },,
  {
    url: "/honorarySecretary/Christina.jpg",
    name: "Christina",
    postion: "",
  },,
  {
    url: "/honorarySecretary/Johnny.jpg",
    name: "Johnny",
    postion: "",
  },,
  {
    url: "/honorarySecretary/Louis.png",
    name: "Louis",
    postion: "",
  },
]
const HonorarySecretary = () => {
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>Honorary Secretary</div>
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

export default HonorarySecretary;
