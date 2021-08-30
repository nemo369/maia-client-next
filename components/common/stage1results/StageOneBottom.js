import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getChartColors } from '../../../src/utils/util';

const StageOneBottom = ({ userProfileResults }) => {
  const [datasets, setDatasets] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const newdatasets = { data: [], backgroundColor: [] };
    const newLables = [];
    userProfileResults.forEach((data) => {
      newLables.push(data.name);
      newdatasets.data.push(data.value * 100);
      newdatasets.backgroundColor.push(getChartColors(data.code));
    });
    setLabels(newLables);
    setDatasets([newdatasets]);
  }, [userProfileResults]);

  return (
    <Doughnut
      data={{
        labels,
        datasets,
      }}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      }}
    />
  );
};
export default StageOneBottom;
