import React, { useEffect } from "react";

interface TimelineCardProps {
  title: string;
  date: string;
  description: string;
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimelineCard = ({
  title,
  date,
  description,
  isModalOpened,
  setIsModalOpened,
}: TimelineCardProps) => {
  const handleClick = () => {
    setIsModalOpened(true);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col hover:border hover:border-red-600"
    >
      <span>{title}</span>
      <span>{date}</span>
      <span>{description}</span>
    </div>
  );
};

export default TimelineCard;
