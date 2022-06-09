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
          "> I'm Human",
          800,
          "> I'm Nerd",
          800,
          "> I'm Observer",
          800,
          "> I'm Dev",
          800,
          "> I'm Nothing",
          800,
          "> I'm Weeb",
          800,
          "> I'm Gamer",
          800,
          "> I'm Dreamer",
          800,
          "> I'm zrie",
        ]}
        wrapper="h1"
        className="py-3 px-1 md:px-3 my-3 bg-gray-900 shadow-sm shadow-gray-900 font-mono text-5xl md:text-7xl text-green-500 rounded"
      />

      <h1 className="py-5 flex flex-col text-4xl md:text-5xl font-medium text-gray-900 text-center">
        <span className="italic font-light text-lg">also known as</span>
        Muhammad Fajri
      </h1>

      <h3 className="py-5 md:py-10 px-1 lg:px-0 max-w-screen-md text-gray-600 italic text-xl text-center">
        Student with backgound Computer Engineering who loves to learn and
        explore something new. Familiriaze myself with Cloud Computing / DevOps.
        I called myself as 'someone who in beta mode'.
        <MarkupHTML
          text={`
          I put my effort to develop and maintain blazing-fast, secure and high optimized the Environtments
          <br />
          P.S yes I always try to do everything that I tell before, but idk I can't show it. At least not yet, not this time. cuz I'm still beta mode after all.
            `}
        />
      </h3>
    </section>
  );
};

function MarkupHTML({ text }) {
  return (
    <div
      className="no-one-can-see-me nothing-suspecious-here"
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

export default Introduction;





















































































