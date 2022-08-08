import mainApi from 'services/apis/mainApi';

function postAnswers(surveyId, data) {
  console.log('@postAnswers surveyId', surveyId);
  console.log('@postAnswers data', data);

  mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
