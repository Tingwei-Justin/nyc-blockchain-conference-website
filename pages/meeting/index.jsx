import styles from "./index.module.scss";
import Image from "next/image";
import date from '@/public/date.png'
import time_1 from '@/public/time1.png'
import time_2 from '@/public/time2.png'
import address from '@/public/address2.png'
import speaker_1 from '@/public/honorarySecretary/jennie.jpg'
import speaker_2 from '@/public/honorarySecretary/Christina.jpg'
import { FooterV2 } from "@/components/footerV2/index";
import speaker_3 from '@/public/honorarySecretary/KK.jpg'
import { withRouter} from 'next/router'
import {
    queryCategory,
} from "../../utils/servers.js";

const dateList = [
    {
        image: date,
        text: 'Wednesday April 26',
    },{
        image: time_1,
        text: '9:00 AM CDT·10:00 AM EDT',
    },{
        image: time_2,
        text: '1 h 00 m',
    }
];
const speaker = [
    {
        image:speaker_1,
        name:'Hon. Roosevelt Skerrit',
        intro:'Prime Minister of Dominica ',
    },
    {
        image:speaker_2,
        name:'Hon. Roosevelt Skerrit',
        intro:'Prime Minister of Dominica',
    },
    {
        image:speaker_3,
        name:'Hon. Roosevelt Skerrit',
        intro:'Prime Minister of Dominica',
    },
];

const Meeting = (props) => {
    const {
        categoryRes = { data: []}
    } = props

    return (
        <div className={styles.container}>
            <div className={styles.topDetail}>
                <span>Wednesday，April 26 8:30 AM CDT·</span>
                9:30 AM EDT
            </div>
            <div className={styles.formContainer}>
                {/*详情1*/}
                <div className={styles.detail}>
                    <div className={styles.leftDetail}>
                        <div className={styles.leftFirst}>
                            9:00 AM CDT
                        </div>
                        <div className={styles.leftSecond}>
                            10:00 AM EDT
                        </div>
                    </div>
                    <div className={styles.rightDetail}>
                        <div className={styles.timeDetail}>
                            {dateList.map((item, index) => {
                                return (
                                    <div key={index} className={styles.concatItem}>
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt=""
                                                className={styles.concatIcon}
                                            ></Image>
                                        )}
                                        {item.text}
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingTitle}>
                            Web3 & AI Global Demo Day
                        </div>
                        <div className={styles.meetingAddress}>
                            <Image
                                src={address}
                                alt=""
                                className={styles.concatIcon}
                            ></Image>
                            Grand Ballroom
                        </div>
                        <div className={styles.speaker}>
                            {speaker.map((item, index) => {
                                return (
                                    <div key={index} className={styles.speakerDetail}>
                                        <div>
                                            {
                                                item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name + index}
                                                        className={styles.speakerImage}
                                                    ></Image>
                                                )
                                            }
                                        </div>
                                        <div className={styles.speakerName}>
                                            <p>{item.name}</p>
                                            <p>{item.intro}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingDetail}>
                            To enhance dialogues between scholars, legislators, government authorities and the core
                            industry leaders. As to build mutual trust through private meetings and open dialogues, and
                            also, to explore a reciprocal and applicable industry self-regulatory standards and
                            government regulatory rules.
                        </div>
                    </div>
                </div>
                {/*详情2*/}
                <div className={styles.detail}>
                    <div className={styles.leftDetail}>
                        <div className={styles.leftFirst}>
                            9:00 AM CDT
                        </div>
                        <div className={styles.leftSecond}>
                            10:00 AM EDT
                        </div>
                    </div>
                    <div className={styles.rightDetail}>
                        <div className={styles.timeDetail}>
                            {dateList.map((item, index) => {
                                return (
                                    <div key={index} className={styles.concatItem}>
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt=""
                                                className={styles.concatIcon}
                                            ></Image>
                                        )}
                                        {item.text}
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingTitle}>
                            Web3 & AI Global Demo Day
                        </div>
                        <div className={styles.meetingAddress}>
                            <Image
                                src={address}
                                alt=""
                                className={styles.concatIcon}
                            ></Image>
                            Grand Ballroom
                        </div>
                        <div className={styles.speaker}>
                            {speaker.map((item, index) => {
                                return (
                                    <div key={index} className={styles.speakerDetail}>
                                        <div>
                                            {
                                                item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name + index}
                                                        className={styles.speakerImage}
                                                    ></Image>
                                                )
                                            }
                                        </div>
                                        <div className={styles.speakerName}>
                                            <p>{item.name}</p>
                                            <p>{item.intro}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingDetail}>
                            To enhance dialogues between scholars, legislators, government authorities and the core
                            industry leaders. As to build mutual trust through private meetings and open dialogues, and
                            also, to explore a reciprocal and applicable industry self-regulatory standards and
                            government regulatory rules.
                        </div>
                    </div>
                </div>
                {/*详情3*/}
                <div className={styles.detail}>
                    <div className={styles.leftDetail}>
                        <div className={styles.leftFirst}>
                            9:00 AM CDT
                        </div>
                        <div className={styles.leftSecond}>
                            10:00 AM EDT
                        </div>
                    </div>
                    <div className={styles.rightDetail}>
                        <div className={styles.timeDetail}>
                            {dateList.map((item, index) => {
                                return (
                                    <div key={index} className={styles.concatItem}>
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt=""
                                                className={styles.concatIcon}
                                            ></Image>
                                        )}
                                        {item.text}
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingTitle}>
                            Web3 & AI Global Demo Day
                        </div>
                        <div className={styles.meetingAddress}>
                            <Image
                                src={address}
                                alt=""
                                className={styles.concatIcon}
                            ></Image>
                            Grand Ballroom
                        </div>
                        <div className={styles.speaker}>
                            {speaker.map((item, index) => {
                                return (
                                    <div key={index} className={styles.speakerDetail}>
                                        <div>
                                            {
                                                item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name + index}
                                                        className={styles.speakerImage}
                                                    ></Image>
                                                )
                                            }
                                        </div>
                                        <div className={styles.speakerName}>
                                            <p>{item.name}</p>
                                            <p>{item.intro}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.meetingDetail}>
                            To enhance dialogues between scholars, legislators, government authorities and the core
                            industry leaders. As to build mutual trust through private meetings and open dialogues, and
                            also, to explore a reciprocal and applicable industry self-regulatory standards and
                            government regulatory rules.
                        </div>
                    </div>
                </div>
            </div>
            <FooterV2 categoryRes={categoryRes.data}></FooterV2>
        </div>
    );
};

export async function getServerSideProps(context) {
    const categoryRes = await queryCategory({
        page: 1,
        limit: 50,
        category: "",
    });
    return {
        props: {
            query: context.query,
            categoryRes
        },
    }
}

export default withRouter(Meeting);
