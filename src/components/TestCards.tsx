"use client"
import Image from "next/image";
import t4 from "../app/t4.jpg"
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
  
const quotesArray = [
    {
      quote: "Music expresses that which cannot be put into words and that which cannot remain silent. It brings forth emotions and passions that lie dormant, resonating in the depths of our soul and offering a voice to feelings we cannot articulate.",
      name: "Victor Hugo",
      title: "Novelist and Poet",
      
    },
    {
      quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It unites us across boundaries, ignites the spirit of creativity, and allows us to explore the world within and around us.",
      name: "Plato",
      title: "Philosopher",
      
    },
    {
      quote: "The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers. Through each note, we reach beyond words to inspire, comfort, and bring joy, fostering connections that cannot be described by language alone.",
      name: "Roy Ayers",
      title: "Musician and Composer",
      Image : "{/t4}"
    },
    {
      quote: "Learning to play music is not just about understanding scales and notes; its about discovering patience, resilience, and joy in practice. The dedication to mastering an instrument mirrors the dedication we need in life, making us better, more focused individuals.",
      name: "Anonymous",
      title: "Music Educator",
      
      
    },
    {
      quote: "A music school is not merely a place to learn instruments but a sanctuary for growth and self-expression. Here, each student learns to channel their thoughts, challenges, and dreams through sound, crafting a unique language that speaks directly to the heart.",
      name: "Leonard Bernstein",
      title: "Composer and Conductor",
      
    }
  ];
  
const TestCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center
        overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear Our Harmony: Voices of success</h2>
            
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
                    <div className="w-full max-w-6xl">
                          <InfiniteMovingCards
                            items={quotesArray}
                            direction="right"
                            speed="slow"
                            
                          />
                     </div>

                </div>
            
        </div>
    );
}

export default TestCards;
