// import React from 'react'
import React, { useEffect, useState } from "react"
import CarouselHero from "../../components/common/CarouselHero"
import TopBanner from "../../components/common/TopBanner"
import Footer from "../../components/user/FooterUser"
import TabSection from "../../components/user/TabSection"
import CategoryCard from "../../components/user/CategoryCard"
import TrendingCourse from "../../components/user/TrendingCourse"
import Logo from "../../components/common/Logo"
import { getAllCategoriesAPI } from "../../api/common"

function HeroUser() {
  const LinkTitle = "Web Application Development";
  const promotion = "From the person who made javascript easy as possible introducing"

  const [showComponent, setShowComponent] = useState(false)
  const [categories, setCategories] = useState([])

  const closeBanner = ()=>{
    setShowComponent(false)
  }

  useEffect(() => {
    getAllCategoriesAPI()
      .then(({data})=>{
        setCategories(data.categories)
      })

    setTimeout(() => {
      setShowComponent(true)
    }, 5000);
  }, [])

  return (
    <>
    
      <TopBanner LinkTitle={LinkTitle} to="/explore" promotion={promotion} showComponent={showComponent} closeBanner={closeBanner}  />

      <div className="pt-10 px-1 md:px-10 sm:px-5  pb-24">
        <CarouselHero />

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <CategoryCard categories={categories} />

        <TrendingCourse />

        <TabSection />

        <section id="about" className="relative isolate overflow-hidden bg-white rounded-2xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {/* <Logo size={2}/> */}
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p className="nexa-font">“At Standard Security Solutions, we're dedicated to fostering a culture of curiosity, creativity, and growth – both for our students and our team. We believe that learning is a lifelong journey, 
                and we're committed to providing our students with the <span className="text-green-500">highest-quality educational resources</span>."</p>
              </blockquote>
              <figcaption className="mt-10">
                <img className="mx-auto h-20 w-20 rounded-full" src="https://raw.githubusercontent.com/iskconpandharpur/LSM/main/Unknown-removebg-preview%20(1).png" alt="" />
                <div className="mt-4  text-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900 nexa-font">Ranjit Kolhal</div>
    
                  {/* <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg> */}
                  <div className="text-gray-600">CEO of Standard Security Solutions</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>


        {/* <section className="h-22">
        </section> */}

      </div>
      
      <Footer />
    </>
  )
}

export default HeroUser