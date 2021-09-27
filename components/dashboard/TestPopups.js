import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FinisthStepAutobiogrpahy from '../popups/FinisthStepAutobiogrpahy';
import FinisthStepIamPro from '../popups/FinisthStepIamPro';
import FinisthStepVeritas from '../popups/FinisthStepVeritas';

function TestPopups() {
  const { pathname, push, query } = useRouter();
  const [finisthStepIamPro, setFinisthStepIamPro] = useState(false);
  const [finisthAutoBiogrphy, setfinisthAutoBiogrphy] = useState(false);
  const [finisthVeritas, setFinisthVeritas] = useState(false);

  useEffect(() => {
    if ('iampro' === query?.testDone) {
      setFinisthStepIamPro(true);
    }
    if ('autoBiography' === query?.testDone) {
      setfinisthAutoBiogrphy(true);
    }
    if ('veritas' === query?.testDone) {
      setFinisthVeritas(true);
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
  if ('undefined' === typeof window) return null;
  return (
    <>
      {finisthAutoBiogrphy && <FinisthStepAutobiogrpahy close={setfinisthAutoBiogrphy} />}
      {finisthStepIamPro && <FinisthStepIamPro close={setFinisthStepIamPro} />}
      {finisthVeritas && <FinisthStepVeritas close={setFinisthVeritas} />}
    </>
  );
}

export default TestPopups;
