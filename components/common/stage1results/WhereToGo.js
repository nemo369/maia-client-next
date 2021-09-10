/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */

const WhereToGo = (props) => {
  const { autobiographyData } = props;
  // eslint-disable-next-line operator-linebreak
  const workExp = autobiographyData.map((aspiriation) => (
    <div className="flex border-b-2 pb-4 gap-y-[30px]">
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-xl text-[#474747] max-w-[425px]">{aspiriation}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-[#F5F5F5] grid py-[30px] px-5 gap-y-7 max-h-[427px] overflow-auto">
      {workExp}
    </div>
  );
};
export default WhereToGo;
