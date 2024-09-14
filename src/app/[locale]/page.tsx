import Banner from "./components/banner/Banner";
import Mobilemenu from "./components/hamburger/Mobilemenu";
import Hero1 from "./components/hero-1/Hero";
import Hero2 from "./components/hero-2/Hero";
import Hero3 from "./components/hero-3/Hero";
import Hero4 from "./components/hero-4/Hero";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Home() {
  return (
    <div className="2xl:container mx-auto">
      <Mobilemenu />
      <Banner />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  );
}
