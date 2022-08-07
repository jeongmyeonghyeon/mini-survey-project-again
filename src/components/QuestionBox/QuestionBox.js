import ActionButtons from 'components/ActionButtons';
import Body from 'components/Body';
import Desc from 'components/Desc';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import answersState from 'stores/answers/atom';
import questionsState from 'stores/questions/atom';
import styled from 'styled-components';

function QuestionBox() {
  const params = useParams();
  const step = parseInt(params.step);

  const questions = useRecoilValue(questionsState);
  const [answers, setAnswers] = useRecoilState(answersState);

  const question = questions[step];

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
