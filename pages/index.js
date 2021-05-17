/*
 * File: index.js                                                              *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 7:52:22 am                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 1:12:13 pm                             *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import Header from "../components/header";
import Hero from "../components/hero";
import Clients from "../components/clients";
import Services from "../components/services";
import Footer from "../components/footer";

function PortfolioHomePage() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      {/* header */}
      <Header />

      <div className="wrapper">
        {/* hero */}
        <Hero />

        {/* clients */}
        <Clients />

        {/* services */}
        <Services />

        {/* resume */}
        <section className="w-full" id="resume">
          resume
        </section>

        {/* skills */}
        <section className="w-full" id="skills">
          skills
        </section>

        {/* tools */}
        <section className="w-full" id="tools">
          tools
        </section>

        {/* works */}
        <section className="w-full" id="works">
          works
        </section>

        {/* testimonials */}
        <section className="w-full" id="testimonials">
          testimonials
        </section>

        {/* faqs */}
        <section className="w-full" id="faqs">
          faqs
        </section>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioHomePage;
