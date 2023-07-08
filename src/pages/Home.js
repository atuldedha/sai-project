import React, { useContext, useEffect } from "react";
import CoursesSection from "../components/CoursesSection";
import Hero from "../components/Hero";
import ReviewSection from "../components/ReviewSection";
import SpecificationSection from "../components/SpecificationSection";
import SubjectSection from "../components/SubjectSection";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { getURLs } from "../urlConfig";
import { AppDataContext } from "../context/appData";

function Home() {
  const { initializeAppData } = useContext(AppDataContext);

  useEffect(() => {
    axios
      .get(getURLs("appInfo"))
      .then((res) => {
        // console.log(res?.data?.applicationData);
        initializeAppData(res?.data?.applicationData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* seo */}
      <Helmet>
        <title>Brainjee</title>
        <meta
          name="description"
          content="An innovative online learning
            platform offering wide range of courses. Designed to make learning impactful."
        />
        <link rel="icon" href="/logo512.png" />
        <link rel="canonical" href="https://www.vaisage.com/" />
        {/* Twitter meta tags below */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:title"
          content="Brainjee - An innovative online learning
          platform offering wide range of courses."
        />
        <meta
          name="twitter:description"
          content="An innovative online learning
          platform offering wide range of courses. Designed to make learning impactful."
        />

        {/* Facebook meta tags below */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaisage.com/" />
        <meta
          property="og:title"
          content="Brainjee - An innovative online learning
          platform offering wide range of courses."
        />
        <meta
          property="og:description"
          content="An innovative online learning
          platform offering wide range of courses. Designed to make learning impactful."
        />
        <meta property="og:image" content="" />
      </Helmet>

      <div className="bg-bgColor2">
        <div className="bg-bgColor1 rounded-bl-curveRadius rounded-br-curveRadius">
          {/* hero section */}
          <section className="mb-8 lg:mb-32">
            <Hero />
          </section>

          {/* hero section */}
          <section className="mb-32">
            <SubjectSection subjectTitle="Science" />
          </section>

          {/* review section */}
          <section className="mb-8 lg:mb-32">
            <ReviewSection />
          </section>

          {/* courses section */}
          <section className="lg:mb-20 pb-20 mb-4">
            <CoursesSection />
          </section>
        </div>
        {/* why choose us section */}
        <section className="pb-8 lg:pb-32">
          <SpecificationSection />
        </section>
      </div>
    </>
  );
}

export default Home;
