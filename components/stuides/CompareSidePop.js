import { useState } from 'react';
// import useFormStudy from '../../../src/hooks/useFormStudy';
import useFormStudyInner from '../../src/hooks/useFormStudyInner';
import CompareListOfAllStudies from './CompareListOfAllStudies';
import CompareStudiesResult from './CompareStudiesResult';

const CompareSidePop = ({ setOpen, comparedCategorys, studies }) => {
  // console.log(studies);
  // console.log(comparedCategorys);
  const [compare, setCompare] = useState(false);
  const [studiesToCompare, setStudiesToCompare] = useState([]);
  const { inputs, handleChange } = useFormStudyInner({
    categories: [],
  });
  const handleCompare = () => {
    const filtered = studies.filter((study) => inputs.categories.includes(study.id));
    setStudiesToCompare(filtered);
    setCompare(true);
  };

  return (
    <>
      {compare ? (
        <CompareStudiesResult
          setOpen={setOpen}
          setCompare={setCompare}
          studies={studiesToCompare}
        />
      ) : (
        <CompareListOfAllStudies
          inputs={inputs}
          handleChange={handleChange}
          handleCompare={handleCompare}
          setOpen={setOpen}
          comparedCategorys={comparedCategorys}
          studies={studies}
        />
      )}
    </>
  );
};
export default CompareSidePop;
