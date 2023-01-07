import { FC } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import votePerson from "@/public/vote_person.png"

const RULE_LIST = [
  {
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  },{
    rule: 'what are the voting rules'
  }
]

const VOTE_LIST = [
  {
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  },{
    image: votePerson,
    name: 'KEVIN',
    total: '1025589755800',
  }
]

const Vote: FC = ({}) => {
  return (
    <div className={styles.vote}>
      <div className={styles.title}>
        VOTE
      </div>
      <div className={styles.voteWrap}>
        <div className={styles.rules}>
          <div className={styles.rulesTitle}>
            rules
          </div>
          <div className={styles.ruleWrap}>
            {RULE_LIST.map((item, index) => {
              return <div key={index} className={styles.ruleItem}>
                {item.rule}
              </div>
            })}
          </div>
        </div>
        <div className={styles.voteListContent}>
          <div className={styles.voteListWrap}>
            {VOTE_LIST.map((item, index) => {
              return <div key={index} className={styles.voteItem}>
                <Image className={styles.votePersonImg} src={item.image} alt='votePerson'/>
                <div className={styles.name}>
                  {item.name}
                </div>
                <div className={styles.total}>
                  {item.total}
                </div>
                <div className={styles.voteButton}>
                  REGISTER
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vote;