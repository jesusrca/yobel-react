import React from "react";
import { Section } from "./custom-section";
import svgPathsCheck from "../../imports/svg-ooh15vn6z1";

interface ResultItem {
  highlight: string;
  normal: string;
}

interface ResultsGridProps {
  label: string;
  title: string;
  items: ResultItem[];
  className?: string;
}

export function ResultsGrid({ label, title, items, className = "" }: ResultsGridProps) {
  // Split items into pairs for the 2x2 grid
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2, 4);

  return (
    <Section className={`bg-white ${className}`}>
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] md:gap-[120px] items-center px-[20px] md:px-[50px] py-[80px] md:py-[120px] relative w-full max-w-[1440px]">
          {/* Title Section */}
          <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[133px] items-start relative w-full">
            <p className="font-augenblick leading-[24px] not-italic text-[24px] text-[rgba(73,73,73,0.5)] w-full md:w-[40%]">
              {label}
            </p>
            <div className="content-stretch flex gap-[20px] items-start w-full md:w-[60%]">
              <p className="font-augenblick leading-[48px] not-italic text-[32px] md:text-[45px] text-black w-full">
                {title}
              </p>
            </div>
          </div>

          {/* Content with left spacer and right grid */}
          <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[133px] items-start relative w-full">
            {/* Left spacer (hidden on mobile) */}
            <div className="hidden md:block h-[347px] relative shrink-0 w-[40%]" />

            {/* Grid Cards - Right Column */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full md:w-[60%]">
              {/* First Row */}
              {firstRow.length > 0 && (
                <div className="content-stretch flex flex-col md:flex-row gap-[8px] md:gap-[16px] items-stretch relative w-full">
                  {firstRow.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {/* Item */}
                      <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] md:gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative">
                        <div aria-hidden="true" className="hidden md:block absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
                        <div className="hidden md:block relative shrink-0 size-[40px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                            <path d={svgPathsCheck.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <p className="font-augenblick leading-[24px] not-italic text-[20px] md:text-[22px] text-[rgba(73,73,73,0.5)]">
                          <span>{item.highlight} </span>
                          <span className="text-black">{item.normal}</span>
                        </p>
                      </div>

                      {/* Separator (only between items, not after last one) */}
                      {idx < firstRow.length - 1 && (
                        <div className="hidden md:block h-auto relative shrink-0 w-0">
                          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 214">
                              <path d="M0.5 0V214" stroke="#494949" strokeOpacity="0.2" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Second Row */}
              {secondRow.length > 0 && (
                <div className="content-stretch flex flex-col md:flex-row gap-[8px] md:gap-[16px] items-stretch relative w-full">
                  {secondRow.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {/* Item */}
                      <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] md:gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative">
                        <div aria-hidden="true" className="hidden md:block absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
                        <div className="hidden md:block relative shrink-0 size-[40px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                            <path d={svgPathsCheck.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <p className="font-augenblick leading-[24px] not-italic text-[20px] md:text-[22px] text-[rgba(73,73,73,0.5)]">
                          <span>{item.highlight} </span>
                          <span className="text-black">{item.normal}</span>
                        </p>
                      </div>

                      {/* Separator (only between items, not after last one) */}
                      {idx < secondRow.length - 1 && (
                        <div className="hidden md:block h-auto relative shrink-0 w-0">
                          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 214">
                              <path d="M0.5 0V214" stroke="#494949" strokeOpacity="0.2" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
