/* eslint-disable prettier/prettier */
// import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import PopUp from '../common/PopUp';
import Check from '../common/Check';
import Tooltip from '../common/Tooltip';
import useForm from '../../src/hooks/useForm';
import Infoservice from '../../src/services/info.service';
import FormSend from './FormSend';

const ForMoreInfo = () => {

  const tooltipSendedJobs = `<p>
    מקדם תעסוקתי ילווה אותך בתהליכי קבלת ההחלטות לבניית מסלול אישי לקרייה שלך וללא עלות.
  </p>
  <p style="color:#41C2C4; margin-top: 2px">מה בתאכלס מקדם התעסוקה יראה?</p>
  <p>
    1. את פרטי ההרשמה שלך (דרכם הוא גם יצור קשר איתך) 2. את הדוחות המסכמים שעלו מתוך האבחון
    שתעבור 
  </p>`;

  const [formSend, setFormSend] = useState(false);

  const { inputs, handleChange } = useForm({
    fullName: '',
    email: '',
    check: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await Infoservice.contactUs(inputs);
    if (200 !== status) {
      setError(data);
    }
    if (data?.token) {
      resetForm();
      router.push('/'); // TODO: navigate to last page
    }
  };

  const submitForm = () => {
    setFormSend(true);
  };

  return (
    <>
      {formSend
        ? <FormSend />
        : (
          <PopUp defaultOpen>
            <div className="flex flex-col items-center justify-center py-4 px-10">
              <h2 className="text-center text-3xl font-bold text-gray-mid">נשארתם עם שאלה לא פתורה?</h2>
              <h2 className="text-center text-3xl font-medium text-gray-mid">מקדמי התעסוקה והלימודים ישמחו לסייע לכם.</h2>
              <div className="text-[22px] text-[#999999] text-center leading-6 mt-6">
                תהליך ליווי אישי עם מקדמי תעסוקה ו/או לימודים יכול לעשות
                <br />
                לכם סדר בדברים, לסייע לכם למקד את השאלות ולהגיע
                <br />
                למסקנות ממוקדות ומעשיות בבחירת מסלול לימודים ו/או
                <br />
                מקצוע לחיים
              </div>
              <div>
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="text-gray-mid text-center text-[25px] font-bold my-[25px]">לפרטים נוספים צור קשר עם היועץ:</div>
                  <fieldset>
                    <div className="flex">
                      <input
                        name="fullName"
                        placeholder="שם מלא *"
                        className="w-[200px] h-[50px] rounded outline-none text-lg p-5 focus:ring-2  bg-gray-disabled focus:ring-blue-active"
                        value={inputs.fullName}
                        onChange={handleChange}
                      />
                      <input
                        name="email"
                        type="email"
                        value={inputs.email}
                        onChange={handleChange}
                        placeholder="מייל *"
                        className="w-[200px] h-[50px] mr-[6px] rounded outline-none text-lg p-5 focus:ring-2  bg-gray-disabled focus:ring-blue-active"
                      />
                      <button
                        className="h-[50px] w-[190px] mr-[7px] rounded-xl text-lg focus:outline-none bg-orange text-white active:bg-orange-active hover:bg-orange-active font-bold"
                        type="submit"
                        onClick={submitForm}
                      >
                        שלח
                      </button>
                    </div>
                    <div className="flex mt-[15px] mr-[6px]">
                      <Check
                        name="check"
                        className="ml-[10px]"
                        content="אני מאשר/ת ליועץ לצפות בפרטים שלי"
                        handleChange={handleChange}
                      />
                      <Tooltip
                        trigger={
                          <div className="relative smallpop mt-1 w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                            ?
                          </div>
                        }
                      >
                        <div dangerouslySetInnerHTML={{ __html: tooltipSendedJobs }} />
                      </Tooltip>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </PopUp>
        )}
    </>
  );
};

export default ForMoreInfo;
