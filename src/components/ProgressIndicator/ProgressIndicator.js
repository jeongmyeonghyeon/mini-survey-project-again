import Bar from 'components/Bar';
import useAnswers from 'hooks/useAnswers';
import useStep from 'hooks/useStep';
import { useRecoilValue } from 'recoil';
import questionsLengthState from 'stores/survey/questionsLengthState';
import styled from 'styled-components';

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (typeof answers[i] !== 'undefined') {
      status = 'done';
    }
    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;

  span {
    color: #121111;
    font-weight: 700;
  }
`;

export default ProgressIndicator;
