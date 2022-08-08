import Button from 'components/Button';
import useAnswers from 'hooks/useAnswers';
import useCurrentAnswer from 'hooks/useCurrentAnswer';
import useDefaultValueByType from 'hooks/useDefaultValueByType';
import useRequiredOption from 'hooks/useRequiredOption';
import useStep from 'hooks/useStep';
import useSurveyId from 'hooks/useSurveyId';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import postAnswers from 'services/postAnswers';
import questionsLengthState from 'stores/survey/questionsLengthState';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const questionsLength = useRecoilValue(questionsLengthState);
  const [answers, setAnswers] = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const isRequired = useRequiredOption();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;
  const [, setAnswer] = useCurrentAnswer();
  const defaultValue = useDefaultValueByType();

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="TERTIARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                // console.log(err);
                // console.log(err.response);
                alert('에러가 발생했습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            if (!isRequired) {
              setAnswer(defaultValue);
            }
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
