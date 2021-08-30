// import { getChartColors } from '../../../src/utils/consts';

import { getChartColors } from '../../../src/utils/consts';

const AutoBiographyChartResults = (props) => {
  const { autobiographyData } = props;
  console.log(autobiographyData);
  const colorCheck = (id) => {
    const color = getChartColors(id);
    return <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />;
  };

  const results = autobiographyData?.userProfileResults.map((result) => (
    <div className="grid autobiograph-chart-wrapper gap-y-1">
      <div className="flex">
        {colorCheck(result.code)}
        <h3 className="font-black text-lg leading-5 text-[#020230] pr-[10px]">חברתיים</h3>
      </div>
      {/* <div> */}
      <p className="text-sm text-[#333333] pr-[17px]">{result.name}</p>
      {/* </div> */}
      <p className="text-sm text-[#333333] pr-[17px] max-w-[141px]">
        עבודה עם אנשים, יכולתחינוכית וחברתית
      </p>
    </div>
  ));
  return <div className="grid grid-cols-3 w-full gap-y-4">{results}</div>;
};

export default AutoBiographyChartResults;
