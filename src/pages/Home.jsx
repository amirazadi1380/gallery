import Header from "../components/Header";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
import SliderOne from "../components/SliderOne";
import Description from "../components/Description";
import Contact from "../components/Contact";

export default function Home() {
    

    return (
        <div>
            <Navbar/>
            <Header/>
            <SliderOne/>
            <Description/>
            <Information/>
            <Contact/>
            
        </div>
    )
}
