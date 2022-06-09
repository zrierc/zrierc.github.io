import Card from '../components/Card';

const Projects = () => {
  return (
    <section
      id="projcts"
      className="py-8 md:py-14 border-b mx-auto flex justify-center items-center flex-col"
    >
      <h2 className="mb-10 text-3xl md:text-4xl font-medium text-gray-900 text-center">
        Recent Projects
      </h2>

      <div className="md:columns-2 gap-5 max-w-screen-lg">
        {/* Card */}
        <Card />
        <Card
          img={
            'https://images.unsplash.com/photo-1654509123531-ab2e692f1095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
        />
        <Card
          img={
            'https://images.unsplash.com/photo-1654509123531-ab2e692f1095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
        />
        <Card />
      </div>
    </section>
  );
};

export default Projects;

