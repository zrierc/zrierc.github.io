import aim from '../assets/icons/aim-icons8.png';
import ansible from '../assets/icons/ansible-icons8.png';
import bash from '../assets/icons/bash-icons8.png';
import docker from '../assets/icons/docker-icons8.png';
import jenkins from '../assets/icons/jenkins-icons8.png';
import more from '../assets/icons/more-icons8.png';
import node from '../assets/icons/nodejs-icons8.png';
import LazyCard from '../components/LazyCard';
/*
  * Self note:
  - The default icons size is 64x64 px
  - icons by icons8
*/

const Roadmap = () => {
  const currentLearning = [
    {
      id: 0,
      url: 'https://nodejs.org/',
      img: node,
      skill: 'JavaScript/NodeJS',
      desc: 'Still wondering why <a href="https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values"          target="_blank" rel="noopener noreferrer"><code class="p-1 bg-gray-50 rounded-md shadow-sm border border-gray-200 ">NaN === NaN</code> <span class="underline">equals <code>false</code></span></a>',
    },
    {
      id: 1,
      url: 'https://www.ansible.com/',
      img: ansible,
      skill: 'Ansible',
      desc: 'Automation tool, build Infrastructure as Code <i class="font-medium">(IaC)</i>',
    },
    {
      id: 2,
      url: 'https://www.gnu.org/software/bash/',
      img: bash,
      skill: 'Bash Script',
      desc: null,
    },
    {
      id: 3,
      url: 'https://www.jenkins.io/',
      img: jenkins,
      skill: 'Jenkins',
      desc: 'CI / CD Pipelines',
    },
    {
      id: 4,
      url: 'https://www.docker.com/',
      img: docker,
      skill: 'Docker',
      desc: 'Containerizing app(s)',
    },
    {
      id: 5,
      url: '#404myAimNotFound',
      img: aim,
      skill: 'Aim at FPS Games',
      desc: "I'm sucks at common fps games like Apex Legends, Valorant, etc",
    },
    {
      id: 6,
      img: more,
      skill: 'Many More',
      desc: "There's always more to learn...",
    },
  ];

  return (
    <section
      id="learningPath"
      className="py-8 md:py-14 border-b mx-auto flex flex-col"
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="mb-10 px-3 text-3xl md:text-3xl font-medium text-gray-900">
          Currently mess around with..
        </h2>
        <div className="max-w-screen-lg flex flex-row flex-wrap justify-evenly">
          {/* Card */}
          {currentLearning.map(data => {
            return (
              <LazyCard
                key={data.id}
                url={data.url}
                img={data.img}
                skill={data.skill}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;







