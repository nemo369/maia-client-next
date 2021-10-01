import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../src/context/state';
import { Case, Switch } from '../Switch';
import EducationCurrent from './EducationCurrent';
import Stage1middleTitles from './Stage1middleTitles';
import StageOneTop from './StageOneTop';
import StagesResultsWorkExperience from './StagesResultsWorkExperience';
import WhereToGo from './WhereToGo';
import StageOneBottom from './StageOneBottom';
import AutoBiographyChartResults from './AutoBiographyChartResults';
import Bars from '../../charts/Bars';
// import MessageMedal from '../../profile/register_form/MessageMedal';

const worksConsts = [
  'שירות צבאי',
  'שירות אזרחי לאומי',
  'שנת שירות',
  'מכינה קדם צבאית',
  'עבודות נוער',
  'עבודות כבוגר',
  'לא רלוונטי',
];
const eductionsConsts = [
  'השכלה תיכונית',
  'בגרות אקסטרנית',
  'ישיבה קטנה/סמינר תיכוני',
  'ישיבה גדולה',
  'סמינר',
  'תעודת גמר / מקצוע',
  'טכנאי/ת',
  'הנדסאי/ת',
  'תואר ראשון',
  'תואר שני',
  'תואר שלישי',
];

const Autobiography = (props) => {
  const { stageData } = props;
  const { profile } = useContext(AppContext);
  const autobiographyData = profile?.vendor_profile;
  console.log(autobiographyData);
  console.log('autobiographyData');
  const [biographys, setBiographys] = useState({
    works: [],
    eductions: [],
    toGos: [],
  });
  useEffect(() => {
    if (!profile || !profile.vendor_profile || !profile.vendor_profile_test) {
      return;
    }

    const works = [];
    const eductions = [];
    profile.vendor_profile_test.forEach((test) => {
      if (worksConsts.includes(test.categoryName)) {
        works.push(test);
      }
      if (eductionsConsts.includes(test.categoryName)) {
        eductions.push(test);
      }
    });
    setBiographys({
      works,
      eductions,
      toGos: autobiographyData?.aspiration.split(','),
    });
  }, [profile]);

  const [selected, setSelected] = useState('work-exprerience');
  const medal = autobiographyData?.warrior;

  const [jobActive, setJobActive] = useState(true);
  const [eductionActive, setEductionActive] = useState(false);
  const [goActive, setGoActive] = useState(false);

  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  const titleCheck = (e) => {
    if ('work-exprerience' === e.target.value) {
      setJobActive(true);
      setEductionActive(false);
      setGoActive(false);
    }
    if ('current-education' === e.target.value) {
      setEductionActive(true);
      setJobActive(false);
      setGoActive(false);
    }
    if ('where-to-go' === e.target.value) {
      setGoActive(true);
      setJobActive(false);
      setEductionActive(false);
    }
  };

  const changeSelectedType = (e) => {
    setSelected(e.target.value);
    titleCheck(e);
  };

  return (
    <div className="stage1-wrapper grid">
      <StageOneTop close={close} stageData={stageData} autobiographyData={autobiographyData} />

      <hr className="dashed-stages my-5 h-[2px]" />

      <div className="stage1-middle-wrapper flex justify-around gap-x-[104px]">
        <Stage1middleTitles
          jobActive={jobActive}
          eductionActive={eductionActive}
          goActive={goActive}
          changeType={changeSelectedType}
        />
        {/* <MessageMedal /> */}

        <div className="grid pt-[30px] gap-y-8  w-full pl-10">
          <Switch test={selected}>
            <Case value="work-exprerience">
              <StagesResultsWorkExperience
                medal={medal}
                profileData={profile}
                autobiographyData={biographys.works}
                stageData={stageData?.stage1?.middle?.workWExperience}
              />
            </Case>

            <Case value="current-education">
              <EducationCurrent
                profileData={profile}
                stageData={stageData?.stage1?.middle?.currentEducation}
                autobiographyData={biographys.eductions}
              />
            </Case>

            <Case value="where-to-go">
              <WhereToGo
                profileData={profile}
                stageData={stageData?.stage1?.middle?.whereIWantToGo}
                autobiographyData={biographys.toGos}
              />
            </Case>
          </Switch>
        </div>
      </div>

      <div className="w-full flex justify-between pt-9 pb-10 pr-28">
        <AutoBiographyChartResults autobiographyData={autobiographyData} />
        <div className="w-[200px] h-[200px]">
          <StageOneBottom userProfileResults={profile.vendor_profile.userProfileResults} />
        </div>
      </div>
      <div className="w">
        <Bars width={150} height={200} />
      </div>
    </div>
  );
};

export default Autobiography;
