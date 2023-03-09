import good from "../../assets/crss.png"

export default function Banner3() {
  return (
    <div id='t3' className="backgroundImage backgroundImage__banner">
      <div className="banner__container">
        <h1 className="banner__heading banner__item">Кроссовки <br/> Time-Jump</h1>
        <h2 className="banner__description banner__item">
          Иделальный выбор для бега и занятий спортом. <br />
          Присутствуют все размеры на мужчин и женщин.
          <br /> <br/>
          Точные характеристики товара можно узнать в магазине или по телефону.
        </h2>
      </div>
        <img src={good} className="good" alt="good"/>
    </div>
  );
}
