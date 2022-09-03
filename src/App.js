import './App.css';
import Layout from "./layout/Layout";
import Container from "./components/Container";
import Footer from "./components/Footer";
import {useForm} from "react-hook-form";
import Img from "./images/nathalie-madeira.png";
import Heart from "./images/heart.svg";
import Bag from "./images/bag.svg";
import AirPlane from "./images/airplane.svg";
import Hands from "./images/hands.svg";
import InPoint from "./images/in-point.svg";
import Rocket from "./images/rocket.svg";
import Slide1 from "./images/slide1.jpg";
import Slide2 from "./images/slide2.jpg";
import Mail from "./images/email.svg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function App() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log("Data", data);
  return (
      <>
          <Layout>
              <section className="home">
                  <Container>
                      <div className="flex md:flex-row md:justify-between lg:flex-row psm:flex-col-reverse psm:items-center psm:w-full psm:justify-center xxl:flex-row xxl:justify-between xxl:items-center">
                              <div className="home__left animate__fadeInLeft">
                                  <h1 className="font-bold psm:text-5xl psm:mt-10 xxl:m-0 xxl:text-5xl sm:text-2xl text-dblue">Olá, sou a<br/> Nathalie Madeira,</h1>
                                  <p className="font-normal psm:text-lg psm:w-72 xxl:ml-0 xxl:text-lg sm:text-sm w-96 text-dblue mt-8 mb-6">Estamos à procura de pessoas como tu.
                                      Conhecemo-nos?</p>
                                  <a className="text-white psm:ml-0 xxl:ml-0 font-bold text-sm py-3.5 px-8 bg-yellow rounded-2xl" href="#">Saber mais</a>
                              </div>
                          <div className="home__right">
                              <img loading="lazy" src={Img} className="xxl:h-max xxl:w-max" alt="author"/>
                          </div>
                      </div>
                  </Container>
              </section>
              <section className="benefits">
                  <Container>
                      <AnimationOnScroll animateOnce={true} animateIn="animate__slideInDown">
                          <div className="flex justify-center">
                              <h2 className="psm:w-64 xxl:w-fit psm:text-left xxl:text-5xl psm:text-2xl sm:text-3xl font-bold text-dblue text--underline text-center mt-10 mb-11 after:content-[''] after:w-1/2 after:bg-yellow ">O que você vai encontrar</h2>
                          </div>
                      </AnimationOnScroll>
                      <div className="benefits__cards md:flex md:flex-row md:flex-wrap psm:flex xxl:flex xxl:flex-row xl:justify-evenly xl:items-center sm:flex-wrap md:flex-col md:items-center md:justify-center sm:items-center sm:m-auto sm:justify-center xl:flex-row md:flex-row lg:flex-wrap md:flex-wrap lg:items-center md:items-end lg:justify-evenly md:justify-evenly xl:flex-wrap xl:justify-between xl:content-center
                      psm:flex-wrap psm:flex-col psm:items-center">
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={100}>
                              <div className="benefits__card bg-yellow psm:w-72 psm:h-96 psm:p-3 xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={Heart} alt="blue heart icon" />
                                  <h4 className="text-dblue font-bold xxl:text-2xl sm:text-lg my-5">Sempre Contigo</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg">Porque a tua evolução é importante para nós,
                                      acompanhamos-te desde o primeiro dia, para facilitar o teu processo de integração e adaptação.
                                      O nosso objetivo é assegurar que as
                                      tuas expectativas são cumpridas ao longo de todo o teu percurso na X.
                                  </p>
                              </div>
                          </AnimationOnScroll>
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={500}>
                              <div className="benefits__card xxl:mt-0 bg-turquose psm:w-72 psm:h-96 psm:p-3 psm:mt-10 xl:m-0 sm:mt-10 xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={Bag} alt="bag icon" />
                                  <h4 className="text-dblue font-bold xxl:text-2xl sm:text-lg my-5">Progressão de Carreira</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg">
                                      Tu decides até onde queres chegar. A X põe à tua disposição promoções técnicas verticais e horizontais, um processo de evolução até à gestão de projetos e gestão de equipas, e também te dá oportunidades de mobilidade internacional.
                                  </p>
                              </div>
                          </AnimationOnScroll>
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={600}>
                              <div className="benefits__card lg:mt-10 xxl:mt-0 psm:w-72 psm:h-96 psm:p-3 psm:mt-10 sm:mt-10 md:mt-10 bg-purple xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={Hands} alt="hands icon" />
                                  <h4 className="text-dblue font-bold xxl:text-2xl xxl:text-lg my-5">Trabalho em Equipa</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg">
                                      Em conjunto com uma sólida formação técnica em diferentes categorias, é o que define os nossos consultores. Juntos, convertemo-nos num verdadeiro motor para alcançar o êxito
                                  </p>
                              </div>
                          </AnimationOnScroll>
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={700}>
                              <div className="benefits__card sm:mt-10 psm:w-72 psm:h-96 psm:p-3 bg-purple psm:mt-10 xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={Rocket} alt="rocket icon" />
                                  <h4 className="text-dblue font-bold text-center xxl:text-2xl sm:text-lg my-5">Desenvolve teu próprio Negócio</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg">
                                      Em conjunto com uma sólida formação técnica em diferentes categorias, é o que define os nossos consultores. Juntos, convertemo-nos num verdadeiro motor para alcançar o êxito
                                  </p>
                              </div>
                          </AnimationOnScroll>
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={800}>
                              <div className="benefits__card mt-10 psm:w-72 psm:h-96 psm:p-3 bg-yellow xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={InPoint} />
                                  <h4 className="text-dblue font-bold xxl:text-2xl sm:text-lg my-5">Nossos Clientes</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg mt-8">
                                      Os nossos clientes são empresas de prestígio, nos quais terás a oportunidade de colaborar em projetos de grande valor tecnológico, que te farão crescer diariamente,
                                  </p>
                              </div>
                          </AnimationOnScroll>
                          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown" delay={900}>
                              <div className="benefits__card lg:mt-10 psm:w-72 psm:h-96 psm:p-3 psm:mt-10 md:mt-10 bg-turquose xxl:h-xxl xxl:w-xxl rounded-2xl flex flex-col justify-start items-center p-5">
                                  <img loading="lazy" src={AirPlane} />
                                  <h4 className="text-dblue font-bold xxl:text-2xl sm:text-lg my-5">Imigre com a YellowIpe</h4>
                                  <p className="psm:text-sm text-dblue font-normal xxl:text-lg mt-8">
                                      Os nossos clientes são empresas de prestígio, nos quais terás a oportunidade de colaborar em projetos de grande valor tecnológico, que te farão crescer diariamente,
                                  </p>
                              </div>
                          </AnimationOnScroll>

                      </div>
                  </Container>
              </section>
          </Layout>
          <section className="location flex mt-24">
              <div className="location__content flex flex-col items-center justify-between text-center">
                  <AnimationOnScroll animateOnce={true} animateIn="animate__rollIn">
                      <div className="flex justify-center">
                          <h2 className="xxl:text-5xl psm:text-2xl sm:text-3xl font-bold text--underline text-dblue text-center mb-10">Onde estamos?</h2>
                      </div>
                  </AnimationOnScroll>
                  <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5748942432656!2d-8.610181084345994!3d41.14380521902226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465efeb12365f%3A0x5374306fe02a3ece!2sRegus%20-%20Porto%2C%20Batalha!5e0!3m2!1sen!2sua!4v1661690176018!5m2!1sen!2sua"
                      className="w-screen md:min-w-max h-xxl mb-10" style={{border: "0"}} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </section>
          <Container>
              <section className="mb-52">
                  <AnimationOnScroll animateOnce={true} animateIn="animate__rollIn">
                      <div className="flex justify-center">
                          <h2 className="psm:text-2xl xxl:text-5xl sm:text-3xl font-bold text--underline text-dblue text-center mb-10">
                              Nossos Escritórios
                          </h2>
                      </div>
                  </AnimationOnScroll>
                 <AnimationOnScroll animateOnce={true} animateIn="animate__rollIn" delay={200}>
                     <h3 className="text-2xl psm:text-2xl font-bold text-dblue text-center">
                         Porto - Regus Batalha
                     </h3>
                 </AnimationOnScroll>
                  <div className="flex psm:flex-col psm:items-center xxl:flex-row xl:flex-row lg:flex-col lg:items-center sm:flex-col sm:items-center md:flex-col md:items-center md:justify-center lg:justify-center justify-center mt-14">
                      <img loading="lazy" className="xxl:mr-10 xl:mr-10 xxl:w-96 xxl:h-auto psm:w-64 psm:h-auto lg:mr-0 md:mr-0 sm:mr-0" src={Slide1} alt="first picture" />
                      <img loading="lazy" className="psm:mt-10 xxl:mt-0 xxl:w-96 xxl:h-auto psm:w-64 psm:h-auto xl:mt-0 lg:mt-10 md:mt-10 sm:mt-10" src={Slide2} alt="second picture" />
                  </div>
              </section>
              <section className="contact-us mb-24">
                  <div className="contact-us__content flex flex-col">
                      <AnimationOnScroll animateOnce={true} animateIn="animate__rollIn">
                          <h2 className="psm:text-2xl xxl:text-5xl sm:text-3xl font-bold text-dblue text--underline-l text-left">Gostaria de considerar uma oportunidade
                              profissional conosco </h2>
                      </AnimationOnScroll>
                     <form className="contact-us__form psm:flex-col-reverse psm:flex psm:items-center xxl:flex xxl:flex-row xxl:justify-between xxl:items-center mt-14 psm:w-full xxl:w-superx m-auto" onSubmit={handleSubmit(onSubmit)}>
                         <div className="contact-us__left flex flex-col">
                             <label className="text-black font-bold text-2xl mb-16">Deixe uma mensagem</label>
                             <div className="psm:flex psm:items-start psm:justify-center">
                                 <input placeholder="Seu e-mail" className="text-gray py-3.5 px-4 mb-5 bg-lightgray placeholder:text-gray" {...register("firstName")}/>
                                 <button type="submit" className="bg-yellow rounded-r-lg py-3.5 px-6 text-white">Enviar</button>
                             </div>
                             <textarea placeholder="Escreva sua mensagem" className="text-gray border-0 xxl:px-4 pt-3.5 h-32 resize-none bg-lightgray placeholder:text-gray" {...register("description")}/>
                         </div>
                         <div className="contact-us__right xxl:block psm:hidden">
                             <img loading="lazy" src={Mail} alt="mail icon"/>
                         </div>
                     </form>
                  </div>
              </section>
          </Container>
          <Footer/>
      </>
  );
}

export default App;
