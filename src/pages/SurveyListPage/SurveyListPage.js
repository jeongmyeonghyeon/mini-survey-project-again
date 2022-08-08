import SurveyList from 'components/SurveyList';
import React from 'react';
import { FcSurvey } from 'react-icons/fc';
import styled from 'styled-components';

function SurveyListPage() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <SurveyListWrapper>
        <Title>
          <FcSurvey />
          <span>MINI SURVEYS</span>
        </Title>
        <SurveyList />
      </SurveyListWrapper>
    </React.Suspense>
  );
}

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 16px;
  span {
    margin-left: 4px;
  }
`;

const SurveyListWrapper = styled.div`
  padding: 36px;
  height: 100vh;
  background-color: #f5f6f6;
`;

export default SurveyListPage;
