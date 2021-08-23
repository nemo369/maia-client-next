import Button from '../Button';

const stage2Top = ({ stageData, close }) => (
  <>
    <div className="stage-top-wrapper flex justify-between">
      <button className="self-start" type="button" onClick={close}>
        x
      </button>
      <div className="grid justify-center">
        <h1 className="text-3xl font-bold text-center text-[#333333]">דוח תוצאות</h1>
        <h2 className="text-3xl text-[#333333]">{stageData?.stage1?.top.title}</h2>
      </div>
      <Button className="w-24" type="button" status="main" name="עריכה" />
    </div>

    <div className="text-center py-8 bg-[#F5F5F5] mt-7 mx-8">
      <p className="text-xl text-[#393939] font-semibold">{stageData?.stage1?.top.firstText1}</p>
      <p className="text-xl text-[#393939]">
        {stageData?.stage1?.top.firstText2}
        שלך
      </p>
    </div>

    <div className="text-center py-8 px-[113px]">
      <p className="text-xl text-[#393939]">{stageData?.stage1?.top.secondText}</p>
    </div>
  </>
);
export default stage2Top;
