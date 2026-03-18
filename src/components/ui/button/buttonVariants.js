import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "text-sm font-medium rounded-full flex cursor-pointer items-center justify-center gap-2 border border-transparent transition-all duration-300 disabled:cursor-not-allowed outline-0",
  {
    variants: {
      variant: {
        default:
          "text-white bg-brand-dark hover:opacity-90 disabled:bg-white/10 disabled:text-white/40 border border-white/20 hover:border-white/50",
        secondary:
          "text-brand-dark bg-white hover:bg-white/90 disabled:bg-white/50 disabled:text-brand-dark/50",
        ghost:
          "bg-transparent text-white hover:bg-white/10 disabled:text-white/40",
        danger:
          "bg-brand-red text-white hover:bg-brand-red/90",
      },
      size: {
        default: "h-12 px-6 py-3",
        xs: "h-[24px] px-3 py-1 text-xs",
        sm: "h-[36px] px-4 py-2 text-xs",
        md: "h-[40px] px-5 py-2 text-sm",
        lg: "h-[50px] px-8 py-3 text-base",
        xl: "h-[56px] px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
