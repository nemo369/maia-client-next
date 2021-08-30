/* eslint-disable react/no-unescaped-entities */
import Button from '../Button';

const stage2Top = ({ iamproData, close }) => (
  <>
    <div className="stage-top-wrapper flex justify-between">
      <button className="self-start" type="button" onClick={close}>
        x
      </button>
      <div className="grid justify-center">
        <h1 className="text-3xl font-bold text-center text-[#333333]">דוח תוצאות</h1>
        <h2 className="text-3xl text-[#333333]">"מה מעניין אותי"</h2>
      </div>
      <Button className="w-24" type="button" status="main" name="עריכה" />
    </div>

    <div className="text-center py-8 bg-[#F5F5F5] mt-7 mx-8 px-5">
      <p className="text-xl text-[#393939] ">{iamproData?.shortProfileText}</p>
    </div>

    <div className="text-center py-8 px-[113px]">
      <p className="text-xl text-[#393939]">{iamproData?.shortEnviormentText}</p>
    </div>
  </>
);
export default stage2Top;
