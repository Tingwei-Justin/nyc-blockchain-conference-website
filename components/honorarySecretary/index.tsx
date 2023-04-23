import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { baseUrl } from "@/contants/apis";

const ALL_PEOPLES = [
  {
    url: "/honorarySecretary/Stephen_c.jpg",
    name: "Stephen C.",
    postion: "",
  },
  {
    url: "/honorarySecretary/rick.png",
    name: "Rick C.",
    postion: "",
  },
  {
    url: "/honorarySecretary/jennie.jpg",
    name: "Jennie",
    postion: "",
  },
  {
    url: "/honorarySecretary/Justin_z.jpg",
    name: "Justin Z.",
    postion: "",
  },

  ,
  {
    url: "/honorarySecretary/Tracy_z.png",
    name: "Tracy Z.",
    postion: "",
  },
  ,
  {
    url: "/honorarySecretary/KK.jpg",
    name: "KK",
    postion: "",
  },
  ,
  // {
  //   url: "/honorarySecretary/Allan.jpg",
  //   name: "Allan",
  //   postion: "",
  // },,
  {
    url: "/honorarySecretary/Christina.jpg",
    name: "Christina",
    postion: "",
  },
  ,
  {
    url: "/honorarySecretary/Johnny.jpg",
    name: "Johnny L.",
    postion: "",
  },
  ,
  {
    url: "/honorarySecretary/Louis.png",
    name: "Louis",
    postion: "",
  },
]
interface secretaryProps {
  secretaryRes: Array<secretaryItem>
}
interface secretaryItem {
  image: string
  name: string
  position?: string | ''
}
const HonorarySecretary: FC<secretaryProps> = (props) => {
  const {
    secretaryRes
  } = props
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>Honorary Secretary</div>
      </div>
      <ul className={styles.allspeaker}>
        {secretaryRes.map((item, index) => {
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

export default HonorarySecretary;
