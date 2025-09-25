export default function Experience2({ img: Icon, number, text }) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-[1rem] items-center w-[87%]  p-[5%]  gap-[1rem] lap:w-[28%] lap:p-[3%]">
        <div className="flex w-full  ">
          <Icon className="p-[3%] text-blue-500 bg-blue-100 rounded-[0.9rem] h-11 w-11" />
        </div>
        <div className="flex w-full justify-start text-[1.1rem] text-gray-700 font-bold lap:text-[1.5rem]">
          {number}
        </div>
        <div className="flex w-full text-[0.9rem] text-gray-500">{text}</div>
      </div>
    </>
  );
}
