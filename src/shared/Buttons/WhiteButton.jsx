export default function WhiteButton({ text }) {
  return (
    <>
      <div
        className={` flex text-[0.9rem] justify-center items-center  rounded-[0.6rem]  font-semibold   bg-white hover:bg-gray-100 p-[2%] lap:w-[14%] lap:p-[1%]`}
      >
        {text}
      </div>
    </>
  );
}
