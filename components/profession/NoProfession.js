import GrayHat from '../svg/GrayHat';

export default function NoProfession() {
  return (
    <div className="flex flex-col justify-center min-h-[30vh]">
      <div className="flex justify-center mb-3">
        <GrayHat />
      </div>
      <h3 className="text-3xl text-black/20 text-center font-bold">
        לא נמצאו מקצועות
        <br />
      </h3>
    </div>
  );
}
