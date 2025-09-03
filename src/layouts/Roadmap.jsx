import aim from "../assets/icons/aim-icons8.png";
import ansible from "../assets/icons/ansible-icons8.png";
import more from "../assets/icons/more-icons8.png";
import go from "../assets/icons/golang-icons8.png";
import kube from "../assets/icons/kubernetes-icons8.png";
import LazyCard from "../components/LazyCard";
/*
  * Self note:
  - The default icons size is 64x64 px
  - icons by icons8
*/

const Roadmap = () => {
  const currentLearning = [
    {
      id: 0,
      url: "https://go.dev/",
      img: go,
      skill: "Go",
      desc: 'Is <code class="p-1 bg-gray-50 rounded-md shadow-sm border border-gray-200 ">Interface {}</code> type safety?',
    },
    {
      id: 1,
      url: "https://www.ansible.com/",
      img: ansible,
      skill: "Ansible",
      desc: 'Automation tool, build Infrastructure as Code <i class="font-medium">(IaC)</i>',
    },
    {
      id: 2,
      url: "https://kubernetes.io/",
      img: kube,
      skill: "Kubernetes",
      desc: "Tried to deploy a 'Hello World' app, and now I'm the proud author of a 700-line YAML file.",
    },
    {
      id: 3,
      url: "#404myAimNotFound",
      img: aim,
      skill: "Aim at FPS Games",
      desc: "I'm sucks at fps games like CS2, Valorant, etc",
    },
    {
      id: 4,
      img: more,
      skill: "Many More",
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
          {currentLearning.map((data) => {
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
