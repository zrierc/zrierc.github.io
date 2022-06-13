const LazyCard = ({ url, img, skill, desc }) => {
  return (
    <div
      className={`m-2 md:my-5 px-3 w-56 bg-white rounded-sm border border-gray-200 shadow-xs`}
    >
      <a href={url}>
        <img
          className="rounded-t-sm w-30 md:h-auto m-auto py-5"
          src={img}
          alt="logo"
        />
      </a>
      <h5 className="mt-2 text-lg font-semibold text-center text-gray-900">
        {skill}
      </h5>
      {desc && (
        <p
          className="text-gray-600 p-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: `${desc}` }}
        />
      )}
    </div>
  );
};

export default LazyCard;

