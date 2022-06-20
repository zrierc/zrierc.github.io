const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-200">
      <div className="py-8 px-2 max-w-screen-lg lg:w-2/3 lg:mx-auto">
        <h3 className="px-1 mb-3 md:mb-5 text-2xl font-base text-gray-700">
          Get in touch
        </h3>

        <h2 className="mb-4 px-1 text-3xl md:text-4xl font-medium text-gray-900">
          <a
            className="after:content-['_↗'] hover:underline active:underline hover:transition hover:ease-in"
            href="mailto:info@zrie.me"
          >
            info@zrie.me
          </a>
        </h2>

        <h4 className="mb-2 px-1 md:text-lg text-base text-gray-600 md:max-w-lg">
          Find me in another digital realm
        </h4>

        <div className=" px-1 flex flex-row text-lg md:text-2xl font-medium text-gray-900">
          <a
            className="mr-2 after:content-['_↗'] hover:underline"
            href="https://github.com/zrierc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="mx-2 after:content-['_↗'] hover:underline"
            href="https://twitter.com/zrierc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="mx-2 after:content-['_↗'] hover:underline"
            href="https://zrie.me"
          >
            Website
          </a>
        </div>
      </div>

      <div className="py-5 text-gray-900">
        <p className="text-center">
          Made with 🤍 by zrie. Cool icons by{' '}
          <a
            className="underline"
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


























