import { Skeleton, SkeletonLine } from 'keep-react'

const LoadingPage = () => {
  return (
    <>
    <div className="bg-zinc-200/50">
     <Skeleton className=" max-w-sm space-y-2.5 ">
      <SkeletonLine className="bg-zinc-200/50 h-72 w-full" />
      <SkeletonLine className="bg-zinc-200/50 h-6 w-full" />
      <SkeletonLine className="bg-zinc-200/50 h-6 w-3/5" />
    </Skeleton>
    </div>
    </>
  )
}

export default LoadingPage