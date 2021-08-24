import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FinisthStepAutobiogrpahy from '../popups/FinisthStepAutobiogrpahy';
import FinisthStepIamPro from '../popups/FinisthStepIamPro';

function TestPopups() {
  const { pathname, push, query } = useRouter();
  const [finisthStepIamPro, setFinisthStepIamPro] = useState(false);
  const [finisthAutoBiogrphy, setfinisthAutoBiogrphy] = useState(false);

  useEffect(() => {
    console.log(query);
    if ('iampro' === query?.testDone) {
      setFinisthStepIamPro(true);
    }
    if ('autoBiography' === query?.testDone) {
      setfinisthAutoBiogrphy(true);
    }
    if (query?.testDone) {
      delete query.testDone;
      push(
        {
          pathname,
          query,
        },
        undefined,
        { shallow: true }
      );
    }
  }, [query]);
  return (
    <>
      {finisthStepIamPro && <FinisthStepIamPro />}
      {finisthAutoBiogrphy && <FinisthStepAutobiogrpahy />}
    </>
  );
}

export default TestPopups;
