"use client";

import Image from "next/image";

type ProjectPreviewProps = {
  title: string;
  status: string;
  tech: string[];
  image?: string;
};


export default function ProjectPreview({
  title,
  status,
  tech,
  image,
}: ProjectPreviewProps) {


  const slugTitle = title
    .toLowerCase()
    .replaceAll(" ", "-");



  return (

    <div
      className="
      relative
      mb-6
      overflow-hidden
      rounded-[1.5rem]
      border
      border-white/10
      bg-zinc-950
      shadow-2xl
      "
    >


      {/* Browser Header */}

      <div
        className="
        flex
        items-center
        gap-2
        border-b
        border-white/10
        bg-white/[0.04]
        px-4
        py-3
        "
      >

        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />



        <div
          className="
          ml-3
          flex-1
          truncate
          rounded-full
          bg-black/40
          px-4
          text-[10px]
          leading-6
          text-zinc-500
          "
        >
          portfolio.dev/{slugTitle}

        </div>


      </div>





      {/* Preview Area */}

      <div
        className="
        group
        relative
        h-52
        overflow-hidden
        bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_30%)]
        "
      >



        {image ? (

          <>


            <Image

              src={image}

              alt={`Preview ${title}`}

              fill

              sizes="
              (max-width:768px) 100vw,
              33vw
              "

              className="
              object-cover
              transition-all
              duration-700
              ease-out
              group-hover:scale-110
              "

            />



            {/* overlay */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
              "
            />



            {/* status badge */}

            <div
              className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-violet-300/30
              bg-black/40
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-violet-200
              backdrop-blur
              "
            >

              {status}

            </div>




            {/* tech */}

            <div
              className="
              absolute
              bottom-4
              left-4
              flex
              flex-wrap
              gap-2
              "
            >

              {tech.slice(0,3).map((item)=>(

                <span
                  key={item}
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-2.5
                  py-1
                  text-[10px]
                  text-zinc-200
                  backdrop-blur
                  "
                >

                  {item}

                </span>

              ))}


            </div>


          </>


        ) : (


          <div
            className="
            relative
            h-full
            p-5
            "
          >


            <div
              className="
              absolute
              right-0
              top-0
              h-40
              w-40
              translate-x-10
              -translate-y-10
              rounded-full
              bg-violet-500/30
              blur-3xl
              "
            />



            <div
              className="
              relative
              flex
              h-full
              flex-col
              justify-between
              rounded-xl
              border
              border-white/10
              bg-black/30
              p-4
              backdrop-blur
              "
            >


              <div>


                <span
                  className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-1
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-violet-200
                  "
                >

                  {status}

                </span>



                <h4
                  className="
                  mt-4
                  max-w-xs
                  text-lg
                  font-semibold
                  text-white
                  "
                >

                  {title}

                </h4>


              </div>



              <div
                className="
                flex
                flex-wrap
                gap-2
                "
              >

                {tech.slice(0,3).map((item)=>(

                  <span
                    key={item}
                    className="
                    rounded-full
                    bg-white/10
                    px-2.5
                    py-1
                    text-[10px]
                    text-zinc-200
                    "
                  >

                    {item}

                  </span>

                ))}


              </div>


            </div>


          </div>


        )}



      </div>



    </div>

  );

}