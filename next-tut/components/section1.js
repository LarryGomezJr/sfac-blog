import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

export default function section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-2xl pb-3 text-red-800">Announcement</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide2()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={"/images/sfac1.png"}
            width={600}
            height={600}
            alt="img1"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link legacyBehavior href={"/"}>
            <a className="text-red-500 hover:text-orange-800">
              Join Our Family{" "}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> - July 7, 2022</a>
          </Link>
        </div>
        <div className="title">
          <h1 className="text-3xl md:text-6xl text-gray-600">
            Academics. And beyond
          </h1>

          <p className="text-gray-500 py-5">
            Saint Francis of Assisi College (SFAC) is a hub for progressive and
            holistic education, guided by the virtues of Saint Francis of Assisi
            that empowers learners with a solid academic foundation enriched by
            physical, spiritual, and cultural advancement.
          </p>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} alt="img1" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link legacyBehavior href={"/"}>
            <a className="text-red-500 hover:text-orange-800">
              Join Our Family{" "}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> - July 7, 2022</a>
          </Link>
        </div>
        <div className="title">
          <h1 className="text-3xl md:text-6xl text-gray-600">
            Academics. And beyond
          </h1>

          <p className="text-gray-500 py-5">
            Saint Francis of Assisi College (SFAC) is a hub for progressive and
            holistic education, guided by the virtues of Saint Francis of Assisi
            that empowers learners with a solid academic foundation enriched by
            physical, spiritual, and cultural advancement.
          </p>
        </div>
      </div>
    </div>
  );
}
