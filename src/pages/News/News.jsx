import Header from "../../shared/Header";
import World_News from "./components/World_News";
import ListNews from "./components/ListNews";
import Info from "./components/Info";
import Build from "../../shared/Build";
import Links from "../../shared/Links";
import Footer from "../../shared/Footer";
export default function News() {
  return (
    <>
      <Header />
      <World_News />
      <ListNews />
      <Info />
      <Build />
      <Links />
      <Footer />
    </>
  );
}
