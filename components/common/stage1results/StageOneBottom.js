import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { getChartColors } from '../../../src/utils/consts';

const StageOneBottom = ({ userProfileResults }) => {
  const [datasets, setDatasets] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    console.log(userProfileResults);
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

  //   var datad = [{
  //     value: 30,
  //     color: "#F7464A"
  // }, {
  //     value: 50,
  //     color: "#E2EAE9"
  // }, {
  //     value: 100,
  //     color: "#D4CCC5"
  // }, {
  //     value: 40,
  //     color: "#949FB1"
  // }, {
  //     value: 120,
  //     color: "#4D5360"
  // }];
  //////////////////////////////////////////////////////////////////////

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
