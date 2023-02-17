import React from 'react'
import Link from 'next/link'

export default function section2() {
  return (
    <section className='container mx-auto md:px-20 py-10'>
      <h1 className='font-bold text-3xl py-5 text-center text-red-800'>Latest @ SFAC</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
      </div>
    </section>
  )
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/sfac1.png"}
            width={500}
            className="rounded"
            height={350}
            alt="img1"
          />
        </Link>
      </div>
      <div className="info flex justifiy-center flex-col py-4">
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
