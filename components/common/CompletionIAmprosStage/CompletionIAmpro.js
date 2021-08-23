import Stage2Top from './stage2Top';

const CompletionIAmpro = (props) => {
  const { stageData } = props;
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  // const test = 'test';
  return (
    <div className="stage1-wrapper grid">
      <Stage2Top close={close} stageData={stageData} />

      <hr className="dashed-stages my-5 h-[2px]" />

      <div className="stage1-middle-wrapper flex justify-around gap-x-[104px]">
        <div className="grid pt-[30px] gap-y-8" />
      </div>

      <div className="stage1-bottom-wrapper">
        <h1>data</h1>
        <br />
        <h1>more data</h1>
      </div>
    </div>
  );
};

export default CompletionIAmpro;
