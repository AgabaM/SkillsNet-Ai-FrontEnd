"use client"
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return(
    <footer className="border-t border-[var(--color-border)]">
     <div className="container py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        <div className="font-extrabold text-2xl">SkillsNet.ai</div>
        <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {navItems.map((item) =>(
            <a href={item.href} key={item.href} className="uppercase text-xs tracking-widest font-bold text-gray-400"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if(element){
                  element.scrollIntoView({behavior: "smooth"});
                }
              }}
              >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
      <div className="flex justify-center gap-6 ">
        {socialLinks.map((link) => (
          <a href={link.href} key={link.name}>
          <div key={link.name} className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
            <FontAwesomeIcon icon={link.icon} className="size-4"/>
            </div>
            </a>
        ))}
      </div>
      <p className="text-gray-500 text-px">&copy; MoshLabs Ug, All rights reserved.</p>
     </div>
     </div>
  </footer>
  )

};

export default Footer;
