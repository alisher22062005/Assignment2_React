export default function WhiteButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={` flex text-[0.9rem] justify-center items-center  rounded-[0.6rem]  font-semibold border-[1px]  border-gray-200  bg-white hover:bg-gray-100 p-[2%]  lap:p-[1%]`}
      >
        {text}
      </button>
    </>
  );
}
