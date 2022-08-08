import mainApi from 'services/apis/mainApi';

function getSurveys() {
  return mainApi.get('/surveys');
}

export default getSurveys;
