import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox() {
  return (
    <div>
      <Title>타이틀</Title>
      <Desc>설명</Desc>
      <Body type={'text'} />
      <ActionButtons />
    </div>
  );
}

export default QuestionBox;
