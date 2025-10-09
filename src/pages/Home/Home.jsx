import Header from "../../shared/Header";
import Intro from "./components/Intro";
import ExperienceItems2 from "./components/ExperiencesItems2";
import ExperienceItems1 from "./components/ExperienceItems1";
import Build from "../../shared/Build";
import Links from "../../shared/Links";
import Footer from "../../shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <ExperienceItems1 />
      <ExperienceItems2 />
      <Build />
      <Links />
      <Footer />
    </>
  );
}
