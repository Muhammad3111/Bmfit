import Banner from "./components/banner/Banner";
import Hero1 from "./components/hero-1/Hero";
import Hero2 from "./components/hero-2/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="2xl:container mx-auto">
            <Navbar />
            <Banner />
            <Hero1 />
            <Hero2 />
        </div>
    );
}
