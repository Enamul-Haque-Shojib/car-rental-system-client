import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
<<<<<<< HEAD
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props} />
=======
    (<div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props} />)
>>>>>>> development
  );
}

export { Skeleton }
