import { Skeleton } from "@mui/material";

export default function SkeletonNews() {
  return (
    <div className="flex flex-col items-center w-[90%] lap:w-[29%] gap-[1rem] border rounded-[1.5rem] border-gray-300 overflow-hidden">
      {/* Image placeholder */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        className="rounded-t-[1.5rem]"
        animation="wave"
      />

      <div className="p-[5%] flex flex-col gap-[1rem] w-full">
        {/* Icon and title row */}
        <div className="flex gap-[5%] items-center">
          <Skeleton
            variant="rectangular"
            width={40}
            height={40}
            className="rounded-[0.5rem]"
            animation="wave"
          />
          <div className="flex flex-col gap-[0.5rem] w-full">
            <Skeleton variant="text" width="80%" height={24} animation="wave" />
            <Skeleton variant="text" width="60%" height={20} animation="wave" />
          </div>
        </div>

        {/* Description */}
        <Skeleton variant="text" width="100%" height={20} animation="wave" />
        <Skeleton variant="text" width="90%" height={20} animation="wave" />
        <Skeleton variant="text" width="95%" height={20} animation="wave" />

        {/* Tags */}
        <div className="flex gap-[3%]">
          <Skeleton
            variant="rectangular"
            width={70}
            height={25}
            className="rounded-[0.8rem]"
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={70}
            height={25}
            className="rounded-[0.8rem]"
            animation="wave"
          />
        </div>
      </div>
    </div>
  );
}
