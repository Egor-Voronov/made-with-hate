import good from "../../assets/drink.png"

export default function Banner3() {
  return (
    <div id='t2' className="backgroundImage backgroundImage__banner">
      <div className="banner__container">
        <h1 className="banner__heading banner__item">Штанга <br/> "Атлетика"</h1>
        <h2 className="banner__description banner__item">
          Мощная штанга. есть блины на 5, 10, 20 и 30 кг. <br />
          <br /> <br/>
          Точные характеристики товара можно узнать в магазине или по телефону.
        </h2>
      </div>
        <img src={good} className="good" alt="good"/>
    </div>
  );
}
