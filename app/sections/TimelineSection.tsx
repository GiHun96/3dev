"use client";

import React, { useEffect, useState } from "react";
import portfolioData from "@/app/mocks/portfolioData.json";
import TimelineCard from "../components/TimelineCard";
import TimelineModal from "../components/TimelineModal";

const TimelineSection = () => {
  const { timelines } = portfolioData;
  const [isModaloOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {
    console.log("isModalOpened:", isModaloOpened);
  }, [isModaloOpened]);

  return (
    <>
      <section>
        <h5>나의 타임라인</h5>
        {timelines && (
          <div className="flex flex-col justify-start items-start gap-y-8">
            {timelines.map((timeline, index) => {
              return (
                <TimelineCard
                  key={index}
                  title={timeline.title}
                  date={timeline.date}
                  description={timeline.description}
                  isModalOpened={isModaloOpened}
                  setIsModalOpened={setIsModalOpened}
                />
              );
            })}
          </div>
        )}
      </section>
      {isModaloOpened && <TimelineModal setIsModalOpened={setIsModalOpened} />}
    </>
  );
};

export default TimelineSection;
