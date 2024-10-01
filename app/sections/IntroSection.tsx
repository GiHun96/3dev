import React from "react";

import portfolioData from "@/app/mocks/portfolioData.json";

const IntroSection = () => {
  const { name, nickName, email, githubUrl } = portfolioData.introduction;

  return (
    <section>
      <div>
        <h2>{name}</h2>
        <h3>{nickName}</h3>
      </div>
      <div>
        <h4>{email}</h4>
        <h4>{githubUrl}</h4>
      </div>
    </section>
  );
};

export default IntroSection;
