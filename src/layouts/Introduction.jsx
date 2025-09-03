import TypeAnimation from "react-type-animation";

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
          "> I'm Weeb",
          800,
          "> I'm Observer",
          800,
          "> I'm Dev",
          800,
          "> I'm Experimentalist",
          800,
          "> I'm Gamer",
          800,
          "> I'm Geek",
          800,
          "> I'm Dreamer",
          800,
          "> I'm Nothing",
          800,
          "> I'm zrie",
        ]}
        wrapper="h1"
        className="py-3 px-1 md:px-3 my-3 bg-gray-900 shadow-sm shadow-gray-900 font-mono text-4xl md:text-7xl text-green-terminal rounded"
      />

      <h1 className="py-5 flex flex-col text-3xl md:text-5xl font-medium text-gray-900 text-center">
        <span className="italic font-light text-lg">also known as</span>
        Muhammad Fajri
        {/* {M̸̰͍̗̘̄̾̀̾u̶̡̙̓h̵̭͓̮̝̻̊͝ä̴̫͓̖̜͇́̈̒m̸͕͖̤͊͝m̶͇̭͆̔͜͠ą̵͎̲̥́̆̓́ḑ̵̦̘͛͘ ̶̧͓̬͉͍͗̍́͠F̷̢͉͘a̴͕̅̑̾j̵̧̛̦̃̑̆̑r̵̦̋͂i̷͎͍̾̌} */}
      </h1>

      <h3 className="py-5 md:py-10 px-1 lg:px-0 max-w-screen-md text-gray-600 italic text-lg md:text-xl text-center">
        (Cloud) Infrastructure Engineer / DevOps with 1y+ experience.
        <br /> Spend most of my time in the sandbox and dev environment doing
        research and learning new things.
        <MarkupHTML text={`nice one.`} />
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
