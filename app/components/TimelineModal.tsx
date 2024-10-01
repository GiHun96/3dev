import React from "react";

interface TimelineModalProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimelineModal = ({ setIsModalOpened }: TimelineModalProps) => {
  const handleModalClick = () => {
    setIsModalOpened(false);
  };
  return (
    <div className="bg-gray-950 bg-opacity-75 absolute w-full min-w-screen min-h-screen z-30 flex flex-col justify-center items-center">
      <div
        onClick={handleModalClick}
        className="w-[600px] h-[300px] bg-blue-400 rounded-xl shadow-md"
      >
        <span className="text-xl">모달이 켜졌다</span>
      </div>
    </div>
  );
};

export default TimelineModal;
