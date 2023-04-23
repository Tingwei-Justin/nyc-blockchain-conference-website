import { NextPage, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import Banner from "../components/banner";
import Bbs from "../components/bbs";
import HighLight from "../components/highLight";
import AgendaV2 from "../components/agendaV2";
import TicketingV2 from "../components/ticketingV2";
import VoteV2 from "../components/voteV2";
// import Liangdian from "../components/liangdian";
// import Agenda from "../components/agenda";
// import Ticketing from "../components/ticketing";
// import Vote from '../components/vote'
import Speaker from "@/components/speaker";
import ThinkTankPeople from "@/components/thinkTankPeople";
import HonorarySecretary from "@/components/honorarySecretary";
import SponsorTypes from "@/components/sponsorTypes";
import { FooterV2 } from "@/components/footerV2/index";
// import Sponsor from "../components/sponsor";
// import Whatbbs from "../components/whatisbbsnyc";
import {
  querySponsor,
  queryOfficial,
  queryBannerList,
  queryLightSpot,
  queryAgenda,
  queryCategory,
  queryAdvisor,
  querySecretary,
  queryGuest,
} from "../utils/servers";

const Home: NextPage = (props: any) => {
  const {
    res: {
      bannerList,
      bannerRes,
      bbsRes,
      lightSpotRes,
      agendaRes,
      advisorRes,
      secretaryRes,
      guestRes,
      categoryRes,
    },
  } = props;
  return (
    <div className={styles.container}>
      <Banner bannerList={bannerList.data} bannerRes={bannerRes} />
      <Bbs bbsRes={bbsRes.detail} />
      <HighLight lightSpotRes={lightSpotRes.data} />
      <AgendaV2 agendaRes={agendaRes.data} />
      <TicketingV2></TicketingV2>
      {/* <VoteV2></VoteV2> */}
      {/* <Whatbbs></Whatbbs> */}
      {/* <Liangdian></Liangdian> */}
      {/* <Agenda></Agenda> */}
      {/* <Ticketing></Ticketing> */}
      {/* <Vote></Vote> */}
      <Speaker guestRes={guestRes.data} />
      <ThinkTankPeople advisorRes={advisorRes.data} />
      <HonorarySecretary secretaryRes={secretaryRes.data} />
      <SponsorTypes></SponsorTypes>
      <FooterV2 categoryRes={categoryRes.data} />
      {/* <Sponsor></Sponsor> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const bannerList = await queryBannerList({
      limit: 20,
      page: 1,
    });
    const bannerRes = await queryOfficial({
      type: "1",
    });
    const bbsRes = await queryOfficial({
      type: "2",
    });
    const sponsorRes = await querySponsor({
      page: 1,
      limit: 10,
    });
    const lightSpotRes = await queryLightSpot({
      page: 1,
      limit: 10,
    });
    const agendaRes = await queryAgenda({
      page: 1,
      limit: 10,
    });
    const categoryRes = await queryCategory({
      page: 1,
      limit: 10,
      category: "",
    });
    const advisorRes = await queryAdvisor({
      page: 1,
      limit: 10,
    });
    const secretaryRes = await querySecretary({
      page: 1,
      limit: 10,
    });
    const guestRes = await queryGuest({
      page: 1,
      limit: 50,
      type: 1,
    });
    return {
      props: {
        res: {
          bannerList,
          bannerRes,
          bbsRes,
          sponsorRes,
          lightSpotRes,
          agendaRes,
          categoryRes,
          advisorRes,
          secretaryRes,
          guestRes,
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
