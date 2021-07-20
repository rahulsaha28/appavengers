import "./Assets/css/Common/Common.css";
import { FirstServiceContent } from "./components/FirstServiceContent/FirstServiceContent";
import { MainSection } from "./components/MainSection/MainSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { SolutionSection } from "./components/SolutionSection/SolutionSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import leftImg from "./Assets/image/img-2.png";
import { SecondServiceContent } from "./components/SecondServiceContent/SecondServiceContent";
import { FirstCustomeSection } from "./components/FirstCustomeSection/FirstCustomeSection";
import OurFeatureData from './Data/OurfeatureData.json';
import TeamMemberData from './Data/TeamMemberData.json';
import RecentProjectsData from './Data/RecentProjectsData.json';
import PricingData from './Data/PricingData.json';
import TestimonialData from './Data/TestimonialData.json';
import services from "./Data/ServicesData.json";
import BlogsData from './Data/BlogsData.json';
import { Custom1 } from "./components/CustomCard/Custom1";
import { Custome2 } from "./components/CustomCard/Custome2";
import { Custom3 } from "./components/CustomCard/Custom3";
import Styles from "./App.module.css";
import { Custom4 } from "./components/CustomCard/Custom4";
import { Custom5 } from "./components/CustomCard/Custom5";
import { Custom6 } from "./components/CustomCard/Custom6";
import { FooterPreviousSection } from "./components/FooterPreviousSection/FooterPreviousSection";
import { FooterSection } from "./components/FooterSection/FooterSection";



function App() {
  return (
    <div className="container-fluid">
      {/* this is the top nav section */}
      <div className="bg-color-main clip-bottom-round">
        <div className="row">
          <TopNavBar />
        </div>
        {/* this is the main section */}
        <div className="row">
          <MainSection />
        </div>
      </div>
      <div className="row">
        <SolutionSection />
      </div>
      {/* this is the services section */}
      <div className="row">
        <ServicesSection>
          <FirstServiceContent leftImg={leftImg} />
          <SecondServiceContent service={services[0]} />
        </ServicesSection>
      </div>
      <div className="row">
        <ServicesSection>
        <SecondServiceContent service={services[1]} />
        <FirstServiceContent leftImg={leftImg} />
        </ServicesSection>
      </div>
      {/* our feature section */}
      <div className="row bg-1 mt-3 p-3">
        <FirstCustomeSection featureData={OurFeatureData}>
          <Custom1/>
        </FirstCustomeSection>
      </div>
      {/* This is the team member */}
      <div className="row mt-3 p-3">
        <FirstCustomeSection featureData={TeamMemberData}>
          <Custome2/>
        </FirstCustomeSection>
      </div>
      {/* feature project*/}
      <div className={`row mt-3 p-5 ${Styles.bg_image}`}>
        <FirstCustomeSection color="white" featureData={RecentProjectsData}>
          <Custom3/>
        </FirstCustomeSection>
      </div>
      {/* pricing section */}
      <div className="row mt-3 p-3">
        <FirstCustomeSection featureData={PricingData}>
          <Custom4/>
        </FirstCustomeSection>
      </div>
      {/* testimonial */}
      <div className={`row mt-3 p-3 ${Styles.bg_color} `}>
        <FirstCustomeSection featureData={TestimonialData}>
          <Custom5/>
        </FirstCustomeSection>
      </div>
      {/* blog */}
      <div className={`row mt-3 p-3 ${Styles.bg_color_2} `}>
        <FirstCustomeSection featureData={BlogsData}>
          <Custom6/>
        </FirstCustomeSection>
      </div>
      {/* footer previous */}
      <div className="row p-3">
        <FooterPreviousSection/>
      </div>
      {/* footer section */}
      <div className={`row mt-3 p-4 ${Styles.bg_color_2} `}>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
