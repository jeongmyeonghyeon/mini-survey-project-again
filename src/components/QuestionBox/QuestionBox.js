import ActionButtons from 'components/ActionButtons';
import Body from 'components/Body';
import Desc from 'components/Desc';
import Title from 'components/Title';

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}

export default QuestionBox;
