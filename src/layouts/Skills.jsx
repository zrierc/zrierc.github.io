import SkillCard from '../components/SkillCard';

const Skills = () => {
  const listOfSkills = [
    {
      id: 0,
      skillSet: 'Programming',
      desc: 'Javascript and Bash Script, sometimes using NodeJS and React',
      bot: false,
    },
    {
      id: 1,
      skillSet: 'Public Cloud',
      desc: 'Experience in Amazon Web Services (AWS) and little bit Google Cloud Platform',
      bot: false,
    },
    {
      id: 2,
      skillSet: 'Other',
      desc: 'SQL, Docker, Git, RESTful API',
    },
    {
      id: 3,
      skillSet: 'TBA',
      desc: 'TBA',
    },
  ];

  return (
    <section
      id="skills"
      className="py-8 md:py-14 border-b mx-auto flex flex-col"
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="mb-10 px-3 text-3xl md:text-3xl font-medium text-gray-900">
          I'm familiar with..
        </h2>

        <div className="max-w-screen-lg grid md:grid-cols-2 gap-x-5">
          {/* Skill set */}
          {listOfSkills.map((data, index) => {
            // * Logic for remove duplicate border in mobile screen
            if (index % 2 && window.screen.width <= 640) {
              data.bot = true;
            }

            return (
              <SkillCard
                key={data.id}
                skillSet={data.skillSet}
                desc={data.desc}
                bot={data.bot}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;


