import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { skillGroups } from '../data';

function SkillIcon({ skill }) {
  if (skill.iconText) {
    return (
      <div
        className="grid h-12 w-12 place-items-center border bg-ink/70 font-playfair text-lg font-semibold"
        style={{
          borderColor: skill.badgeColor ?? '#6aab30',
          color: skill.badgeColor ?? '#6aab30',
        }}
      >
        {skill.iconText}
      </div>
    );
  }

  return (
    <img
      src={skill.iconUrl ?? `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
      alt={skill.name}
      className="h-12 w-12"
    />
  );
}

export default function Skills() {
  return (
    <Page>
      <PageHeader
        eyebrow="Technical Stack"
        title="Skills"
        description="A focused set of languages, frameworks, libraries, and databases used across personal and academic projects."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-5 pb-24 sm:px-8">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 100}>
            <h2 className="mb-6 font-playfair text-3xl font-semibold text-paper">{group.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.skills.map((skill) => (
                <article
                  key={`${group.title}-${skill.name}`}
                  className="border border-paper/10 bg-charcoal p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-forest-hover"
                >
                  <SkillIcon skill={skill} />
                  <h3 className="mt-8 font-playfair text-2xl font-semibold text-paper">{skill.name}</h3>
                </article>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
    </Page>
  );
}
