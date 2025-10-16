export default function PurpleButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={` flex text-[0.9rem]  justify-center items-center  rounded-[0.6rem] text-white font-semibold p-[2%]   bg-gradient-to-r from-blue-600 to-purple-600 lap:p-[1%]   `}
      >
        {text}
      </button>
    </>
  );
}
