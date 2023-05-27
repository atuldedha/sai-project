import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ReviewSection from "./components/ReviewSection";
import SpecificationSection from "./components/SpecificationSection";
import SubjectSection from "./components/SubjectSection";

function App() {
  return (
    <div className="bg-background1 bg-opacity-75">
      {/* header section */}
      <section>
        <Header />
      </section>

      {/* hero section */}
      <section className="mb-10">
        <Hero />
      </section>

      {/* hero section */}
      <section className="mb-10">
        <SubjectSection subjectTitle="Science" />
      </section>

      {/* review section */}
      <section className="mb-10">
        <ReviewSection />
      </section>

      {/* courses section */}
      <section className="mb-10">
        <CoursesSection />
      </section>

      {/* why choose us section */}
      <section className="mb-20">
        <SpecificationSection />
      </section>

      <footer className="pb-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
