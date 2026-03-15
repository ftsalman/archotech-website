import React from "react";
import { Hero } from "../components/hero/Hero";
import { Brands } from "../components/brand/Brands";
import { OurServices } from "../components/our-services/OurServices";
import { ScrollCards } from "../components/scoll-card/ScrollCards";
import { OurProjects } from "../components/projects/OurProjects";
import { RuleSection } from "../components/rule/RuleSection";
import { FAQSection } from "../components/faq/FAQSection";
import { TeamSection } from "../components/teams/TeamSection";
import { CommitmentSection } from "../components/commitment/CommitmentSection";
import { BlogSection } from "../components/blog/BlogSection";
import { TalkSection } from "../components/talk/TalkSection";
import { FoundersSection } from "../components/FoundersSection/FoundersSection";

export const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden panel-scrollbar ">
        {/* Hero Section */}
        <Hero />

        {/* Brands Carosel */}

        <Brands />

        {/* service */}
        <OurServices />

        {/* Scrolling card */}

        <ScrollCards />

        {/* Projects */}
        <OurProjects />

        <FoundersSection/>

        {/*Sticky Gallery Section  */}

     
          <RuleSection />

        

        
        

        {/* FAQ SECTION */}

        <FAQSection />

        {/* teams  section   */}

        <TeamSection />

        {/* commitment  section  */}

        <CommitmentSection />

        {/* blog section */}

        <BlogSection />

        {/* Talk section */}
        <TalkSection />
      </div>
    </>
  );
};
