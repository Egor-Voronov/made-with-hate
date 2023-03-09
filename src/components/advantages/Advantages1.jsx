import img1 from "../../assets/advantageImg1.svg";
import img2 from "../../assets/like.svg";
import img3 from "../../assets/cycle.svg";
import img4 from "../../assets/truck.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages() {
  return (
    <div className="advantages__body">
        <h2 className="heading advantages__heading">Преимущества штанги</h2>
      <div className="advantages__container">
        <Advantage
          img={img1}
          heading="Развивает силу и мощность"
          description="С помощью штанги вы можете увеличить свою силу и мощность, тренируя различные группы мышц"
        />

        <Advantage
          img={img2}
          heading="Улучшение общего здоровья"
          description={
              "Силовые тренировки с нашей штангой улучшают кардиоваскулярную систему, снижают уровень холестерина, повышают выносливость и энергию."
          }
        />

        <Advantage
          img={img3}
          heading="Можно использовать в зале"
          description="Штанга не портится от многоразового использования, не требует дополнительного ухода"
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
