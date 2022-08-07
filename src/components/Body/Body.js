import SelectInput from 'components/SelectInput';
import TextAreaInput from 'components/TextAreaInput';
import TextInput from 'components/TextInput';

function Body({ type, answer, setAnswer, options }) {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </>
  );
}

export default Body;
