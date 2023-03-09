import partner1 from "../../assets/i (3).webp";
import partner2 from "../../assets/photo.jpg";

export default function Partners() {
  return (
    <>
      <div id="partners"></div>
      <div className="partners__body">
        <h2 className="heading partners__heading">наши партнеры</h2>
        <div className="partners__container">
          <a href="https://www.sportmaster.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=pc_tran_search_rf-centr_brend_sportmaster-obshie&utm_content=ST:search|S:none|AP:no|PT:premium|P:1|DT:desktop|RI:21|RN:Вологда|CI:50644084|GI:4149166832|PI:20144909574|AI:11719975726|KW:спортмастер">
            <img src={partner1} alt="наш партнер" className="partner partner1" />
          </a>
          <a href="https://market.yandex.ru/?clid=1601&utm_source_service=web&utm_source=yandex&utm_medium=search&utm_campaign=ymp_brand_1_syb_search_rus&utm_content=cid:63016537|gid:4604966589|aid:10844011363|ph:32550863456|pt:premium|pn:1|src:none|st:search&utm_term=яндекс%20маркет&adjust_t=fs3pybh&adjust_ya_click_id=1087659110665868530&referrer=reattribution%3D1&cpa-perf=1&baobab_event_id=lf0dirb054&wprid=1678321890010144-18012910340615679311-vla1-0246-vla-l7-balancer-8080-BAL-3008&src_pof=1601&icookie=HQStUZ%2F5Dd8BUEekL47nOn%2FbXp0ZGJdJXXPFH1Gl%2F%2BbPF%2BpT1aHoIkK5LyC8GEK7Y00OglEmwbgBmh05Ei5MJcY8YqQ%3D">
            <img src={partner2} alt="наш партнер" className="partner partner2" />
          </a>
        </div>
    </div>
    </>
  );
}
