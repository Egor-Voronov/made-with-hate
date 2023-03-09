import img1 from "../../assets/advantageImg1.svg";
import img2 from "../../assets/piggy.svg";
import img3 from "../../assets/cycle.svg";
import img4 from "../../assets/truck.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages() {
  return (
    <div className="advantages__body">
        <h2 className="heading advantages__heading">Преимущества кроссовок</h2>
      <div className="advantages__container">
        <Advantage
          img={img1}
          heading="Высокая прочность
                 и надёжность"
          description="Эти кроссовки имеют прочную подошву, которая обеспечивает отличное сцепление с поверхностью и устойчивость при любых условиях"
        />

        <Advantage
          img={img2}
          heading="Низкая стоимость"
          description={
            "Несмотря на свою низкую стоимость, эти кроссовки не уступают в качестве и функциональности другим более дорогим моделям."
          }
        />

        <Advantage
          img={img3}
          heading="Невероятная долговечность"
          description="Система соединения позволяет перестроить 
                конструкцию – уменьшить, увеличить размеры"
        />

        <Advantage
          img={img4}
          heading="Доставка по всей России"
          description="Мы осуществляем доставку нашей продукции по всей России."
        />
      </div>
    </div>
  );
}
