export default function PurpleButton({ text }) {
  return (
    <>
      <div
        className={` flex text-[0.9rem]  justify-center items-center p-[2%] rounded-[0.6rem] text-white font-semibold   bg-gradient-to-r from-blue-600 to-purple-600 lap:p-[1%] lap:w-[14%] `}
      >
        {text}
      </div>
    </>
  );
}
