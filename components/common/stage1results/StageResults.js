import { useState, useEffect } from 'react';
import Autobiography from './Autobiography';
import ProfileAPI from '../../../src/services/profile.service';
import CompletionIAmpro from '../CompletionIAmpro';
// import StageThreeResults from './StageThreeResults';

const StageResults = () => {
  const [stages, setStages] = useState('');
  useEffect(() => {
    const getStages = async () => {
      const { data: stagesdata } = await ProfileAPI.stages();
      console.log(stagesdata);
      setStages(stagesdata);
    };
    getStages();
  }, []);
  console.log(stages);
  // const [stage1, setStage1] = useState(true);
  const stage1 = true;
  //   const [stage2, setStage2] = useState(false);
  //   const [stage3, setStage3] = useState(true);
  return <>{stage1 ? <Autobiography stageData={stages} /> : <CompletionIAmpro />}</>;
};
export default StageResults;
