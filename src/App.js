import CompletionPage from 'pages/CompletionPage';
import SurveyListPage from 'pages/SurveyListPage';
import SurveyPage from 'pages/SurveyPage';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SurveyListPage />} />
        <Route path="/done/:surveyId" element={<CompletionPage />} />
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
