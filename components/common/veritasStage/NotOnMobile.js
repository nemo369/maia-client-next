import Logosvg from '../../svg/Logo';

const NotOnMobile = () => (
  <>
    <div className="fixed w-full h-screen bg-black/20 inset-0 z-10 messageWrapper--bg" />
    <div
      id="idmessage"
      className="w-[90vw] bg-[#fffcfc] h-[90vh] messageWrapper px-7 py-4 grid text-center  fixed  top-5 overflow-hidden align-bottom justify-items-center rounded right-0 left-0 mx-auto"
    >
      <Logosvg />
      <h1 className="text-[#FB9773] font-black text-[32px] leading-8 self-end pt-6">
        מצטערים אבל...
      </h1>
      <h2 className="text-lg font-semibold align-bottom pt-[10px]">
        כרגע מאיה פועלת רק מתצוגת מחשב.
      </h2>
      <p className="text-lg">
        {' '}
        כדי ליהנות ולקבל את המירב מהמסע שלכם במאיה אתם מוזמנים לחזור אלינו מאוחר יותר דרך המחשב
        ולשלוח לעצמכם את הלינק או לשמור את העמוד למועדפים
      </p>
      {/* <Button
        className="w-44 bg-gradient-to-r from-gradient-1 to-gradient-2 text-white hover:from-blue hover:to-blue font-bold mt-8"
        type="button"
        name="שליחת לינק"
      />
      <button type="button" className="text-xl text-gray-active pt-2">
        סגור
      </button> */}
    </div>
  </>
);
export default NotOnMobile;
