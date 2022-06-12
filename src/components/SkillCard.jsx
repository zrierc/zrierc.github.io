const SkillCard = ({ skillSet, desc, bot = true }) => {
  return (
    <div
      className={`${
        bot ? '' : 'border-t-2'
      } py-5 px-1 rounded-sm border-b-2 border-gray-300 shadow-xs`}
    >
      <h5 className="pb-2 text-lg font-medium tracking-tight text-gray-900">
        {skillSet}
      </h5>

      <p className="text-base font-normal text-gray-600 ">{desc}</p>
    </div>
  );
};

export default SkillCard;

