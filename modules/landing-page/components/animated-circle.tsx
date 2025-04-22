"use client";

import { cn } from "@shsfwork/lib/cn";
import type { CSSProperties, SVGProps } from "react";
import { useState, useEffect } from "react";

export interface AnimatedCircleProps
  extends Omit<SVGProps<SVGSVGElement>, "className"> {
  value: number;
  size?: number | string;
  gapPercent?: number;
  strokeWidth?: number;
  equal?: boolean;
  showValue?: boolean;
  animated?: boolean;
  altText?: string;

  primary?:
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "bone"
    | string
    | { [key: number]: string };
  secondary?:
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "bone"
    | string
    | { [key: number]: string };

  transition?: {
    length?: number;
    step?: number;
    delay?: number;
  };

  className?:
    | string
    | {
        svgClassName?: string;
        primaryClassName?: string;
        secondaryClassName?: string;
        textClassName?: string;
      };
}

export default function AnimatedCircle({
  value,
  size = "100%",
  gapPercent = 5,
  strokeWidth = 10,
  equal = false,
  showValue = true,
  animated = true,
  altText = "Animated Circle",

  primary = "bone",
  secondary,

  transition = {
    length: 1000, // ms
    step: 200, // ms
    delay: 0, // ms
  },

  className,

  ...props
}: AnimatedCircleProps) {
  // State for the current progress value (0-100)
  const [currentValue, setCurrentValue] = useState(animated ? 0 : value);
  // State for the displayed numeric value
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  // Effect for animation when the value changes or animated prop changes
  useEffect(() => {
    if (!animated) {
      setCurrentValue(value);
      setDisplayValue(value);
      return;
    }

    // Reset to 0 when animation starts
    setCurrentValue(0);
    setDisplayValue(0);

    // Animation parameters
    const duration = 1500; // Total animation duration in ms
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;
    const increment = 100 / totalFrames; // For gauge circle (always 0 to 100%)
    const valueIncrement = value / totalFrames; // For displayed value (0 to specified value)

    let frame = 0;
    let currentProgress = 0;
    let currentNumericValue = 0;

    // Animation interval
    const timer = setInterval(() => {
      if (frame >= totalFrames) {
        // Animation complete
        setCurrentValue(100);
        setDisplayValue(value);
        clearInterval(timer);
        return;
      }

      // Update values for this frame
      currentProgress += increment;
      currentNumericValue += valueIncrement;
      setCurrentValue(Math.min(currentProgress, 100));
      setDisplayValue(Math.min(Math.round(currentNumericValue), value));
      frame++;
    }, frameRate);

    // Cleanup
    return () => clearInterval(timer);
  }, [animated, value]);

  const strokePercent = currentValue; // Current animation value (0-100)

  const circleSize = 100; // px
  const radius = circleSize / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const percentToDegree = 360 / 100; // deg
  const percentToPx = circumference / 100; // px

  const offsetFactor = equal ? 0.5 : 0;
  const offsetFactorSecondary = 1 - offsetFactor;

  const primaryStrokeDasharray = () => {
    if (
      offsetFactor > 0 &&
      strokePercent > 100 - gapPercent * 2 * offsetFactor
    ) {
      // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
      const subtract = -strokePercent + 100;

      return `${Math.max(
        strokePercent * percentToPx - subtract * percentToPx,
        0
      )} ${circumference}`;
    } else {
      const subtract = gapPercent * 2 * offsetFactor;

      return `${Math.max(
        strokePercent * percentToPx - subtract * percentToPx,
        0
      )} ${circumference}`;
    }
  };

  const secondaryStrokeDasharray = () => {
    if (
      offsetFactorSecondary < 1 &&
      strokePercent < gapPercent * 2 * offsetFactorSecondary
    ) {
      // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
      const subtract = strokePercent;

      return `${Math.max(
        (100 - strokePercent) * percentToPx - subtract * percentToPx,
        0
      )} ${circumference}`;
    } else {
      const subtract = gapPercent * 2 * offsetFactorSecondary;

      return `${Math.max(
        (100 - strokePercent) * percentToPx - subtract * percentToPx,
        0
      )} ${circumference}`;
    }
  };

  const primaryTransform = () => {
    if (
      offsetFactor > 0 &&
      strokePercent > 100 - gapPercent * 2 * offsetFactor
    ) {
      // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
      const add = 0.5 * (-strokePercent + 100);

      return `rotate(${-90 + add * percentToDegree}deg)`;
    } else {
      const add = gapPercent * offsetFactor;

      return `rotate(${-90 + add * percentToDegree}deg)`;
    }
  };

  const secondaryTransform = () => {
    if (
      offsetFactorSecondary < 1 &&
      strokePercent < gapPercent * 2 * offsetFactorSecondary
    ) {
      // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
      const subtract = 0.5 * strokePercent;

      return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`;
    } else {
      const subtract = gapPercent * offsetFactorSecondary;

      return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`;
    }
  };

  const primaryStroke = () => {
    if (!primary) {
      return "#c9b3a4"; // Default is now bone
    } else if (typeof primary === "string") {
      return primary === "danger"
        ? "#dc2626" // Red
        : primary === "warning"
        ? "#f59e0b" // Amber
        : primary === "info"
        ? "#3b82f6" // Blue
        : primary === "success"
        ? "#22c55e" // Green
        : primary === "bone"
        ? "#c9b3a4" // Indigo
        : primary;
    } else if (typeof primary === "object") {
      const primaryKeys = Object.keys(primary).sort(
        (a, b) => Number(a) - Number(b)
      );
      let primaryStroke = "";
      for (let i = 0; i < primaryKeys.length; i++) {
        const currentKey = Number(primaryKeys[i]);
        const nextKey = Number(primaryKeys[i + 1]);

        if (
          strokePercent >= currentKey &&
          (strokePercent < nextKey || !nextKey)
        ) {
          primaryStroke = primary[currentKey] || "";

          if (
            ["danger", "warning", "success", "info", "bone"].includes(
              primaryStroke
            )
          ) {
            primaryStroke =
              {
                danger: "#dc2626",
                warning: "#f59e0b",
                info: "#3b82f6",
                success: "#22c55e",
                bone: "#c9b3a4",
              }[primaryStroke] || primaryStroke;
          }

          break;
        }
      }
      return primaryStroke;
    }
  };

  const secondaryStroke = () => {
    if (!secondary) {
      return "#9ca3af"; // Default Gray
    } else if (typeof secondary === "string") {
      return secondary === "danger"
        ? "#fecaca" // Light Red
        : secondary === "warning"
        ? "#fde68a" // Light Amber
        : secondary === "info"
        ? "#bfdbfe" // Light Blue
        : secondary === "success"
        ? "#bbf7d0" // Light Green
        : secondary === "bone"
        ? "#f2e9e2" // Light Indigo
        : secondary;
    } else if (typeof secondary === "object") {
      const stroke_percent_secondary = 100 - strokePercent;
      const secondaryKeys = Object.keys(secondary).sort(
        (a, b) => Number(a) - Number(b)
      );
      let secondaryStroke = "";

      for (let i = 0; i < secondaryKeys.length; i++) {
        const currentKey = Number(secondaryKeys[i]);
        const nextKey = Number(secondaryKeys[i + 1]);

        if (
          stroke_percent_secondary >= currentKey &&
          (stroke_percent_secondary < nextKey || !nextKey)
        ) {
          secondaryStroke = secondary[currentKey] || "";

          if (
            ["danger", "warning", "success", "info", "bone"].includes(
              secondaryStroke
            )
          ) {
            secondaryStroke =
              {
                danger: "#fecaca",
                warning: "#fde68a",
                info: "#bfdbfe",
                success: "#bbf7d0",
                bone: "#f2e9e2",
              }[secondaryStroke] || secondaryStroke;
          }

          break;
        }
      }
      return secondaryStroke;
    }
  };

  const primaryOpacity = () => {
    if (
      offsetFactor > 0 &&
      strokePercent < gapPercent * 2 * offsetFactor &&
      strokePercent < gapPercent * 2 * offsetFactorSecondary
    ) {
      return 0;
    } else return 1;
  };

  const secondaryOpacity = () => {
    if (
      (offsetFactor === 0 && strokePercent > 100 - gapPercent * 2) ||
      (offsetFactor > 0 &&
        strokePercent > 100 - gapPercent * 2 * offsetFactor &&
        strokePercent > 100 - gapPercent * 2 * offsetFactorSecondary)
    ) {
      return 0;
    } else return 1;
  };

  const circleStyles: CSSProperties = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDashoffset: 0,
    strokeWidth: strokeWidth,
    transition: `all ${transition?.length}ms ease ${transition?.delay}ms`,
    transformOrigin: "50% 50%",
    shapeRendering: "geometricPrecision",
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center gap-1 md:gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${circleSize} ${circleSize}`}
        shapeRendering="crispEdges"
        width={size}
        height={size}
        style={{ userSelect: "none" }}
        strokeWidth={2}
        fill="none"
        className={cn(
          "",
          typeof className === "string" ? className : className?.svgClassName
        )}
        {...props}
      >
        {/* Secondary circle */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          style={{
            ...circleStyles,
            strokeDasharray: secondaryStrokeDasharray(),
            transform: secondaryTransform(),
            stroke: secondaryStroke(),
            opacity: secondaryOpacity(),
          }}
          className={cn(
            "",
            typeof className === "object" && className?.secondaryClassName
          )}
        />

        {/* Primary circle */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          style={{
            ...circleStyles,
            strokeDasharray: primaryStrokeDasharray(),
            transform: primaryTransform(),
            stroke: primaryStroke(),
            opacity: primaryOpacity(),
          }}
          className={cn(
            "",
            typeof className === "object" && className?.primaryClassName
          )}
        />

        {/* Value text */}
        {showValue && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            alignmentBaseline="central"
            fill="currentColor"
            fontSize={28}
            className={cn(
              "font-medium",
              typeof className === "object" && className?.textClassName
            )}
          >
            {displayValue}+
          </text>
        )}
      </svg>
      {/* Optional alt text for screen readers */}
      {props["aria-hidden"] && (
        <span
          className="sr-only"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          {props["aria-hidden"]}
        </span>
      )}
      {altText && <p className="text-xl md:text-2xl font-medium">{altText}</p>}
    </div>
  );
}
