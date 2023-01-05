import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import logoLight from "@/public/logo.png"

const NAV_LIST = [
  {
    title: 'speaker'
  },{
    title: 'Sponsors'
  },{
    title: 'Agenda'
  },{
    title: 'Vote'
  },{
    title: 'Speaksers'
  },
]

export const NavBar: FC = ({}) => {
  return (
    <div className={styles.navBar}>
      <Image src={logoLight} alt="logo" width={69} height={54} />
      <ul className={styles.navUl}>
        {
          NAV_LIST.map((item, index) => {
            return <li key={index} className={styles.navLi}>
              {item.title}
            </li>
          })
        }
      </ul>
      <div className={styles.ticketButton}>
        TICKETING
      </div>
    </div>
  )
}