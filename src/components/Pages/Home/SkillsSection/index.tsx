import FadeInOnView from "@/components/Common/FadeInOnView";
import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import Image from "next/image";
import data from "./skills.json";

const SKILL_ICON_BASE = "https://skillicons.dev/icons?i=";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <FadeInOnView className="w-full flex flex-col items-center gap-8 md:gap-10">
        <Title title="Skills" />
        <div className="w-full section-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-accent to-accent-light opacity-50 rounded-full" />
          <div className="flex flex-wrap justify-center gap-4 pl-5">
            {data.skills?.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-700/50 border border-zinc-600/30 hover:border-accent/50 hover:bg-zinc-700/70 transition-all duration-200"
              >
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={`${SKILL_ICON_BASE}${skill.icon}`}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInOnView>
    </Section>
  );
}
