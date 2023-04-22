import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { baseUrl } from "@/contants/apis";

interface sperkerProps {
  guestRes: Array<guestItem>
}
interface guestItem {
  name: string
  images: string
  brief: string
}
const Speaker: FC<sperkerProps> = (props) => {
  const {
    guestRes
  } = props
  const compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }            
    } 
  }
  const speakers = guestRes.sort(compare('sort'))
  return (
    <div className={styles.speaker}>
      <div className={styles.head}>
        <div className={styles.title}>SPEAKER (RSVP LIST)</div>
      </div>
      <ul className={styles.allspeaker}>
        {speakers.map((item, index) => {
          return (
            <li key={index} className={styles.speakersLi}>
              <Image
                src={item.images.replace('.', baseUrl)}
                alt={item.name + index}
                className={styles.speakerImg}
                width={200}
                height={200}
              ></Image>
              <span>{item.name}</span>
              <p>{item.brief}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Speaker;
