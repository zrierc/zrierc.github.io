const Card = ({ img }) => {
  return (
    <div
      className={`break-inside-avoid m-5 md:my-5 md:mx-2 max-w-sm bg-white rounded-sm border border-gray-200 shadow-xs`}
    >
      <a href="#a">
        <img className="rounded-t-sm" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#a">
          <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-600">
            Title goes
            here&nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;&nbsp;Project Type
          </h5>
        </a>
        <p className="mb-3 font-medium text-base text-gray-900">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#a"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center hover:underline active:underline decoration-1 underline-offset-3 decoration-gray-900"
        >
          <span className="after:content-['_→']">Read more</span>
        </a>
      </div>
    </div>
  );
};

export default Card;

