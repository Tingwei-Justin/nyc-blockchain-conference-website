import { NextPage, GetServerSideProps, GetStaticProps } from "next";
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
import AgendaImage from "@/components/agendaImage";

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
      {/* <HighLight lightSpotRes={lightSpotRes.data} /> */}
      {agendaRes.data.length > 0 && <AgendaV2 agendaRes={agendaRes.data} />}
      <AgendaImage></AgendaImage>
      {/* <VoteV2></VoteV2> */}
      {/* <Whatbbs></Whatbbs> */}
      {/* <Liangdian></Liangdian> */}
      {/* <Agenda></Agenda> */}
      {/* <Ticketing></Ticketing> */}
      {/* <Vote></Vote> */}
      {guestRes.data.length > 0 && <Speaker guestRes={guestRes.data} />}
      <TicketingV2></TicketingV2>
      {advisorRes.data.length > 0 && (
        <ThinkTankPeople advisorRes={advisorRes.data} />
      )}
      {secretaryRes.data.length > 0 && (
        <HonorarySecretary secretaryRes={secretaryRes.data} />
      )}
      <FooterV2 categoryRes={categoryRes.data} />
      {/* <Sponsor></Sponsor> */}
    </div>
  );
};

export async function getStaticProps() {
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
      limit: 20,
    });
    const lightSpotRes = await queryLightSpot({
      page: 1,
      limit: 20,
    });
    const agendaRes = await queryAgenda({
      page: 1,
      limit: 20,
    });
    const categoryRes = await queryCategory({
      page: 1,
      limit: 100,
      category: "",
    });
    const advisorRes = await queryAdvisor({
      page: 1,
      limit: 20,
    });
    const secretaryRes = await querySecretary({
      page: 1,
      limit: 20,
    });
    const guestRes = await queryGuest({
      page: 1,
      limit: 100,
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
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const bannerList = await queryBannerList({
//       limit: 20,
//       page: 1,
//     });
//     const bannerRes = await queryOfficial({
//       type: "1",
//     });
//     const bbsRes = await queryOfficial({
//       type: "2",
//     });
//     const sponsorRes = await querySponsor({
//       page: 1,
//       limit: 20,
//     });
//     const lightSpotRes = await queryLightSpot({
//       page: 1,
//       limit: 20,
//     });
//     const agendaRes = await queryAgenda({
//       page: 1,
//       limit: 20,
//     });
//     const categoryRes = await queryCategory({
//       page: 1,
//       limit: 50,
//       category: "",
//     });
//     const advisorRes = await queryAdvisor({
//       page: 1,
//       limit: 20,
//     });
//     const secretaryRes = await querySecretary({
//       page: 1,
//       limit: 20,
//     });
//     const guestRes = await queryGuest({
//       page: 1,
//       limit: 50,
//       type: 1,
//     });
//     return {
//       props: {
//         res: {
//           bannerList,
//           bannerRes,
//           bbsRes,
//           sponsorRes,
//           lightSpotRes,
//           agendaRes,
//           categoryRes,
//           advisorRes,
//           secretaryRes,
//           guestRes,
//         },
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         error,
//       },
//     };
//   }
// };

export default Home;
