import { useState, useEffect } from 'react';
import Autobiography from './Autobiography';
import ProfileAPI from '../../../src/services/profile.service';
import CompletionIAmpro from '../CompletionIAmprosStage/CompletionIAmpro';
import Veretas from '../veritasStage.js/Veretas';

// import StageThreeResults from '../StageThreeResults';

const StageResults = ({ testType }) => {
  const [stages, setStages] = useState('');
  useEffect(() => {
    const getStages = async () => {
      const { data: stagesdata } = await ProfileAPI.stages();
      setStages(stagesdata);
    };
    getStages();
  }, []);
  // const [stage1, setStage1] = useState(true);
  const stage1 = true;
  //   const [stage2, setStage2] = useState(false);
  //   const [stage3, setStage3] = useState(true);
  return (
    <>
      {'Autobiography' === testType && <Autobiography stageData={stages} />}
      {'CompletionIAmpro' === testType && <CompletionIAmpro stageData={stages} />}
      {'Veritas' === testType && <Veretas stageData={stages} />}
    </>
  );
};
export default StageResults;
