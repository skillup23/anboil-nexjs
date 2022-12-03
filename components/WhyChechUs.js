import style from "../styles/WhyChechUs.module.scss";
import Heading from "../components/Heading";
import Image from "next/image";
import {cardsChechUs} from '../public/data/dataMain'


function WhyChechUs() {
  return (
      <section className={`content-section ${style.section}`}>
        <div className="container">
          <div className={style.content}>
            <Heading text="Почему выбирают нас?" tag="h3" />
            <div className={style.cards}>
              {cardsChechUs.map(({ id, path, title, subtitle }) => (
                <div key={id} className={style.card}>
                  <Image className={style.img_card} alt="фото" layout="intrinsic" width={305.5} height={218.5} src={path} quality="100"/>
                  <div className={style.info}>
                    <h5 className={`${style.title} font__extra`}>{title}</h5>
                    <p className={`${style.subtitle} font__light`}>{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default WhyChechUs;
