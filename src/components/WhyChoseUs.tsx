"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Image from "next/image";
const content = [
    {
      title: "Discover Your Sound With Us : A personal Journey in Music Mastery ",
      description:
        "Embark on a musical journey thats uniquely  our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our  music school , your anspiration meet dedicated support , creating  a harmonious path of mastery ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Discover Your Sound With Us : A personal Journey in Music Mastery",
      description:
        "Embark on a musical journey thats uniquely  our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our  music school , your anspiration meet dedicated support , creating  a harmonious path of mastery ",
        
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         
        </div>
      ),
    },
    {
      title: "Live Feedback & Engagement ",
      description:
        "immerse Yourself  in an interactive learning experience Where feedack is immediate, just like real time changes in a collaborate project. This approach enhance your understanding and mastery of music Concepts and performence techniques ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Limitless Learning opportunities",
      description:
        "With Our Expensive Resourse Library and dynamic course offering , you  will never find youself without something new to explore. Our platfrom provides contineous opportunities for growth, ensuring your musical skills are always advancing.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
  
 
const WhyChoseUs = () => {
    return (
        <div className=""> 
                  <StickyScroll  content={content} />

        </div>
    );
}

export default WhyChoseUs;
