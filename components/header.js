/*
 * File: header.js                                                             *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 9:45:14 am                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 12:22:43 pm                            *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */
import { RiCodeSSlashLine, RiMenu3Fill } from "react-icons/ri";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Header() {
  return (
    <header className="nav-header">
      {/* brand */}
      <div className="flex space-x-2 items-center cursor-pointer font-semibold">
        <RiCodeSSlashLine className="nav-icon" />
        <a href="/" className="hidden lg:block text-black dark:text-white">
          quabynah@codelabs.dev
        </a>
      </div>

      {/* navigation */}
      <div className="flex flex-col justify-center">
        {/* mobile */}
        <RiMenu3Fill className="lg:hidden nav-icon" />

        {/* nav links */}
        <div className="hidden lg:flex space-x-6 items-center group">
          <Link
            activeClass="active"
            className="nav-link"
            to="hero"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="resume"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Resume
          </Link>
          <Link
            className="nav-link"
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
          <Link
            className="nav-link"
            to="works"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Works
          </Link>
          <Link
            className="nav-link"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Testimonials
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
