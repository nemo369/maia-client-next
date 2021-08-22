import { useState, useEffect } from 'react';
import StageOneResults from './StageOneResults';
import StageTwoResults from '../StageTwoResults';
import ProfileAPI from '../../../src/services/profile.service';
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
  const [stage1, setStage1] = useState(true);
  //   const [stage2, setStage2] = useState(false);
  //   const [stage3, setStage3] = useState(true);
  return <>{stage1 ? <StageOneResults stageData={stages} /> : <StageTwoResults />}</>;
};
export default StageResults;
