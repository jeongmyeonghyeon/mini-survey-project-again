import { Card, List } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil';
import surveysState from 'stores/survey/surveysState';
import surveyState from 'stores/survey/surveyState';
import styled from 'styled-components';

function SurveyList() {
  const surveys = useRecoilValue(surveysState);
  const navigate = useNavigate();
  const refresh = useRecoilRefresher_UNSTABLE(surveyState);

  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={surveys}
      renderItem={(item) => (
        <CardWrapper
          onClick={() => {
            refresh();
            navigate(`survey/${item.id}/0`);
          }}
        >
          <List.Item>
            <StyledCard>{item.title}</StyledCard>
          </List.Item>
        </CardWrapper>
      )}
    />
  );
}

const CardWrapper = styled.div``;

const StyledCard = styled(Card)`
  font-size: 15px;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
    border: 1px solid #6542f1;
  }
  &:active {
    box-shadow: none;
  }
`;

export default SurveyList;
