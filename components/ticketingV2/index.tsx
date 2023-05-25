import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import ticketing_icon_1 from "@/public/v2/ticketing_icon_1.png";
import ticketing_icon_2 from "@/public/v2/ticketing_icon_2.png";
import ticketing_icon_3 from "@/public/v2/ticketing_icon_3.png";
import Link from "next/link";

const ticketingList = [
  {
    icon: ticketing_icon_1,
    title: "VIP ticket",
    total: "$2,800",
    price: "Early bird: $1,600",
    button_top_text: "purchase pass",
    button_bottom_text: "purchase with crypto",
    info_text:
      "VIP Private Networking + Site Visit + VIP zone + VIP badge + tea break in VIP lounge and much more",
  },
  {
    icon: ticketing_icon_2,
    title: "Guest Ticket",
    total: "$699",
    price: "Early bird: $380",
    button_top_text: "purchase pass",
    button_bottom_text: "purchase with crypto",
    info_text: "1 day of content, networking and experiences",
  },
  // {
  //   icon: ticketing_icon_3,
  //   title: "Student Pass",
  //   total: "$3,800",
  //   price: "Early bird: $2,600",
  //   button_top_text: "purchase pass",
  //   button_bottom_text: "purchase with crypto",
  //   info_text:
  //     "Complete the application form with a valid proof of enrollment. Approved students will receive a promotional link via email. Same benefits as the Guest Ticket.",
  // },
];

const TicketingV2: FC = ({}) => {
  return (
    <div className={styles.ticketingV2Content}>
      <div className={styles.topLine}></div>
      <div className={styles.headBar}>
        <div className={styles.title}>Ticket</div>
        <div className={styles.summit}>Bit Block Summit</div>
      </div>
      <div className={styles.ticketingContent}>
        {ticketingList.map((item, index) => {
          return (
            <div key={index} className={styles.itemContent}>
              <div className={styles.ticketingItem}>
                <Image
                  src={item.icon}
                  alt=""
                  className={styles.itemIcon}
                ></Image>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.total}>{item.total}</div>
                <div className={styles.price}>{item.price}</div>
                <Link
                  target="_blank"
                  href={
                    "https://www.eventbrite.com/e/bit-block-summit-nyc-2023-tickets-516213768277"
                  }
                >
                  <div className={styles.buttonTop}>{item.button_top_text}</div>
                </Link>

                {/* <div className={styles.buttonBottom}>
                  {item.button_bottom_text}
                </div> */}
              </div>
              <div className={styles.ticketingInfo}>{item.info_text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketingV2;
