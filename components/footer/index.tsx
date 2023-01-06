import { FC } from "react";
import Image from "next/image";
import publicLogo from "@/public/public_logo.png";
import footerSocial1 from "@/public/foot_social_one.png"
import footerSocial2 from "@/public/foot_social_two.png"
import footerSocial3 from "@/public/foot_social_three.png"
import footerSocial4 from "@/public/foot_social_four.png"
import styles from "./styles.module.scss";

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer_nav}>
        <li>Mobile app</li>
        <li>Community</li>
        <li>Company</li>
        <li>Help desk</li>
        <li>Blog</li>
        <li>Resources</li>
        <span>#NYCNFT</span>
      </ul>
      <div className={styles.footer_line}></div>
      <ul className={styles.footer_social}>
        <li><a href=""><Image src={footerSocial1} alt="footer_social_1" width={59} height={59}></Image></a></li>
        <li><a href=""><Image src={footerSocial2} alt="footer_social_2"></Image></a></li>
        <li><a href=""><Image src={footerSocial3} alt="footer_social_3"></Image></a></li>
        <li><a href=""><Image src={footerSocial4} alt="footer_social_4"></Image></a></li>
      </ul>
      <span className={styles.footer_tips}>© NYCNFT, Inc. 2023. We love our users!</span>
    </div>
  );
};