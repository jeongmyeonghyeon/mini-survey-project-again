import ProgressIndicator from 'components/ProgressIndicator';
import QuestionBox from 'components/QuestionBox';
import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import styled from 'styled-components';

function SurveyPage() {
  return (
    <BoxLayout>
      <React.Suspense fallback={<div>loading...</div>}>
        <SurveyPageWrapper>
          <ProgressIndicator />
          <QuestionBox />
        </SurveyPageWrapper>
      </React.Suspense>
    </BoxLayout>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
