import Button from 'components/Button';
import useAnswers from 'hooks/useAnswers';
import useStep from 'hooks/useStep';
import useSurveyId from 'hooks/useSurveyId';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import postAnswers from 'services/postAnswers';
import questionsLengthState from 'stores/survey/questionsLengthState';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const questionsLength = useRecoilValue(questionsLengthState);
  const answers = useAnswers();

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
            postAnswers(surveyId, answers);
            navigate('done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
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
