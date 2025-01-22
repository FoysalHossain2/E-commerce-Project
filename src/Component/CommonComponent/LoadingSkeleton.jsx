import { Skeleton, SkeletonLine } from 'keep-react'

const LoadingSkeleton = () => {
  return (
    <>
    <div className="">
     <Skeleton className=" max-w-sm space-y-2.5 ">
      <SkeletonLine className="h-52 w-full" />
      <SkeletonLine className="h-6 w-full" />
      <SkeletonLine className="h-6 w-3/5" />
    </Skeleton>
    </div>
    </>
  )
}

export default LoadingSkeleton