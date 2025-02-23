import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/Group 1.png";
import car from "../images/car-img.svg";
import bateau from "../images/bateau.svg";
import business from "../images/business.svg";
import cv_form from "../images/cv-form.svg";
import delivery_small from "../images/delivery-track-small.svg";
import delivery_big from "../images/delivery-truck-big.svg";
import drill from "../images/drill.svg";
import factory from "../images/factory.svg";
import house_blue from "../images/house-blue.svg";
import house_yellow from "../images/house-yellow.svg";
import hurricane from "../images/hurricane.svg";
import insurance from "../images/insurance.svg";
import rain from "../images/rain.svg";
import search from "../images/search.svg";
import team_work from "../images/team-work.svg";
import travel from "../images/travel.svg";
import about_1 from "../images/about-1.png";
import about_2 from "../images/about-2.png";
import about_3 from "../images/about-3.png";
import plus from "../images/plus.svg";
import procent from "../images/procent.svg";
import clock from "../images/clock.svg";
import shield from "../images/shield.svg";
import like from "../images/like.svg";
import star from "../images/star.svg";
import ellipse from "../images/Ellipse 5.svg";
import ellipse2 from "../images/Ellipse 8.svg";
// import ellipse3 from "../images/Ellipse 10.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../images/clients/logo1.svg";
import logo2 from "../images/clients/logo2.svg";
import logo3 from "../images/clients/logo3.svg";
import logo4 from "../images/clients/logo4.svg";
import logo5 from "../images/clients/logo5.svg";
import logo6 from "../images/clients/logo6.svg";
import logo7 from "../images/clients/logo7.svg";
import logo8 from "../images/clients/logo8.svg";
import logo9 from "../images/clients/logo9.svg";
import logo10 from "../images/clients/logo10.svg";
import logo11 from "../images/clients/logo11.svg";
import logo12 from "../images/clients/logo12.svg";
import logo13 from "../images/clients/logo13.svg";
import logo14 from "../images/clients/logo14.svg";
import logo15 from "../images/clients/logo15.svg";
import logo16 from "../images/clients/logo16.svg";
import { SebedimContext } from "../context/Context";
import ContinuousVerticalSlider from "./ContinuousVerticalSlider";

const Home = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
  ];

  const settings = {
    autoplay: true,
    dots: false,
    infinite: false, // Crucial: Remove infinite
    slidesToShow: 2.5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    nextArrow: null,
    prevArrow: null,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    speed: 650,
  };
  const settings2 = {
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    nextArrow: null,
    prevArrow: null,
    rtl: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    speed: 750,
  };

  return (
    <>
      {/* Home */}
      <div
        id="home"
        className="sm:pb-10 md:pb-[125px] w-full mx-auto sm:mb-10 md:mb-[125px] bg-opacity-25 bg-gradient-20-80"
      >
        <section className="w-[90%] mb-[70px] -z-10 mx-auto sm:pt-[120px] lg:pt-[170px]">
          <div className="w-full z-20 flex sm:flex-col lg:flex-row items-center justify-center gap-[80px] ">
            <div className="sm:w-full lg:text-left sm:text-center lg:w-[40%]">
              <p className="text-[#34C2AA] tracking-[5px] text-[12px] font-[sans-regular] mb-4">
                ÄTIÝAÇLANDYRYŞ
              </p>
              <p className="sm:text-[34px] md:text-[66px] font-[sans-regular] sm:mb-0 lg:mb-[66px]">
                Ajaýyp geljegiňiz üçin hakyky{" "}
                <span className="text-[#34C2AA] font-[sans-medium] ">
                  ätiýaçlandyryş
                </span>
              </p>

              <div className="pl-10 lg:block sm:hidden border-l border-black w-[80%]">
                <p className="mb-6 text-[16px] font-[sans-regular] ">
                  {dil === "tk"
                    ? "Siziň we maşgalaňyz üçin iň ygtybarly ätiýaçlandyryş hyzmatlary! Biz bilen habarlaşyň – gelejekde garaşylmadyk ýagdaýlara taýýarlykly boluň!"
                    : dil === "ru"
                    ? "Самые надежные страховые решения для вас и вашей семьи! Свяжитесь с нами – будьте готовы к любым неожиданностям!"
                    : "The most reliable insurance solutions for you and your family! Contact us today – be prepared for any unexpected events!"}
                </p>
                <div className="bg-[#34C2AA] font-[sans-semibold] w-fit rounded-[29px] px-[22px] py-[10px] text-white text-[14px] ">
                  {dil === "tk"
                    ? "Habarlaşmak üçin"
                    : dil === "ru"
                    ? "Обращайтесь к нам"
                    : "Contact us"}
                </div>
              </div>
            </div>

            <div className="sm:w-full sm:mt-[-100px] lg:mt-0 md:w-[60%]">
              <img src={surat} className="w-full object-cover" alt="surat" />
            </div>

            <div className="sm:pl-0 lg:pl-10 sm:w-full flex flex-col items-center justify-center sm:block lg:hidden sm:border-none lg:text-left sm:text-center lg:border-l border-black lg:w-[80%]">
              <p className="mb-6 text-[16px] font-[sans-regular] ">
                Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut
                mauris sociis tortor vel dignissim. Ullamcorper auctor non arcu
                proin urna.
              </p>
              <div className="flex items-center justify-center w-full ">
                <div className="bg-[#34C2AA] flex items-center justify-center font-[sans-semibold] rounded-[29px] px-[22px] py-[10px] text-white text-[14px] ">
                  Habarlaşmak üçin
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services */}
      <section
        id="services"
        className="-z-20 relative w-full sm:mb-[150px] md:mb-[200px] "
      >
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-[70%] object-cover top-[2%] right-0 "
        />
        <img
          src={ellipse2}
          alt="ellipse"
          className="absolute object-cover bottom-0 w-[70%] left-0 "
        />
        <div className="w-[90%] mx-auto">
          <div className="w-full flex items-center justify-center flex-col sm:mb-[60px] md:mb-[83px] ">
            <p className="sm:text-[10px] sm:mb-5 md:mb-0 md:text-[12px] sm:tracking-[2px] md:tracking-[5px] font-[sans-regular] text-center">
              HYZMATLARYMYZ
            </p>
            <p className="sm:text-[24px] md:text-[46px] font-[sans-medium] text-center w-[60%]">
              Ýokary hilli we giň gerimli hyzmatlarymyz bilen tanyş boluň
            </p>
          </div>

          <div className="w-full grid grid-cols-auto-fill-250 sm:gap-6 md:gap-[50px]">
            <div className="bg-[#F8F8F8] flex flex-col items-center justify-between w-full rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold]">
                  Awtoulag serişdeleriniň we awtodaşaýjylaryň raýat hukuk
                  jogapkärçiliginiň meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] font-[sans-regular] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 ">
                  Ýeňil ýa-da ýük awtoulaglary, tirkeg we ýarym tirkegler,
                  awtobuslar, mikroawtobuslar, motosikller, oba hojalyk we
                  gurluşyk maşynlar, özi hereket edýän mehanizmler we başgalar.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={car}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Buraw işlerini meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Guýylaryň we buraw işleriniň ätiýaçlandyryşy gazylyp alynýan
                  peýdaly baýlyklaryň çykarylyşyny we gaýtadan işlemegini, şeýle
                  hem olar bilen bagly beýleki işlerini alyp barýan
                  kompaniýalaryň emläk we maliýe ýitgilerini goramak üçin
                  niýetlenendir.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={drill}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Kärhanalaryň emlägini meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Her bir edara özüne degişli bolan emläginiň zeper
                  ýetirilmegine ýa-da ýitirilmegine getirip biljek
                  töwekgelçiliklere duş gelip bilýär. Tebigy betbagtçylyklar,
                  ýangyn, üçünji taraplaryň kanuna garşy hereketleri ýaly
                  töwekgelçilikler, uly möçberli zyýanlara ýetirip biler.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={factory}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Suw ulag serişdelerini meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Suw ulagyň ätiýaçlandyryşy gämileriň we beýleki suw
                  serişdeleriniň eýeleriniň ýa-da peýdalanyjylarynyň
                  bähbitlerini, suw ulagyň işledilişi ýa-da ulanyşy bilen bagly
                  bolup biljek töwekgelçiliklerini ýa-da ýitgilerini öňüni almak
                  üçin niýetlenendir.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={bateau}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Üçünji taraplaryň öňündäki raýat-hukuk jogapkärçiligini
                  meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Üçünji şahslaryň öňündäki raýat-hukuk jogapkärçiligi –
                  ätiýaçlandyryş şertnamasynda görkezilen telekeçilik işleri
                  amala aşyrylanda bolup geçen ätiýaçlandyryş halatynyň
                  netijesinde ömre, saglyga we (ýa-da) emläge ýetirilen zyýan
                  üçin fiziki we ýuridik şahslaryň öňündäki jogapkärçilik.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={business}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Hünärmençilik jogapkärçiligini meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Her bir hat-da ýokary tejribeli hünärmeniň işinde ýalňyşlyk
                  goýbermeklik töwekgelçiligi bar we üçünji taraplaryň
                  saglygyna, ömrüne ýa-da emlägine ýetirilen zyýan üçin
                  jogapkärçiligini hünärmeniň işleýän edarasy çekýär.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={search}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Ýükleri meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Ýükleri ätiýaçlandyryş – bu ýük daşama amala aşyrylanda dürli
                  görnüşli wakalaryň netijesinde ýitgiler ýüze çykan ýagdaýynda
                  ýüküň eýeleriniň emläk bähbitlerini goramaga niýetlenen emläk
                  ätiýaçlandyryşyň bir görnüşi bolup durýar.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={delivery_big}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Raýatlara hususy eýeçilik hukugy degişli bolan ýaşaýyş
                  jaýlaryny meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Ätiýaçlandyrýana (Bähbit görüjä) eýeçilik hukugy esasynda
                  degişli bolan ýaşaýyş jaýlary ätiýaçlandyryş obýektleri bolup
                  bilerler, olara aýratyn duran ýaşaýyş jaýlary ýa-da köp öýli
                  ýaşaýyş jaýlaryndaky öýler degişlidir, 
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={house_yellow}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Ekologiýa töwekgelçilikleriň meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  ekologiýa töwekgelçiligi – ekologiýa howpsuzlygyna abanýan
                  howplaryň döremegine getirip biljek hojalyk we beýleki işiň
                  çaklanylýan ýaramaz täsir etmesi bilen şertlendirilen, daşky
                  gurşaw we ilatyň saglygy üçin ýaramaz netijeleri bar bolan
                  wakanyň ýüze çykmak ähtimallygy;
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={rain}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Ipotekany meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Jaý satyn almak üçin ipoteka ýa-da başga görnüşli karz alýan
                  bolsaňyz, karz berijiňiz tarapyndan jaý ätiýaçlandyryşy talap
                  edilip bilner. Jaý zaýalanan ýa-da weýran bolan ýagdaýynda
                  ätiýaçlandyryş goragy karzy üzmäge ýa-da karz mukdaryny
                  azaltmaga mümkinçilik berer.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={house_blue}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Iş berijiniň raýat-hukuk jogapkärçiligini meýletin
                  ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Öz işgärleriniň aladasyny edýän sowatly ýolbaşçylar iş
                  berijiniň raýat-hukuk jogapkärçiligini ätiýaçlandyryş
                  şertnamasynyň barlygyny hökman göz öňüne tutarlar.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={cv_form}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Ätiýaçlandyryş kepilligi bermegiň meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Lorem ipsum dolor sit amet consectetur. Urna auctor
                  consectetur nullam cras massa. Vel vitae ante lacus
                  condimentum eget consequat pretium ut.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={insurance}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Ýuridiki şahslaryň hasabyna işgärleri betbagtçylykly
                  hadysalardan meýletin köpçülikleýin ätiýaçlandyryş şahslaryň
                  öňündäki raýat-hukuk jogapkärçiligini ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Ätiýaçlandyrylan şahsyň özüniň zähmet borçlaryny ýerine
                  ýetirýän wagtynda we onuň iş ýerine hem-de yzyna barýan
                  wagtynda betbagytçylykly hadysanyň netijesinde ömrüne ýa-da
                  saglygyna zyýan ýetmegi bilen baglanyşykly hususy bähbitleri
                  ätiýaçlandyryş obýekti bolup durýar.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={team_work}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Daşaýjynyň (ekspeditoryň) raýat-hukuk jogapkärçiligini
                  meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  CMR-ätiýaçlandyrma — bu ulag kompaniýasynyň ýük daşaýjynyň
                  raýat hukuk jogapkärçiligini meýletin ätiýaçlandyryşy bolup,
                  ýükleriň ýol arkaly halkara daşalmagy babatda şertnama
                  hakyndaky Konwensiýa kabul edilen ýurtlarda hereket edýär,
                  bularyň hataryna Belarus, Russiýa Federasiýasy, Gazagystan
                  hem-de GDA-nyň we Ýewropanyň beýleki ýurtlary girýär.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={delivery_small}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Betbagtçylykly hadysalardan meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Betbagtçylykly hadysalaryndan ätiýaçlandyryş – heläkçilik
                  ýa-da heläkçilik sebäpli aradan çykan halatynda maliýe
                  goragyny üpjün etmek üçin niýetlenen ätiýaçlandyryşyň bir
                  görnüşidir.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={hurricane}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-full flex items-center justify-between flex-col rounded-[20px] sm:pt-7 md:pt-[35px] pb-5 sm:px-[25px] md:px-[31px] ">
              <div>
                <p className="sm:text-[14px] md:text-[18px] font-[sans-semibold] ">
                  Türkmenistanyñ çäklerinden daşyna gidýän raýatlaryñ saglygyny
                  meýletin ätiýaçlandyryş
                </p>
                <p className="text-[#717171] sm:mb-[25px] md:mb-[50px] sm:text-[14px] md:text-[16px] mt-4 font-[sans-regular] ">
                  Ätiýaçlandyrylan şahsyň ätiýaçlandyryş goragy bilen üpjün
                  edilýän möhletinde, ätiýaçlandyryş çäginde bolýan wagtynda
                  bolup geçen ätiýaçlandyryş halaty netijesinde onuň ömrüne
                  ýa-da saglygyna zelel ýetirilmegi bilen baglanyşykly
                  Ätiýaçlandyrýanyň emläk bähbitleri ätiýaçlandyryşyň obýekti
                  bolup durýar.
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={travel}
                  className="sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px] object-cover "
                  alt="surat"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section
        className="w-full bg-[#F8F8F8] sm:pt-[60px] md:pt-[70px] sm:pb-[80px] md:pb-[90px] "
        id="about"
      >
        <div className="w-[90%] mx-auto ">
          <div className="sm:w-full md:w-[70%] lg:w-[50%] md:text-left sm:text-center sm:mb-[50px] md:mb-[58px] ">
            <p className="sm:text-[10px] md:text-[12px] sm:mb-[15px] md:mb-[35px] sm:tracking-[2px] md:tracking-[5px] font-[sans-regular]">
              BIZ BARADA
            </p>
            <p className="sm:text-[24px] md:text-[46px] font-[sans-medium]">
              Ätiýaçlandyryşy ynamly we ýokary hilli edýäris
            </p>
          </div>

          <div className="w-full sm:flex-col md:flex-row flex sm:mb-[30px] md:mb-[60px] items-start justify-center sm:gap-3 md:gap-[112px]">
            <div className="text-[#6A6A6A] font-[sans-medium] sm:text-[12px] md:text-[16px] sm:w-full md:w-[45%] sm:pb-0 md:pb-[34px] sm:border-none md:border-b border-[#DDDDDD] h-full">
              <p className="sm:mb-3 md:mb-9">
                “Ygtybarly ätiýaçlandyryş” AGPJ-nyň işi 16.01.2024 ýyldän bäri
                10.07.2024 ýylda berlen hususy ätiýaçlandyryşyny, emläk we
                jogapkärçilik ätiýaçlandyryşyny amala aşyrmak maksady bilen
                10.07.2024ý. senesinde Türkmenistanyň Maliýe we ykdysadyýet
                ministrligi tarapyndan berlen №1-17-30-44 ygtyýarnamasy esasynda
                hereket edýär.
              </p>
              <p>
                “Ygtybarly ätiýaçlandyryş” AGPJ-nyň işiniň çäklerinde 15 golaý
                ätiýaçlandyryş önümleri döredildi. Her bir müşderä bildirilýän
                äýratyn çemeleşme ätiýaçlandyryşyň ähli görnüşi boýunça amatly
                taslamalary döretmek mümkinçiligini berýär.
              </p>
            </div>

            <div className="text-[#6A6A6A] font-[sans-medium] sm:text-[12px] md:text-[16px] sm:w-full md:w-[45%]  border-b border-[#DDDDDD] sm:pb-9 md:pb-0 sm:h-fit md:h-[287px] ">
              Betbagtçylykly hadysalaryndan ätiýaçlandyryş, awtoulag
              serişdeleriniň ätiýaçlandyrylyşy, ýurduň çäklerinden daşyna gidýän
              raýatlaryñ atiýaçlandyrylyşy, fiziki we ýuridiki şahslaryň
              emläkleriniň ätiýaçlandyrylyşy “Ygtybarly ätiýaçlandyryş” AGPJ-nyň
              işiniň ileri tutulýan ugurlary bolup durýar.
            </div>
          </div>

          <div className="mb-[60px] w-full sm:flex sm:flex-col sm:items-center sm:justify-center md:grid md:grid-cols-auto-fill-250 sm:gap-5 md:gap-[50px]">
            <img src={about_1} alt="about" />
            <img src={about_2} alt="about" />
            <img src={about_3} alt="about" />
          </div>

          <div className="w-full sm:grid sm:gap-[60px] md:gap-0 sm:grid-cols-2 md:flex items-center justify-between">
            <div className="relative flex items-center justify-center flex-col">
              <p className="sm:text-[50px] md:text-[70px] font-[sans-medium] ">
                900
              </p>
              <p className="text-[#6A6A6A] sm:text-[12px] md:text-[16px] font-[sans-regular] ">
                MÜŞDERILER
              </p>
              <img
                src={plus}
                alt="plus"
                className="absolute top-2 sm:right-[-10px] xs:right-[15%] md:right-[-20px]"
              />
            </div>

            <div className="relative flex items-center justify-center flex-col">
              <p className="sm:text-[50px] md:text-[70px] font-[sans-medium] ">
                99
              </p>
              <p className="text-[#6A6A6A] sm:text-[12px] md:text-[16px] font-[sans-regular]">
                MÜŞDERI RAZYLYGY
              </p>
              <img
                src={procent}
                alt="plus"
                className="absolute top-2 sm:right-[-10px] xs:right-[15%] md:right-[-20px]"
              />
            </div>

            <div className="relative flex items-center justify-center flex-col">
              <p className="sm:text-[50px] md:text-[70px] font-[sans-medium] ">
                700
              </p>
              <p className="text-[#6A6A6A] sm:text-[12px] md:text-[16px] font-[sans-regular]">
                ŞERTNAMA
              </p>
              <img
                src={plus}
                alt="plus"
                className="absolute top-2 sm:right-[-10px] xs:right-[15%] md:right-[-20px]"
              />
            </div>

            <div className="relative flex items-center justify-center flex-col">
              <p className="sm:text-[50px] md:text-[70px] font-[sans-medium] ">
                40
              </p>
              <p className="text-[#6A6A6A] sm:text-[12px] md:text-[16px] font-[sans-regular]">
                IŞGÄR
              </p>
              <img
                src={plus}
                alt="plus"
                className="absolute top-2 sm:right-[-10px] xs:right-[15%] md:right-[-20px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* tapawutlanmak */}
      <section className="w-full sm:pt-[60px] md:pt-[200px] sm:mb-[80px] md:mb-[144px]">
        <div className="w-[90%] flex md:flex-row sm:flex-col items-start justify-center sm:gap-5 md:gap-[76px] mx-auto ">
          <div className="md:hidden w-full text-center sm:block">
            <p className="sm:text-[10px] md:text-[12px] sm:mb-[15px] md:mb-[35px] sm:tracking-[2px] md:tracking-[5px] font-[sans-regular]">
              BIZIŇ AÝRATYNLYGYMYZ
            </p>
            <p className="sm:text-[24px] md:text-[46px] font-[sans-medium]">
              Beýlekilerden tapawutlanmak üçin dogry ýer
            </p>
          </div>
          <div className="sm:w-full md:w-[50%] sm:grid sm:grid-cols-2 md:flex md:items-center md:justify-center md:flex-wrap gap-[30px] ">
            <div className="sm:px-3 md:px-10 sm:w-full md:w-[290px] sm:py-[18px] md:py-[44px] border border-[#DCDCDC] rounded-[16px]">
              <img
                src={like}
                alt="icon"
                className="md:w-[46px] sm:w-[26px] object-cover "
              />
              <p className="sm:pt-5 md:mt-[35px] sm:mb-2 md:mb-[15px] text-[20px] font-[sans-semibold] ">
                {dil === "tk"
                  ? "Ygtybarly"
                  : dil === "ru"
                  ? "Надежно"
                  : "Reliable"}
              </p>
              <p className="sm:w-full md:w-[90%] text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] ">
                {dil === "tk"
                  ? "Biz müşderilerimiziň ynamyny gazanan, ygtybarly ätiýaçlandyryş hyzmatlaryny hödürleýäris."
                  : dil === "ru"
                  ? "Мы предоставляем надежные страховые услуги, заслужившие доверие клиентов."
                  : " We provide reliable insurance services trusted by our clients."}
              </p>
            </div>

            <div className="sm:px-3 md:px-10 sm:w-full md:w-[290px] sm:py-[18px] md:py-[44px] border border-[#DCDCDC] rounded-[16px]">
              <img
                src={clock}
                alt="icon"
                className="md:w-[46px] sm:w-[26px] object-cover "
              />
              <p className="sm:pt-5 md:mt-[35px] sm:mb-2 md:mb-[15px] text-[20px] font-[sans-semibold]  ">
                {dil === "tk" ? "Çalt" : dil === "ru" ? "Быстро" : "Fast"}
              </p>
              <p className="sm:w-full md:w-[90%] text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] ">
                {dil === "tk"
                  ? "Tiz we amatly ätiýaçlandyryş hyzmatlary bilen size hyzmat edýäris!"
                  : dil === "ru"
                  ? "Мы предоставляем быстрые и удобные страховые решения!"
                  : "We offer fast and convenient insurance solutions!"}
              </p>
            </div>

            <div className="sm:px-3 md:px-10 sm:w-full md:w-[290px] sm:py-[18px] md:py-[44px] border border-[#DCDCDC] rounded-[16px]">
              <img
                src={star}
                alt="icon"
                className="md:w-[46px] sm:w-[26px] object-cover "
              />
              <p className="sm:pt-5 md:mt-[35px] sm:mb-2 md:mb-[15px] text-[20px] font-[sans-semibold]  ">
                {dil === "tk"
                  ? "Tejribeli"
                  : dil === "ru"
                  ? "Опытно"
                  : "Experienced"}
              </p>
              <p className="sm:w-full md:w-[90%] text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] ">
                {dil === "tk"
                  ? "Köp ýyllyk tejribämiz bilen siziň ygtybarly goldawyňyz bolarys!"
                  : dil === "ru"
                  ? "Благодаря многолетнему опыту, мы – ваша надежная поддержка!"
                  : "With years of experience, we are your trusted support!"}
              </p>
            </div>

            <div className="sm:px-3 md:px-10 sm:w-full md:w-[290px] sm:py-[18px] md:py-[44px] border border-[#DCDCDC] rounded-[16px]">
              <img
                src={shield}
                alt="icon"
                className="md:w-[46px] sm:w-[26px] object-cover "
              />
              <p className="sm:pt-5 md:mt-[35px] sm:mb-2 md:mb-[15px] text-[20px] font-[sans-semibold]  ">
                {dil === "tk"
                  ? "Howpsuz"
                  : dil === "ru"
                  ? "Безопасно"
                  : "Secure"}
              </p>
              <p className="sm:w-full md:w-[90%] text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] ">
                {dil === "tk"
                  ? "Maliýe we emläk goragyňyz biziň bilen ygtybarly ellerde!"
                  : dil === "ru"
                  ? "Ваша финансовая и имущественная безопасность в надежных руках!"
                  : "Your financial and property security is in safe hands with us!"}
              </p>
            </div>
          </div>

          <div className="sm:w-full md:w-[50%] sm:pt-0 md:pt-10">
            <p className="text-[12px] md:block sm:hidden font-[sans-regular] tracking-[5px] ">
              BIZIŇ AÝRATYNLYGYMYZ
            </p>
            <p className="text-[46px] md:block sm:hidden font-[sans-medium] mt-[35px] mb-[48px] ">
              {dil === "tm"
                ? "Siziň ygtybarly hyzmatdaşyňyz! "
                : dil === "ru"
                ? "Ваш надежный партнер! "
                : "Your Trusted Partner! "}
            </p>
            <p className="sm:text-[14px] md:text-[16px] md:text-left sm:text-center font-[sans-medium] text-[#6A6A6A] ">
              {dil === "tm"
                ? "Biz müşderilerimize ygtybarly, howpsuz, çalt we tejribeli ätiýaçlandyryş hyzmatlaryny hödürleýäris. Maliýe we emläk goragyňyz biziň bilen kepillendirilen! Tiz we amatly hyzmatlarymyz bilen iň gowy çözgütleri size ýetirýäris. Köp ýyllyk tejribämiz bilen, geljegiňizi ynam bilen goramak üçin siziň hyzmatyňyzda!"
                : dil === "ru"
                ? "Мы предлагаем надежные, безопасные, быстрые и опытные страховые услуги. Ваша финансовая и имущественная безопасность гарантирована с нами! Мы предоставляем лучшие решения быстро и удобно. Благодаря многолетнему опыту, мы здесь, чтобы защитить ваше будущее с уверенностью!"
                : "We provide reliable, secure, fast, and experienced insurance services. Your financial and property protection is guaranteed with us! We deliver the best solutions quickly and conveniently. With years of experience, we are here to safeguard your future with confidence!"}
            </p>
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="w-full sm:mb-[50px] md:mb-[100px] " id="clients">
        <div className="w-full">
          {/* <img
            src={ellipse3}
            alt="ellipse"
            className="absolute w-[50%] h-fit object-cover top-0 left-0 "
          /> */}
          <div className="w-[80%] relative mx-auto mb-[145px] lg:gap-0 sm:gap-10 flex lg:flex-row sm:flex-col items-center justify-between">
            <div className="sm:w-full lg:w-[50%] ">
              <p className="sm:text-[8px] md:text-[12px] tracking-[5px] font-[sans-regular] sm:text-center lg:text-left sm:mb-5 md:mb-[35px] ">
                MÜŞDERILERIMIZ
              </p>
              <p className="sm:text-[24px] md:text-[46px] font-[sans-medium] sm:text-center lg:text-left sm:w-full lg:w-[75%]">
                Ähli müşderilerimiziň ynamyny ödemek biziň maksadymyz
              </p>
            </div>

            <div className="sm:w-full lg:w-[35%] relative">
              <div className="flex h-[50vh] items-center justify-between w-full overflow-hidden">
                <div className="w-full flex items-center justify-center ">
                  <ContinuousVerticalSlider items={logos} />
                  <div className="slider-overlay_top"></div>
                </div>

                <div className="w-full flex items-center justify-center mt-10 ">
                  <ContinuousVerticalSlider direction="reverse" items={logos} />
                  <div className="slider-overlay-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] flex md:flex-row sm:flex-col items-center sm:justify-center md:justify-between text-white mx-auto sm:px-0 md:px-[76px] sm:py-[36px] md:py-[62px]  bg-custom-teal-gradient rounded-[20px] ">
          <p className="sm:text-[24px] md:text-[46px] md:mb-0 sm:mb-6 font-[sans-medium] sm:w-full md:text-left sm:text-center md:w-[50%] ">
            Geljegiňizi biziň bilen ätiýaçlandyryň
          </p>

          <div className="flex items-baseline flex-col justify-start gap-[22px]">
            <p className="text-[16px] font-[sans-medium]">
              Ynamly we Professional{" "}
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#34C2AA] text-[14px] font-[sans-semibold] rounded-[22px] outline-none py-[10px] px-[22px] flex items-center justify-center "
            >
              {dil === "tk"
                ? "Habarlaşmak üçin"
                : dil === "ru"
                ? "Обращайтесь к нам"
                : "Contact us"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
