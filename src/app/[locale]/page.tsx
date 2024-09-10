import Banner from "./components/banner/Banner";
import Mobilemenu from "./components/hamburger/Mobilemenu";
import Hero1 from "./components/hero-1/Hero";
import Hero2 from "./components/hero-2/Hero";
import Hero5 from "./components/hero-5/Hero";
import Navbar from "./components/navbar/Navbar";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Home() {
    return (
        <div className="2xl:container mx-auto">
            <Navbar />
            <Mobilemenu />
            <Banner />
            <Hero1 />
            <Hero2 />
            <Hero5 />
        </div>
    );
}
