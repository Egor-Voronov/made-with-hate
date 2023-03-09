import logo from "../../assets/fooLogo.png";
import phone from "../../assets/phone.svg";
import mapMarker from "../../assets/map-marker.svg";
import odn from "../../assets/od.png"
import vk from "../../assets/vk.png"

export default function Footer() {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <a href={window.location.href}><img src={logo} alt="логотип" className="footer__logo"/></a>
                <div className="contacts">

                    <div className="footer__city">
                        <img src={mapMarker} alt="город"/>
                        <a href="#">{"Москва, ул. Ленина, д. 25"}</a>
                    </div>

                    <div className="footer__phone">
                        <img src={phone} alt="телефон"/>
                        <a href="#">8-985-344-76-46</a>
                    </div>

                    <div className="footer__phone">
                        <a href="https://ok.ru">
                            <img src={odn} alt="телефон" className='soci'/>
                        </a>
                        <a href="https://vk.com/feed">
                            <img src={vk} alt="телефон" className='soci'/>
                        </a>
                    </div>

                </div>
            </nav>
        </footer>
    );
}
