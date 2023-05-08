import styles from "./index.module.scss";
import highLight_1 from '@/public/v2/highLight_1.png'
import Image from "next/image";
import email from "../../public/v2/email.png";
import twitter from "../../public/v2/twitter.png";
import Link from "next/link";
import { FooterV2 } from "@/components/footerV2/index";
import { withRouter} from 'next/router'
import {
    queryCategory,
} from "../../utils/servers.js";

const NvaList = [
    {
        icon: email,
        text: "Email: info@bbs.nyc",
        link: "mailto:info@bbs.nyc",
        target: "_blank",
    },
    {
        icon: "",
        text: "Tel: +1 (212) 884-8760",
        link: "",
        target: "_blank",
    },
    {
        icon: twitter,
        text: "@BBSNYC2023",
        link: "https://twitter.com/@BBSNYC2023",
        target: "_blank",
    },
];
const HighLight = (props) => {
    console.log(props)
    const {
        categoryRes = { data: []}
    } = props
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                Details Of Highlights
            </div>
            <div className={styles.formContainer}>
                <div className={styles.detail}>
                    <div className={styles.timeDetail}>
                        创建时间
                    </div>
                    <div className={styles.titleDetail}>
                        Blockchain Autonomy  Declaration 2023
                    </div>
                    <div className={styles.textDetail}>
                        <Image
                            src={highLight_1}
                            className={styles.Image}
                            width={340}
                            alt=''
                        >
                        </Image>
                        <div className={styles.highLightItemText}>
                            To enhance dialogues between scholars, legislators, government authorities and the core industry leaders. As to build mutual trust through private meetings and open dialogues, and also, to explore a reciprocal and applicable industry self-regulatory standards and government regulatory rules.
                        </div>
                    </div>
                    <div className={styles.bottomDetail}>
                        {NvaList.map((item, index) => {
                            return (
                                <Link key={index} href={item.link} target={item.target}  className={styles.concatItem}>
                                    {item.icon && (
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            className={styles.concatIcon}
                                        ></Image>
                                    )}
                                </Link>
                            );
                        })}
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

export default withRouter(HighLight);
