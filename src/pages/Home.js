import React from "react";
import CoursesSection from "../components/CoursesSection";
import Hero from "../components/Hero";
import ReviewSection from "../components/ReviewSection";
import SpecificationSection from "../components/SpecificationSection";
import SubjectSection from "../components/SubjectSection";

function Home() {
  return (
    <div className="bg-bgColor2">
      <div className="bg-bgColor1 rounded-bl-curveRadius rounded-br-curveRadius">
        {/* header section */}
        {/* <section>
          <Header />
        </section> */}

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

      {/* <footer className="pb-8 lg:pb-32">
        <Footer />
      </footer> */}
    </div>
  );
}

export default Home;
