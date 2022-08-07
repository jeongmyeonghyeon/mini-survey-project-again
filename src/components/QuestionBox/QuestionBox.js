import ActionButtons from 'components/ActionButtons';
import Body from 'components/Body';
import Desc from 'components/Desc';
import Title from 'components/Title';
import useCurrentAnswer from 'hooks/useCurrentAnswer';
import useCurrentQuestion from 'hooks/useCurrentQuestion';
import styled from 'styled-components';

function QuestionBox() {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

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
