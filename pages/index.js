import style from "../styles/Main.module.scss"
import SlideMainTop from "../components/SlideMainTop";
import WhyChechUs from "../components/WhyChechUs";
import ServisesComponent from "../components/ServisesComponent";
import ProductsMain from "../components/ProductsMain";
import SliderOursClients from "../components/SliderOursClients";

function Main() {
  return (
    <div className="page">
      <SlideMainTop />
      <WhyChechUs />
      <section className={style.section_about}>
        <div className={`${style.content_about} container`}>
          <article className={style.node_about}>
            <h2 className={`${style.title_about} font__extra`}><u className={style.title_about_red}>Ангелинская нефтебаза</u> —&nbsp; перевалка,&nbsp;хранение&nbsp;и&nbsp;оптовая продажа ГСМ</h2>
            <ul className={style.text_about_container}>
              <li className={style.text_about}>
                <p className={`${style.text_p} font__light`}>Ангелинская нефтебаза – надежный поставщик нефтепродуктов высшего качества. Собственная лаборатория позволяет контролировать качество продукта на всех этапах: при приемке, хранении и отпуске. В нашем распоряжении резервуарный парк вместимостью до 6 000 тонн топлива. На текущий момент ведется строительство второго блока с увеличенной площадью.</p>
                <p className="font__light">Собственная ж/д ветка и обширный автопарк спецтехники позволяют нам гарантировать максимально короткое время от момента заявки до получения заказа.</p>
              </li>
              <li className={style.text_about}>
                <p className={`${style.text_p} font__light`}>Наша компания предлагает своим клиентам только прозрачные и понятные схемы сотрудничества, ведь мы ценим долгосрочное партнерство. На сайте всегда размещены актуальные прайсы на топливо. Для вычисления стоимости доставки выберите интересующий вас город, и компьютер мгновенно выполнит расчет цены на услугу.</p>
                <p className="font__light">Чтобы оформить заказ или получить консультацию – позвоните по номеру +7(800)77-77-340, отправьте запрос по электронной почте anboil@anboil.ru или по форме обратной связи ниже.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <ServisesComponent />
      <ProductsMain />
      <SliderOursClients />
    </div>
  );
}

export default Main;
