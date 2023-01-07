import { FC } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import rightArrow from "@/public/rightAllow.png";
import speaker from "@/public/test.jpg";
import speakerBack from "@/public/SPEAKER_back.png";
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
        <div className={styles.sponsor}>
                <div className={styles.title}>SPEAKER
                <div className={styles.Apply}>Apply
                <Image src={rightArrow}  alt="rightArrow" className={styles.rightArrow}></Image>
                </div>
                </div>
                <Image src={speakerBack} alt="speakerBack" className={styles.speakerBack}></Image>
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
        </div>
    )
}
export default Speaker;