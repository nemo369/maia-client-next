/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import JustHeart from './JustHeart';

export default function CategoryWithHeart({
  className,
  company,
  value,
  description,
  isButton,
  type,
  id,
}) {
  const handleDragStart = (e) => e.preventDefault();
  const { t } = useTranslation('common');
  if (!id) return null;
  return (
    <div
      onDragStart={handleDragStart}
      tabIndex="0"
      role="tab"
      className={`${className} bg-white heart shadow-sm rounded-2xl border-[1px] border-[rgba(151,151,151,0.13)]
      px-4 py-5 flex flex-col justify-between`}
    >
      <div className="flex justify-between h-5">
        <h5 className=" text-gray-active text-[18px] text-right truncate">{company}</h5>
        <JustHeart id={id} type={type} />
      </div>
      <h4 className=" font-bold text-[18px] text-[#333333] text-right ">{value}</h4>
      <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1" />
      <p
        className="description  text-black tracking-normal font-normal opacity-70 text-sm mt-[10px] text-right"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="footer w-full flex my-[10px]">
        {isButton && (
          <Link href={`/${type}/${id}`}>
            <a
              className="border-black border-2 font-bold text-base leading-4 text-black rounded-[5px] py-[2px] px-[20px] active:bg-gray-lighter focus:outline-none hover:bg-white-active"
              type="button"
            >
              {t('קרא עוד')}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
