import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education, experiences } from "@/data/portfolio";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
  isLast: boolean;
};

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <Reveal delay={index * 120}>
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-violet-300 bg-black shadow-[0_0_24px_rgba(167,139,250,0.7)]" />

        {!isLast ? (
          <div className="absolute left-[7px] top-8 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-violet-300/60 to-transparent" />
        ) : null}

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.06]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-violet-300">{subtitle}</p>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400">
              {period}
            </span>
          </div>

          <p className="mt-4 leading-7 text-zinc-400">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function JourneySection() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Perjalanan belajar dan pengalaman saya."
            description="Bagian ini menampilkan proses belajar, pengalaman, dan latar belakang pendidikan secara lebih rapi dan mudah dipahami."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] text-center text-xl leading-10">
                  ✦
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Experience
                </h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <TimelineItem
                  key={`${item.role}-${item.company}`}
                  title={item.role}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] text-center text-xl leading-10">
                  ◇
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Education
                </h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem
                  key={`${item.school}-${item.major}`}
                  title={item.school}
                  subtitle={item.major}
                  period={item.period}
                  description={item.description}
                  index={index}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}