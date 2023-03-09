import good from "../../assets/socc.png"

export default function Banner2() {
  return (
    <div id='t1' className="backgroundImage backgroundImage__banner">
      <div className="banner__container">
        <h1 className="banner__heading banner__item">Футбольный мяч "Олимпийский"</h1>
        <h2 className="banner__description banner__item">
          Иделальный выбор для индивидуальных или командных занятий<br />
          <br /> <br/>
          Точные характеристики товара можно узнать в магазине или по телефону.
        </h2>
      </div>
        <img src={good} className="good" alt="good"/>
    </div>
  );
}
