import Container from "@/components/Container";
import ProjectsSection from "@/components/ProjectSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TypingRole from "@/components/TypingRole";
import JourneySection from "@/components/JourneySection";
import ContactForm from "@/components/ContactForm";
import SiteShell from "@/components/SiteShell";
import HeroVisual from "@/components/HeroVisual";
import StatsSection from "@/components/StatsSection";

import {
  heroRoles,
  profile,
  services,
  skills,
} from "@/data/portfolio";


export default function HomePage() {

  return (

    <SiteShell>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="
        relative
        flex
        min-h-screen
        items-center
        pt-28
        pb-20
        "
      >


        <div
          className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_30%)]
          "
        />


        <div
          className="
          absolute
          left-1/2
          top-28
          -z-10
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-violet-500/20
          blur-3xl
          "
        />



        <Container>


          <Reveal className="mx-auto text-center">


            <p
              className="
              mb-6
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-zinc-300
              "
            >
              Available for freelance, internship, and collaboration
            </p>




            <h1
              className="
              mx-auto
              max-w-5xl
              text-6xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-7xl
              lg:text-8xl
              "
            >
              {profile.name}
            </h1>




            <div
              className="
              mt-6
              flex
              justify-center
              "
            >

              <TypingRole

                words={
                  heroRoles.length > 0
                    ? heroRoles
                    : [profile.role]
                }

                className="
                text-2xl
                font-semibold
                text-violet-300
                sm:text-3xl
                "

              />

            </div>





            <p
              className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-zinc-400
              "
            >
              {profile.tagline}
            </p>






            <div
              className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
              "
            >


              <a
                href="#projects"
                className="
                rounded-full
                bg-white
                px-7
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-violet-200
                "
              >
                Lihat Project
              </a>




              <a
                href={`mailto:${profile.email}`}
                className="
                rounded-full
                border
                border-white/15
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-violet-400
                hover:bg-violet-400/10
                "
              >
                Hubungi Saya
              </a>




              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="
                rounded-full
                border
                border-white/15
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-violet-400
                hover:bg-violet-400/10
                "
              >
                Download CV
              </a>



            </div>




            <HeroVisual />



          </Reveal>




          <StatsSection />



        </Container>


      </section>





      {/* ================= ABOUT ================= */}


      <section
        id="about"
        className="py-24"
      >

        <Container>


          <Reveal>

            <SectionHeading

              eyebrow="About"

              title="Tentang saya dan cara saya membangun website."

              description={profile.description}

            />

          </Reveal>




          <div
            className="
            grid
            gap-6
            md:grid-cols-3
            "
          >


            {services.map((service,index)=>(


              <Reveal

                key={service.title}

                delay={index * 120}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-violet-400/40
                hover:bg-white/[0.06]
                "

              >


                <h3
                  className="
                  text-lg
                  font-semibold
                  text-white
                  "
                >

                  {service.title}

                </h3>



                <p
                  className="
                  mt-4
                  leading-7
                  text-zinc-400
                  "
                >

                  {service.description}

                </p>


              </Reveal>


            ))}


          </div>


        </Container>


      </section>





      {/* ================= SKILLS ================= */}


      <section
        id="skills"
        className="py-24"
      >

        <Container>


          <Reveal>

            <SectionHeading

              eyebrow="Skills"

              title="Teknologi yang saya gunakan."

              description="Saya membagi skill berdasarkan area agar lebih mudah dibaca dan dikembangkan."

            />

          </Reveal>




          <div
            className="
            grid
            gap-6
            md:grid-cols-3
            "
          >


            {skills.map((group,index)=>(


              <Reveal

                key={group.category}

                delay={index * 120}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                "

              >


                <h3
                  className="
                  text-lg
                  font-semibold
                  text-white
                  "
                >

                  {group.category}

                </h3>




                <div
                  className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                  "
                >

                  {group.items.map(skill=>(


                    <span

                      key={skill}

                      className="
                      rounded-full
                      border
                      border-white/10
                      bg-black/30
                      px-3
                      py-1
                      text-sm
                      text-zinc-300
                      "

                    >

                      {skill}

                    </span>


                  ))}


                </div>


              </Reveal>


            ))}


          </div>


        </Container>


      </section>






      <ProjectsSection />



      <JourneySection />






      {/* ================= CONTACT ================= */}


      <section
        id="contact"
        className="py-24"
      >


        <Container>


          <Reveal>


            <div
              className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              p-8
              sm:p-12
              "
            >


              <div
                className="
                absolute
                left-1/2
                top-0
                -z-10
                h-56
                w-56
                -translate-x-1/2
                rounded-full
                bg-violet-500/20
                blur-3xl
                "
              />



              <div
                className="
                mx-auto
                max-w-3xl
                text-center
                "
              >


                <p
                  className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-violet-300
                  "
                >
                  Contact
                </p>




                <h2
                  className="
                  mt-4
                  text-3xl
                  font-semibold
                  text-white
                  sm:text-5xl
                  "
                >
                  Mari bangun sesuatu yang keren.
                </h2>



                <p
                  className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-zinc-400
                  "
                >
                  Terbuka untuk kolaborasi, freelance project, internship, atau diskusi seputar pengembangan website.
                </p>


              </div>




              <div
                className="
                mx-auto
                mt-10
                max-w-3xl
                "
              >

                <ContactForm />

              </div>



            </div>


          </Reveal>


        </Container>


      </section>



    </SiteShell>

  );

}