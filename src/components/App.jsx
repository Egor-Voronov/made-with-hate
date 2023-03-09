import Header from "./header/Header";
import Banner1 from "./banner/Banner1.jsx";
import Banner2 from "./banner/Banner2.jsx";
import Banner3 from "./banner/Banner3.jsx";
import Advanatages3 from "./advantages/Advantages3";
import Advanatages2 from "./advantages/Advantages2";
import Advanatages1 from "./advantages/Advantages1";
import Partners from "./partners/Partners";
import Reviews from "./reviews/Reviews";
import Map from "./map/Geo";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Banner2/>
            <Advanatages2/>
            <Banner1/>
            <Advanatages1/>
            <Banner3/>
            <Advanatages3/>

            <Partners/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default App;
