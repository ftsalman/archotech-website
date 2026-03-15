import { cn } from "../../utils/utils";

export const PageContainer = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "h-full p-4 flex flex-col gap-4 bg-[#D3D3D3]",
        className
      )}
    >
      {children}
    </div>
  );
};

