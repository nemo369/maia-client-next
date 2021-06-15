import router from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from '../../common/Loader';

const MailVerification = () => {
  const [num, seNum] = useState(' 0545-440-151 ');
  const [loader, setLoader] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const password = ['1', '2', '3', '4'];
  useEffect(() => {
    console.log(input4.length);
    const allInputs = document.querySelectorAll('.num-input');
    if (
      password[0] === input1 &&
      password[1] === input2 &&
      password[2] === input3 &&
      password[3] === input4
    ) {
      allInputs.forEach((element) => {
        element.style.backgroundColor = '#DBFFE6';
        element.style.backgroundColor = '#DBFFE6';
        element.style.color = '#90E4A3';
      });
      //   setLoader(true);
      //   router.push('/');
    }

    document.querySelectorAll('.num-input ').forEach((el) => {
      el.onkeyup = (e) => {
        if ('4' !== el.id && e.target.value) {
          el.nextElementSibling.focus();
        }
      };
    });
  }, [input1, input2, input3, input4]);

  return (
    <div>
      <div className="font-black text-2xl">התחברות</div>
      <div className="mb-11">
        אנא הזן/י את הקוד שקיבלת בהודעת SMS לטלפון שלך
        {num}
      </div>
      <div className="flex h-16 gap-x-7">
        <input
          type="text"
          onChange={(e) => {
            setInput1(e.target.value);
          }}
          maxLength="1"
          pattern="[0-9]"
          className="num-input max-w-[65px] text-[42px] leading-[49px] text-center text-yellow bg-white-active focus:outline-none rounded-md "
        />
        <input
          type="text"
          onChange={(e) => {
            setInput2(e.target.value);
          }}
          maxLength="1"
          className="num-input max-w-[65px] text-[42px] leading-[49px] text-center text-yellow bg-white-active focus:outline-none rounded-md "
        />
        <input
          type="text"
          onChange={(e) => {
            setInput3(e.target.value);
          }}
          maxLength="1"
          className="num-input max-w-[65px] text-[42px] leading-[49px] text-center text-yellow bg-white-active focus:outline-none rounded-md "
        />
        <input
          type="text"
          id="4"
          onChange={(e) => {
            setInput4(e.target.value);
          }}
          maxLength="1"
          className="num-input max-w-[65px] text-[42px] leading-[49px] text-center text-yellow bg-white-active focus:outline-none rounded-md "
        />
      </div>

      <Loader loading={loader} />
      {/* {popup && <p>{popup}</p>}
        {error ? (
          <div className="absolute top-3  right-auto left-2  font-bold  text-red-500 grid grid-flow-col items-center">
            מספר לא תקין, אנא נסה שוב
            <div className="w-5  leading-4 h-5 font-bold text-center mr-3 text-lg border-2 border-red-500  text-red-500 rounded-full inline-block">
              i
            </div>
          </div>
        ) : (
          ''
        )} */}
    </div>
  );
};

export default MailVerification;
