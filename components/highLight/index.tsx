import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import highLight_1 from '@/public/v2/highLight_1.png'
import highLight_2 from '@/public/v2/highLight_2.png'
import highLight_3 from '@/public/v2/highLight_3.png'
import highLight_4 from '@/public/v2/highLight_4.png'

const highLightList = [
  {
    image: highLight_1,
    text: 'How to rebuild the industry consensus after the conllapse of 3AC, LUNA, and FTX',
  },{
    image: highLight_2,
    text: 'To enhance dialogues between scholars, legislators, government authorities and the core industry leaders. As to build mutual trust through private meetings and open dialogues, and also...',
  },{
    image: highLight_3,
    text: 'Promote the constitution of the metaverse and establish a more orderly metaverse ecology. Promote the governance level of DAO',
  },{
    image: highLight_4,
    text: 'Establish the largest industry summit brand in New York, and provide an effective communication platform for regulators, Wall Street, academia, technologists, entrepreneurs, and cryptocurrency enthusiasts',
  },
]
const HighLight: FC = () => {
  return (
    <div className={styles.highLightContent}>
      <div className={styles.topInfo}>
        The most significant international institutional Web3 event of 2023
      </div>
      <div className={styles.line}></div>
      <div className={styles.highLightWrap}>
        <div className={styles.title}>
          Highlight
        </div>
        <div className={styles.highLightCardContent}>
          {
            highLightList.map((item, index) => {
              return (
                <div className={styles.highLightItem} key={index}>
                  <div className={styles.itemIndex}>
                    { index + 1 >= 10 ? index : '0' + (index + 1) }
                  </div>
                  <Image src={item.image} className={styles.itemImage} alt=''></Image>
                  <div className={styles.highLightItemText}>
                    {item.text}
                  </div>
                  <div className={styles.highLightItemButton}>
                    read more →
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default HighLight;
