import React from "react";
import { JackInTheBox, Rotate } from "react-awesome-reveal";

type SummaryProps = {
  text: string;
  children: React.ReactElement | React.ReactElement[];
};

const Summary = ({ text, children }: SummaryProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <JackInTheBox cascade>
        <h2>{text}</h2>
        {children}
      </JackInTheBox>
    </div>
  );
};

export default Summary;
