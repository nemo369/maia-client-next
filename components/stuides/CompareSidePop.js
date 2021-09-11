import { useState } from 'react';
import useFormStudyInner from '../../src/hooks/useFormStudyInner';
import Loader from '../common/Loader';
import CompareListOfAllStudies from './CompareListOfAllStudies';
import CompareStudiesResult from './CompareStudiesResult';

const CompareSidePop = ({ setOpen, comparedCategorys, studies, loading }) => {
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
      {loading && (
        <div className="h-full w-full flex items-center justify-center">
          <Loader loading={loading} />
        </div>
      )}
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
