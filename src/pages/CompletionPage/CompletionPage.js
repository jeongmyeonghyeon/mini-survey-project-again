import congrats from 'assets/congrats.png';
import reload from 'assets/reload.png';
import Button from 'components/Button';
import useSurveyId from 'hooks/useSurveyId';
import BoxLayout from 'layouts/BoxLayout';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <BoxLayout>
      <CompletionPageWrapper>
        <img src={congrats} alt="congrats" width="209" height="204" />
        <MidText>설문이 완료되었습니다.</MidText>
        <ReloadButton
          type="TERTIARY"
          onClick={() => {
            navigate(`/survey/${surveyId}/0`);
          }}
        >
          <img src={reload} alt="reload" width="24" height="24" />
          새로운 응답 제출하기
        </ReloadButton>
      </CompletionPageWrapper>
    </BoxLayout>
  );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const MidText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
  margin-top: 16px;
  margin-bottom: 56px;
`;
const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
