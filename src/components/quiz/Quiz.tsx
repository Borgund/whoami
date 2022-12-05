import React, { useState } from "react";
import Question, { Answer } from "./Question";
import Summary from "./Summary";
import { Progress } from "@chakra-ui/react";
import scroogeImg from "../../assets/scrooge.gif";
import { Bounce } from "react-awesome-reveal";

type QuizProps = {};

type QuizState = Answer[];

const Quiz = ({}: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizState>([]);

  const addAnswer = (answer: Answer) => {
    setQuizAnswers((prev) => [...prev, answer]);
    setCurrentIndex((prev) => {
      if (prev + 1 != questions.length) {
        return prev + 1;
      } else {
        return -1;
      }
    });
  };

  const countAnswersIds = () => {
    const counts: { [key: number]: number } = {};

    for (const answer of quizAnswers) {
      counts[answer.id] = counts[answer.id] ? counts[answer.id] + 1 : 1;
    }
    return counts;
  };

  const questions = [
    {
      question: "What do you least like about Christmas?",
      alternatives: [
        { text: "Buying gifts", id: 1 },
        { text: "Family members", id: 2 },

        {
          text: "Christmas songs",
          id: 3,
        },
      ],
    },
    {
      question: "The first snowfall this season has fallen, how do you react?",
      alternatives: [
        { text: "Bah! Now i have find my trusty shovel", id: 1 },
        { text: "I stay indoors!", id: 2 },

        {
          text: "Now i have to keep the fire going. This is gonna cost me.",
          id: 3,
        },
      ],
    },
    {
      question:
        "The candle blows out behind your while you are working, what is your first thought?",
      alternatives: [
        { text: "Good, i like the darkness. It costs less", id: 1 },
        {
          text: "Good, this reflects my outcome of christmas, dark and cold.",
          id: 2,
        },

        {
          text: "Bah! I might as well to bed",
          id: 3,
        },
      ],
    },
    {
      question:
        "You are asked to make a charitable donation to make some slight provision for the Poor and Destitute, who suffer greatly at the present time, what do you answer?",
      alternatives: [
        { text: "Bah! Humbug!", id: 1 },
        {
          text: "Point out that if you give money to the poor, they won't be poor anymore, and that would put them out of a job",
          id: 2,
        },

        {
          text: "I wish to be left alone",
          id: 3,
        },
      ],
    },
    {
      question: "Someone wishes you a 'Merry Christmas', how do you respond?",
      alternatives: [
        { text: "Bah! Humbug!", id: 1 },
        {
          text: "I do not celebrate the holidays. So i ignore them.",
          id: 2,
        },

        {
          text: "It's just another workday.",
          id: 3,
        },
      ],
    },
    {
      question:
        "What is your favorite characteristic of your late partner Jacob?",
      alternatives: [
        { text: "He robbed from the widows", id: 1 },
        {
          text: "He swindeled the poor",
          id: 2,
        },

        {
          text: "In his will, he left me enough money to pay for his tombstone.",
          id: 3,
        },
      ],
    },
    {
      question: "You are invited to Christmas Dinner, how do you respond?",
      alternatives: [
        {
          text: "Ask about the dishes that will be served, but still say no.",
          id: 1,
        },
        {
          text: "Ask if they are daft.",
          id: 2,
        },

        {
          text: "Say: 'You know i can't eat that stuff' and return their wreath.",
          id: 3,
        },
      ],
    },
    {
      question: "What are our plans for the holidays?",
      alternatives: [
        { text: "Getting visited by my favorite three spirits.", id: 1 },
        {
          text: "Nothing much, visits from spirits.",
          id: 2,
        },

        {
          text: "You know. Reflecting on my past, present and looking at my future through visits from spirits.",
          id: 3,
        },
      ],
    },
  ];
  const finished = currentIndex < 0;
  return (
    <div style={{ width: "100%" }}>
      <Bounce>
        {!finished && (
          <Progress
            value={
              currentIndex === -1
                ? 100
                : (currentIndex / questions.length) * 100
            }
          />
        )}
        {!finished && (
          <Question
            question={questions[currentIndex].question}
            alternatives={questions[currentIndex].alternatives}
            on_click={(answer) => addAnswer(answer)}
          />
        )}
        {finished && (
          <Summary text="Your christmas spirit in on par with:">
            <img src={scroogeImg} alt="You in a nutshell!" />
          </Summary>
        )}
      </Bounce>
    </div>
  );
};

export default Quiz;
