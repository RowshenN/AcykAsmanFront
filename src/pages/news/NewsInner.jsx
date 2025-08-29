<<<<<<< HEAD
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import surat from "../../images/carouselImg.png";

const NewsInner = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full flex items-center justify-start"
        variants={itemVariants}
      >
        <RiArrowLeftSLine
          onClick={() => navigate(-1)}
          className="text-[24px] dark:text-white cursor-pointer mb-[38px]"
        />
      </motion.div>

      {/* carousel */}
      <motion.div className="w-full mb-[48px]" variants={itemVariants}>
        <Carousel arrows infinite autoplay speed={1000} autoplaySpeed={4000}>
          {[surat, surat, surat].map((img, i) => (
            <div key={i} className="max-h-[80vh] h-full w-full">
              <img
                src={img}
                alt="carousel"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </motion.div>

      {/* header */}
      <motion.div
        className="w-full mb-8 flex items-center justify-start gap-6"
        variants={itemVariants}
      >
        <h1 className="text-[32px] font-[semibold] dark:text-white">
          Жаркий Новый Год
        </h1>
        <div className="w-fit bg-[#DBDBDB] rounded-[6px] py-[13px] px-[27px] text-[18px] font-[regular]">
          <p>15.05.2025</p>
        </div>
      </motion.div>

      <motion.div
        className="w-full mb-7 text-[18px] font-[regular] dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        1 августа 2025 года Кабинетом Министров Республики Узбекистан было
        принято Постановление №490, официально закрепляющее параметры реализации
        проекта всесезонного курорта Sea Breeze Uzbekistan и подтверждающее
        готовность государства к сотрудничеству с Agalarov Development на основе
        открытости, экологической ответственности и стратегического подхода к
        развитию туристической инфраструктуры. 1 августа 2025 года Кабинетом
        Министров Республики Узбекистан было принято Постановление №490,
        официально закрепляющее параметры реализации проекта всесезонного
        курорта Sea Breeze Uzbekistan и подтверждающее готовность государства к
        сотрудничеству с Agalarov Development на основе открытости,
        экологической ответственности и стратегического подхода к развитию
        туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
        Республики Узбекистан было принято Постановление №490, официально
        закрепляющее параметры реализации проекта всесезонного курорта Sea
        Breeze Uzbekistan и подтверждающее готовность государства к
        сотрудничеству с Agalarov Development на основе открытости,
        экологической ответственности и стратегического подхода к развитию
        туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
        Республики Узбекистан было принято Постановление №490, официально
        закрепляющее параметры реализации проекта всесезонного курорта Sea
        Breeze Uzbekistan и подтверждающее готовность государства к
        сотрудничеству с Agalarov Development на основе открытости,
        экологической ответственности и стратегического подхода к развитию
        туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
        Республики Узбекистан было принято Постановление №490, официально
        закрепляющее параметры реализации проекта всесезонного курорта Sea
        Breeze Uzbekistan и подтверждающее готовность государства к
        сотрудничеству с Agalarov Development на основе открытости,
        экологической ответственности и стратегического подхода к развитию
        туристической инфраструктуры.
      </motion.div>

      <motion.div
        className="w-full text-[18px] dark:text-white font-[regular] mb-[116px]"
        variants={itemVariants}
      >
        <ul>
          <li>общая площадь будущего курорта составит 577 гектаров ...</li>
          <li>общая площадь будущего курорта составит 577 гектаров ...</li>
        </ul>
      </motion.div>

      {/* other videos */}
      <motion.div className="w-full" variants={containerVariants}>
        <motion.h1
          className="text-left mb-7 text-[24px] dark:text-white font-[semibold]"
          variants={itemVariants}
        >
          Beýleki tazelikler
        </motion.h1>

        <motion.div
          className="w-full grid xs:grid-cols-2 md:grid-cols-news-cards xs:gap-3 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <NewsCard />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsInner;
=======
import { Carousel } from 'antd'
import { motion } from 'framer-motion'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import NewsCard from '../../components/newsCard/NewsCard'
import surat from '../../images/carouselImg.png'

const NewsInner = () => {
	const navigate = useNavigate()

	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			className='w-full'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false, amount: 0.2 }}
			variants={containerVariants}
		>
			<motion.div
				className='w-full flex items-center justify-start'
				variants={itemVariants}
			>
				<RiArrowLeftSLine
					onClick={() => navigate(-1)}
					className='text-[24px] dark:text-white cursor-pointer mb-[38px]'
				/>
			</motion.div>

			{/* carousel */}
			<motion.div className='w-full mb-[48px]' variants={itemVariants}>
				<Carousel arrows infinite autoplay speed={1000} autoplaySpeed={4000}>
					{[surat, surat, surat].map((img, i) => (
						<div key={i} className='max-h-[80vh] h-full w-full'>
							<img
								src={img}
								alt='carousel'
								className='w-full h-full object-cover'
							/>
						</div>
					))}
				</Carousel>
			</motion.div>

			{/* header */}
			<motion.div
				className='w-full mb-8 flex items-center justify-start gap-6'
				variants={itemVariants}
			>
				<h1 className='text-[32px] font-[semibold] dark:text-white'>
					Жаркий Новый Год
				</h1>
				<div className='w-fit bg-[#DBDBDB] rounded-[6px] py-[13px] px-[27px] text-[18px] font-[regular]'>
					<p>15.05.2025</p>
				</div>
			</motion.div>

			<motion.div
				className='w-full mb-7 text-[18px] font-[regular] dark:text-white'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				1 августа 2025 года Кабинетом Министров Республики Узбекистан было
				принято Постановление №490, официально закрепляющее параметры реализации
				проекта всесезонного курорта Sea Breeze Uzbekistan и подтверждающее
				готовность государства к сотрудничеству с Agalarov Development на основе
				открытости, экологической ответственности и стратегического подхода к
				развитию туристической инфраструктуры. 1 августа 2025 года Кабинетом
				Министров Республики Узбекистан было принято Постановление №490,
				официально закрепляющее параметры реализации проекта всесезонного
				курорта Sea Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.
			</motion.div>

			<motion.div
				className='w-full text-[18px] dark:text-white font-[regular] mb-[116px]'
				variants={itemVariants}
			>
				<ul>
					<li>общая площадь будущего курорта составит 577 гектаров ...</li>
					<li>общая площадь будущего курорта составит 577 гектаров ...</li>
				</ul>
			</motion.div>

			{/* other videos */}
			<motion.div className='w-full' variants={containerVariants}>
				<motion.h1
					className='text-left mb-7 text-[24px] dark:text-white font-[semibold]'
					variants={itemVariants}
				>
					Beýleki wideolar
				</motion.h1>

				<motion.div
					className='w-full grid grid-cols-news-cards gap-5'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false, amount: 0.2 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
							}}
						>
							<NewsCard />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default NewsInner
>>>>>>> 79beaac15ae2517c6e88e0d069e056e8bb9cc177
