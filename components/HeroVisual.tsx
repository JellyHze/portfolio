"use client";

import { useCallback, useEffect, useState } from "react";


const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind", level: 90 },
  { name: "GitHub", level: 85 },
  { name: "Vercel", level: 80 },
];


const positions = [
  "left-4 top-8",
  "right-8 top-10",
  "left-16 bottom-10",
  "right-4 bottom-14",
  "left-1/2 top-0 -translate-x-1/2",
  "left-1/2 bottom-0 -translate-x-1/2",
];


export default function HeroVisual() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isChanging, setIsChanging] = useState(false);


  const changeSkill = useCallback(
    (skill: typeof skills[number]) => {
      if (skill.name === activeSkill.name) return;


      setIsChanging(true);


      setTimeout(() => {
        setActiveSkill(skill);
        setIsChanging(false);
      }, 350);

    },
    [activeSkill.name]
  );


  useEffect(() => {
    if (isHovered) return;


    const interval = setInterval(() => {

      const currentIndex = skills.findIndex(
        (skill) => skill.name === activeSkill.name
      );


      const nextSkill =
        skills[(currentIndex + 1) % skills.length];


      changeSkill(nextSkill);

    }, 2500);


    return () => clearInterval(interval);

  }, [activeSkill.name, isHovered, changeSkill]);



  const progressDegree = activeSkill.level * 3.6;


  return (
    <div className="relative mx-auto mt-14 h-72 max-w-3xl sm:h-80">

      <div className="
        absolute
        left-1/2
        top-1/2
        h-52
        w-52
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-violet-300/20
        bg-white/[0.03]
        shadow-[0_0_80px_rgba(139,92,246,0.25)]
      "/>


      <div className="
        absolute
        left-1/2
        top-1/2
        h-40
        w-40
        -translate-x-1/2
        -translate-y-1/2
      ">

        <div
          className="
            absolute
            inset-0
            rounded-full
            transition-all
            duration-700
            ease-out
          "
          style={{
            background: `
              conic-gradient(
                #a78bfa ${progressDegree}deg,
                rgba(255,255,255,0.08) ${progressDegree}deg
              )
            `,
          }}
        />


        <div className="
          absolute
          inset-[8px]
          flex
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/90
          backdrop-blur
        ">

          <div
            className={`
              text-center
              transition-all
              duration-500
              ${
                isChanging
                  ? "scale-75 opacity-0 blur-sm"
                  : "scale-100 opacity-100"
              }
            `}
          >

            <p className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-violet-300
            ">
              Skill
            </p>


            <p className="
              mt-1
              text-2xl
              font-bold
              text-white
            ">
              {activeSkill.level}%
            </p>


            <p className="text-sm text-zinc-400">
              {activeSkill.name}
            </p>

          </div>

        </div>

      </div>



      {skills.map((skill, index) => (

        <button
          key={skill.name}
          type="button"
          onMouseEnter={() => {
            setIsHovered(true);
            changeSkill(skill);
          }}
          onMouseLeave={() => setIsHovered(false)}
          className={[
            `
            absolute
            rounded-2xl
            border
            border-white/10
            bg-black/50
            px-5
            py-3
            text-sm
            font-medium
            text-zinc-200
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:border-violet-400
            hover:bg-white/10
            `,
            activeSkill.name === skill.name
              ? "scale-110 border-violet-400 bg-white/10 shadow-[0_0_25px_rgba(167,139,250,0.5)]"
              : "",
            "animate-[float_6s_ease-in-out_infinite]",
            positions[index],
          ].join(" ")}
          style={{
            animationDelay: `${index * 350}ms`,
          }}
        >
          {skill.name}
        </button>

      ))}

    </div>
  );
}