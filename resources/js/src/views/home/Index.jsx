import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Sections from "./Sections";

export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Sections />
            <Footer />
        </div>
    );
}
