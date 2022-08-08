import useCurrentQuestion from './useCurrentQuestion';

function useDefaultValueByType() {
  const question = useCurrentQuestion();
  let defaultValue = '';

  if (question.type === 'select') {
    defaultValue = [];
  }

  return defaultValue;
}

export default useDefaultValueByType;
