import { useState, useEffect } from 'react';
import Autobiography from './Autobiography';
import ProfileAPI from '../../../src/services/profile.service';
import CompletionIAmpro from '../CompletionIAmprosStage/CompletionIAmpro';
import Veretas from '../veritasStage.js/Veretas';

const StageResults = ({ testType }) => {
  const [stages, setStages] = useState('');
  useEffect(() => {
    const getStages = async () => {
      const { data: stagesdata } = await ProfileAPI.stages();
      setStages(stagesdata);
    };
    getStages();
  }, []);

  return (
    <>
      {'Autobiography' === testType && <Autobiography stageData={stages} />}
      {'IAmpro' === testType && <CompletionIAmpro stageData={stages?.completionIAmpro} />}
      {'Veretas' === testType && <Veretas stageData={stages} />}
    </>
  );
};
export default StageResults;
