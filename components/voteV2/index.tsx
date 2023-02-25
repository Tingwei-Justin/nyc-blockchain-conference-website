import { FC, useState, useMemo } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import big_people_1 from '@/public/v2/big_people_1.png'
import little_people_1 from '@/public/v2/little_people_1.png'
import little_people_2 from '@/public/v2/little_people_2.png'
import little_people_3 from '@/public/v2/little_people_3.png'
import little_people_4 from '@/public/v2/little_people_4.png'
import little_people_5 from '@/public/v2/little_people_5.png'

const littleImageList = [
  {
    alt: '',
    src: little_people_1,
  },{
    alt: '',
    src: little_people_2,
  },{
    alt: '',
    src: little_people_3,
  },{
    alt: '',
    src: little_people_4,
  },{
    alt: '',
    src: little_people_5,
  }
]

const bigImageList = [
  big_people_1,
  little_people_2,
  little_people_3,
  little_people_4,
  little_people_5,
]

const VoteV2: FC = ({}) => {
  const [currentChooseImageIndex, setCurrentChooseImageIndex] = useState(0)
  const handleClickItem = (index) => {
    setCurrentChooseImageIndex(index)
  }
  const currentBigImage = useMemo(() => {
    return bigImageList[currentChooseImageIndex] || big_people_1
  }, [currentChooseImageIndex])

  return (
    <div className={styles.voteV2Content}>
      <Image src={currentBigImage} alt='' className={styles.bigImage}></Image>
      <div className={styles.leftWord}>
        <div className={styles.leftInfo}>
          Leader election
        </div>
        <div className={styles.leftTitle}>
          Vote
        </div>
      </div>
      <div className={styles.rightWord}>
        <div className={styles.rightArk}>
          Founder of <span>Ark Invest</span>
        </div>
        <div className={styles.rightCathie}>
          Cathie Wood
        </div>
        <div className={styles.rightLine}/>
        <div className={styles.rightBbs}>
          BBS.NYC   Campaign manifesto Campaign manifesto Campaign Campaign manifesto  Campaign manifesto !
        </div>
        <div className={styles.rightVote}>
          Vote
        </div>
      </div>
      <div className={styles.littleImageList}>
        {
          littleImageList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClickItem(index)}
                style={{display: index === currentChooseImageIndex && 'flex' || 'block', width: index === currentChooseImageIndex ? '1.51rem' : '1.19rem' }}
                className={styles.littleImageItem}
              >
                {index !== currentChooseImageIndex ?
                  <Image src={item.src} alt={item.alt} className={styles.itemImage}></Image>
                  : <div className={styles.activeItem}>
                      <Image src={item.src} alt={item.alt} className={styles.activeItemImage}></Image>
                      <div className={styles.itemWordContent}>
                        <div className={styles.itemWordTop}>
                          Cathie Wood
                        </div>
                        <div className={styles.itemWordBottom}>
                          Founder of Ark Invest
                        </div>
                      </div>
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default VoteV2;
