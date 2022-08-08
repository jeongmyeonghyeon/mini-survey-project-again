import { FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BoxLayout({ children }) {
  return (
    <AppWrapper>
      <PreviousIconWrapper to={'/'} title="Back to survey list">
        <FcPrevious color="red" />
      </PreviousIconWrapper>
      <Box>{children}</Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const PreviousIconWrapper = styled(Link)`
  position: fixed;
  top: 36px;
  left: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);

  &:active {
    box-shadow: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default BoxLayout;
