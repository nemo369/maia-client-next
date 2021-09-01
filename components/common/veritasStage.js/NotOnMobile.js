import { useEffect, useState } from 'react';

const NotOnMobile = () => {
  const [mobileCheck, setMobileCheck] = useState('');
  const [width, setWidth] = useState(false);
  useEffect(() => {
    setWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    console.log(width);
    console.log('דישלן');
    if (700 > width) {
      console.log('smaler then 700px');
    } else {
      console.log('bigger then 700px');
    }
    console.log('Window width', window.screen.width);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      // true for mobile device
      console.log('mobile device');
      setMobileCheck(true);
      // document.write('mobile device');
    } else {
      // false for not mobile device
      console.log('not mobile device');
      setMobileCheck(false);
      // document.write('not mobile device');
    }
  }, [width]);

  console.log(width);

  return (
    <div
      className={`w-[360px] h-[380px] bg-red messageWrapper px-7 py-4 
      ${mobileCheck ? 'grid' : 'hidden'} absolute right-[21%] top-28 overflow-hidden`}
    >
      {/* <div className="messageWrapper px-7 py-4"> */}

      {/* </div> */}
      <img src="/images/powerplant.svg" alt="" />
      <h1 className="text-[#FB9773] font-black text-[32px] leading-8">מצטערים אבל...</h1>
      <h2 className="text-lg font-medium">כרגע מאיה פועלת רק מתצוגת מחשב.</h2>
      <p className="text-lg">
        {' '}
        כדי ליהנות ולקבל את המירב מהמסע שלכם במאיה אתם מוזמנים לחזור אלינו מאוחר יותר דרך המחשב
        ולשלוח לעצמכם את הלינק או לשמור את העמוד למועדפים
      </p>
    </div>
  );
};
export default NotOnMobile;
