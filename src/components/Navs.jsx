const Navs = () => {
  return (
    <header className="flex py-5 px-10 bg-gray-50 flex-row-reverse text-gray-900">
      <a
        href="#lorem"
        className="flex text-lg flex-row justify-center items-center capitalize hover:underline active:underline decoration-1.5 underline-offset-3 decoration-gray-900"
      >
        <span className="px-0.5 after:content-['_↗']">Contact</span>
      </a>
    </header>
  );
};

export default Navs;

