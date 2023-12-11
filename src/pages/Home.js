import Menu from "../components/Menu";
import { HeroBig } from "../components/Hero";
import Image2x from "../components/Image2x";
import Feature from "../components/Feature";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div class="bg-white dark:bg-slate-800">
            <Menu />
            <HeroBig/>
            <Image2x />
            <Feature />
            <Portfolio />
            <Footer />
        </div>
    )

}
