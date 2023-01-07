<<<<<<< HEAD
import { FC } from 'react';
import styles from "./styles.module.scss"
<<<<<<<< HEAD:components/speaker/index.tsx
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/speaker.png";
=======
import { FC } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/test.jpg";
import speakerBack from "@/public/SPEAKER_back.png";
>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912
const ALLSPEAKERS=[
    {
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    }
    ,{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },
    {
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    },{
        url:speaker,
        name:"KATE",
        postion:"NYCfounder CEO"
    }
]
const Speaker: FC =({}) => {
    return(
<<<<<<< HEAD
        <div className={styles.speaker}>
                <div className={styles.title}>
                    SPEAKER
                    <div className={styles.Apply}>
                        Apply
                        <Image src={rightArrow}  alt="rightArrow" className={styles.rightArrow}></Image>
                    </div>
                </div>
=======
        <div className={styles.sponsor}>
                <div className={styles.title}>SPEAKER
                <div className={styles.Apply}>Apply
                <Image src={rightArrow}  alt="rightArrow" className={styles.rightArrow}></Image>
                </div>
                </div>
                <Image src={speakerBack} alt="speakerBack" className={styles.speakerBack}></Image>
>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912
                <ul className={styles.allspeaker}>
                    {
                        ALLSPEAKERS.map((item,index)=>{
                            return <li key={index} className={styles.speakersLi}>
                                <Image src={item.url} alt={item.name+index} className={styles.speakerImg}></Image>
                                <span>{item.name}</span>
                                <p>{item.postion}</p>
                            </li>
                        })
                    }
                </ul>
<<<<<<< HEAD
========
import Image from 'next/image';
import binance from "@/public/binance.png"
import meta_mask from "@/public/meta_mask.png"
import trust from "@/public/trust.png"
import token_pocket from "@/public/token_pocket.png"

const SPONSOR_LIST = [
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
  binance, meta_mask, trust, token_pocket,
]
const Sponsor: FC = ({}) => {
  return (
    <div className={styles.sponsorContent}>
      <div className={styles.head}>
        <div className={styles.title}>
          SPONSOR
>>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912:components/sponsor/index.tsx
        </div>
        <div></div>
      </div>
        <div className={styles.sponsorWrap}>
          {SPONSOR_LIST.map((item, index) => {
            return <div key={index} className={styles.sponsorItem}>
              <Image className={styles.itemImg} alt="itemImg" src={item}></Image>
            </div>
          })}
        </div>
    </div>
  )
}
<<<<<<<< HEAD:components/speaker/index.tsx
export default Speaker;
========

export default Sponsor;
>>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912:components/sponsor/index.tsx
=======
        </div>
    )
}
export default Speaker;
>>>>>>> 733a19f47fc516bb74416c974adeb7372bddd912
