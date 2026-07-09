"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import { stats } from "@/data/portfolio";


function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }

      },
      {
        threshold: 0.5,
      }
    );


    if (ref.current) {
      observer.observe(ref.current);
    }


    return () => observer.disconnect();


  }, []);



  useEffect(() => {

    if (!started) return;


    let current = 0;


    const timer = setInterval(() => {

      current += 1;


      if (current >= value) {

        setCount(value);
        clearInterval(timer);

      } else {

        setCount(current);

      }


    }, 50);



    return () => clearInterval(timer);


  }, [started, value]);



  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );

}

export default function StatsSection(){

return (

<section className="py-10">

<Container>

<div className="
grid
gap-5
sm:grid-cols-3
">


{stats.map((item,index)=>(

<Reveal
key={item.label}
delay={index*150}
>


<div
className="
group
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-6
transition
duration-300
hover:-translate-y-2
hover:border-violet-400/50
hover:bg-white/[0.06]
"
>


<div
className="
text-4xl
font-bold
text-white
"
>

<Counter
value={item.value}
suffix={item.suffix}
/>

</div>


<h3
className="
mt-3
font-semibold
text-white
"
>

{item.label}

</h3>


<p
className="
mt-2
text-sm
leading-6
text-zinc-400
"
>

{item.description}

</p>


</div>


</Reveal>


))}


</div>


</Container>

</section>

);

}