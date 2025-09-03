import SkillCard from "../components/SkillCard";

const Skills = () => {
  const listOfSkills = [
    {
      id: 0,
      skillSet: "Languange",
      desc: "TypeScript/JavaScript (NodeJS), Python, Bash/Shell, SQL",
      bot: false,
    },
    {
      id: 1,
      skillSet: "Cloud / DevOps Stuff",
      desc: "Amazon Web Service (AWS), Github, Containerization with Docker, CI / CD using Github Actions",
      bot: false,
    },
    {
      id: 2,
      skillSet: "Infrastructure as Code (IAC)",
      desc: "Terraform, AWS Cloud Development Kit (CDK)",
    },
    {
      id: 3,
      skillSet: "Dev Tools",
      desc: "Linux, Vim, Git, etc",
    },
  ];

  return (
    <section
      id="skills"
      className="py-8 md:py-14 border-b mx-auto flex flex-col"
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="mb-10 px-3 text-3xl md:text-3xl font-medium text-gray-900">
          Some of my Skills
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
