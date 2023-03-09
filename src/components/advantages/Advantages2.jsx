import img1 from "../../assets/2802966240624.svg";
import img2 from "../../assets/rub.svg";
import img3 from "../../assets/like.svg";
import img4 from "../../assets/truck.svg";

import Advantage from "./advantage/Advantage";

export default function Advanatages() {
  return (
    <div className="advantages__body">
      <h2 className="heading advantages__heading">Преимущества футбольного мяча</h2>
      <div className="advantages__container">
        <Advantage
          img={img1}
          heading="Собственное производство"
          description="Мы изготавливаем все элементы мяча на собственном производстве в Москве, уделяя особое внимание качеству"
        />

        <Advantage
          img={img2}
          heading="Низкая стоимость"
          description={
            "Несмотря на свою низкую стоимость, этот мяч не уступают в качестве и долговечности другим более дорогим моделям"
          }
        />

        <Advantage
          img={img3}
          heading="Большая популярность у спортсменов"
          description="Многие спортивные клубы и школы закупают наши мячи"
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
