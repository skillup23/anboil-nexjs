import style from "../styles/WhyChechUs.module.scss";
import Heading from "../components/Heading";
import Image from "next/image";

const cards = [
  { id: 1, path: '/feature/feature-1.jpg', title: 'Полнота предоставляемых услуг', subtitle: 'Ангелинская нефтебаза оказывает полный спектр услуг - закупку, перевалку и доставку конечному клиенту всех видов нефтепродуктов.'},
  { id: 2, path: '/feature/feature-2.jpg', title: 'Гарантия качества', subtitle: 'Сертификаты соответствия, паспорта качества заводов-производителей и наша собственная лаборатория – гарантия тщательного контроля и точного замера отпускаемого топлива.'},
  { id: 3, path: '/feature/feature-3.jpg', title: 'Оперативность перевозок', subtitle: 'Собственный парк бензовозов и своя ж/д ветка позволяют осуществить перевалку топлива в самые кратчайшие сроки. Возможность отследить местонахождение вашего груза по высокоточному GPS-навигатору в личном кабинете.'},
  { id: 4, path: '/feature/feature-4.jpg', title: 'Безопасность хранения', subtitle: 'Соблюдение всех пожарных и экологических стандартов, бесперебойная и круглосуточная работа – гарант абсолютной безопасности. Выделенные трубопроводы исключают риски смешения топлива. Существует возможность мультиналива.'},
]

function WhyChechUs() {
  return (
      <section className={`content-section ${style.section}`}>
        <div className="container">
          <div className={style.content}>
            <Heading text="Почему выбирают нас?" tag="h3" />
            <div className={style.cards}>
              {cards.map(({ id, path, title, subtitle }) => (
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
