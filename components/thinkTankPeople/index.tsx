import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { baseUrl } from "@/contants/apis";

const ALL_PEOPLES = [
  {
    url: "/thinkTankPeoples/Jianing_yu.jpg",
    name: "Jianing yu",
    postion: "",
  },
  {
    url: "/thinkTankPeoples/Yan_meng.jpg",
    name: "Yan meng",
    postion: "",
  },
  {
    url: "/thinkTankPeoples/Feng_Han.jpg",
    name: "Feng Han",
    postion: "",
  },
]
interface advisorProps {
  advisorRes: Array<advisorItem>
}
interface advisorItem {
  image: string
  name: string
  position?: string | ''
}
const ThinkTankPeoples: FC<advisorProps> = (props) => {
  const {
    advisorRes
  } = props
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>Honorary Advisor</div>
      </div>
      <ul className={styles.allspeaker}>
        {advisorRes.map((item, index) => {
          return (
            <li key={index} className={styles.speakersLi}>
              <Image
                src={item.image.replace('.', baseUrl)}
                alt={item.name + index}
                className={styles.speakerImg}
                width={200}
                height={200}
              ></Image>
              <span>{item.name}</span>
              <p>{item.position}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThinkTankPeoples;
