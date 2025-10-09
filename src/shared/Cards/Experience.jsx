export default function Experience({
  img: Icon,
  number,
  text,
  IconColor,
  backGroundIconColor,
  background,
}) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center  p-[3%]  rounded-[1.5rem] gap-[1rem] bg-white w-[42%] bg-gray-300 lap:w-[20%] lap:p-[1%] lap:pt-[2%] `}
      >
        <div className={`flex justify-center  `}>
          <Icon
            className={`p-[25%] text-blue-500 ${backGroundIconColor} bg-blue-100 ${IconColor} rounded-[0.9rem] h-11 w-11 `}
          />
        </div>
        <div className="flex justify-center text-[1.1rem] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold lap:text-[1.5rem]">
          {number}
        </div>
        <div className="flex justify-center text-[0.9rem] truncate text-gray-500">
          {text}
        </div>
      </div>
    </>
  );
}
