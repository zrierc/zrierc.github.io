import TypeAnimation from 'react-type-animation';

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="py-16 md:py-32 border-b mx-auto flex justify-center items-center flex-col"
    >
      <TypeAnimation
        cursor={true}
        sequence={[
          "> I'm human",
          800,
          "> I'm nerd",
          800,
          "> I'm dev",
          800,
          "> I'm nothing",
          800,
          "> I'm weeb",
          800,
          "> I'm tech enthusiast",
          800,
          "> I'm dreamer",
          800,
          "> I'm zrie",
        ]}
        wrapper="h2"
        className="py-3 px-1 md:px-3 my-3 bg-gray-900 shadow-sm shadow-gray-900 font-mono text-5xl md:text-7xl text-green-500 rounded"
      />

      <h3 className="py-5 flex flex-col text-4xl md:text-5xl font-medium text-gray-900 text-center">
        <span className="italic font-light text-lg">also known as</span>
        <h3>Muhammad Fajri</h3>
      </h3>

      <p className="py-5 md:py-10 px-1 lg:px-0 max-w-screen-md text-gray-600 italic text-xl text-center">
        Self proclaim junior Cloud Engineer / DevOps Engineer / SR-Engineer.
        Interest in Computer and Tech. I'm still beta mode after all.
      </p>
    </section>
  );
};

export default Introduction;

