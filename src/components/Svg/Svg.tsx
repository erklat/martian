import React, { forwardRef, Ref } from "react";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import icons, { TIcons } from "./svgManifest";

type TProps = {
  icon: keyof TIcons;
  classNames?: string;
  wrapperClassNames?: string;
  otherProps?: React.SVGProps<SVGSVGElement>;
};

const Svg = forwardRef<HTMLSpanElement, TProps>(
  (
    { icon, classNames = "", wrapperClassNames = "", ...otherProps },
    ref: Ref<HTMLSpanElement>
  ) => {
    const SVG = icons?.[icon];

    if (!SVG) return null;

    return (
      <span ref={ref} className={wrapperClassNames}>
        <SVG className={classNames} {...otherProps} aria-hidden="true" />
      </span>
    );
  }
);

Svg.displayName = "Svg";

export default withLogger(Svg);
