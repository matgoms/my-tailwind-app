import Menu from "../components/Menu";
import { HeroBig } from "../components/Hero";
import ImageFull from "../components/ImageFull";
import Feature from "../components/Feature";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div class="bg-white dark:bg-slate-800">
            <Menu />
            <HeroBig/>
            <ImageFull />
            <Feature />
            <Portfolio />
            <Footer />
        </div>
    )

}
