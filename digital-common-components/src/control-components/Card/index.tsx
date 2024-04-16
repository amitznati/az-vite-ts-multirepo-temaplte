import {ComponentPropsWithoutRef, useMemo, useRef} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";
import useSticky from "../../hooks/useSticky.ts";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
    info?: boolean;
    dashed?: boolean;
    smallPadding?: boolean;
    borderError?: boolean;
    isSticky?: "top" | "bottom";
}

export const Card = (props: CardProps) => {
    const {isSticky, borderError, className, children, dashed, info, smallPadding, ...rest } = props;

    let classes =  twMerge(
      'tm-card border-[1px]',
        className,
        clsx({
            "rounded-[16px]": !isSticky,
            "border-l-0 border-r-0": isSticky,
            "border-t-0": isSticky === "top",
            "border-b-0": isSticky === "bottom",
            "p-[32px]": !smallPadding,
            "px-[12px] py-[8px]": smallPadding,
            "border-solid": !dashed,
            "border-dashed": dashed,
            "border-[#003E7F]": info && !borderError,
            "border-[#5E5E5E]": !info && !borderError,
            "border-error": borderError,
            "bg-[#E9F1F9]": info,
        }),
    );
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
}

export const StickyCard = (props: {sticky: 'top' | 'bottom', y?: number} & CardProps) => {
    const {y, borderError, sticky, className, children, dashed, info, smallPadding, ...rest } = props;
    const ref = useRef<HTMLDivElement>(null);
    const {isSticky} = useSticky(ref);

    let classes = useMemo( () => twMerge(
      'tm-card-sticky',
        className,
        clsx({
            "rounded-[16px] border-[1px]": !isSticky,
            "fixed left-0 right-0 z-[52] px-[64px] py-[32px] flex justify-center": isSticky,
            [`top-${y||0} border-b`]: sticky === 'top',
            [`bottom-${y||0} border-t`]: sticky === 'bottom',
            "p-[32px]": !smallPadding && !isSticky,
            "px-[12px] py-[8px]": smallPadding && !isSticky,
            "border-solid": !dashed,
            "border-dashed": dashed,
            "border-[#003E7F]": info && !borderError,
            "border-[#5E5E5E]": !info && !borderError,
            "border-error": borderError,
            "bg-[#E9F1F9]": info,
        }),
    ), [className, dashed, info, smallPadding, sticky, borderError, isSticky]);

    return (
        <div ref={ref} className="tm-card">
            <div className={classes} {...rest}>
              <div className={isSticky ? "w-[1312px]" : '' }>
                {children}
              </div>

            </div>
        </div>
    );
}

export default Object.assign(Card, {
  Sticky: StickyCard
});