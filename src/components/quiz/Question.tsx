import { Button, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

type QuestionProps = {
  question: string;
  alternatives: Answer[];
  on_click: (answer: Answer) => void;
};

export type Answer = {
  text: string;
  id: number;
};

const Question = ({ question, alternatives, on_click }: QuestionProps) => {
  return (
    <>
      <h2>{question}</h2>
      <ButtonGroup spacing="2">
        <Wrap spacing={4} justify="center" align="center" direction="column">
          {alternatives.map((alternative) => (
            <WrapItem>
              <Button
                onClick={() => on_click(alternative)}
                style={{ margin: "0.5rem" }}
              >
                {alternative.text}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </ButtonGroup>
    </>
  );
};

export default Question;
