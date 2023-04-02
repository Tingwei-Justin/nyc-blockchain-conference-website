import { NextPage, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import Banner from "../components/banner";
import Bbs from "../components/bbs";
import HighLight from "../components/highLight";
import AgendaV2 from "../components/agendaV2";
import TicketingV2 from "../components/ticketingV2";
import VoteV2 from '../components/voteV2'
// import Liangdian from "../components/liangdian";
// import Agenda from "../components/agenda";
// import Ticketing from "../components/ticketing";
// import Vote from '../components/vote'
import Speaker from "@/components/speaker";
import ThinkTankPeople from "@/components/thinkTankPeople";
import HonorarySecretary from "@/components/HonorarySecretary";
import SponsorTypes from '@/components/sponsorTypes'
// import Sponsor from "../components/sponsor";
// import Whatbbs from "../components/whatisbbsnyc";
import { querySponsor } from "../utils/servers";

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Bbs></Bbs>
      <HighLight></HighLight>
      <AgendaV2></AgendaV2>
      <TicketingV2></TicketingV2>
      <VoteV2></VoteV2>
      {/* <Whatbbs></Whatbbs> */}
      {/* <Liangdian></Liangdian> */}
      {/* <Agenda></Agenda> */}
      {/* <Ticketing></Ticketing> */}
      {/* <Vote></Vote> */}
      <Speaker></Speaker>
      <ThinkTankPeople></ThinkTankPeople>
      <HonorarySecretary></HonorarySecretary>
      <SponsorTypes></SponsorTypes>
      {/* <Sponsor></Sponsor> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const sponsorRes = await querySponsor({
      page: 1,
      limit: 10,
    });
    return {
      props: {
        res: {
          sponsorRes,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default Home;
