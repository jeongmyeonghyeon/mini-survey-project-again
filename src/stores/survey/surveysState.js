import { selector } from 'recoil';
import getSurveys from 'services/getSurveys';

const surveysState = selector({
  key: 'surveysState',
  get: async () => {
    const res = await getSurveys();

    return res.data;
  },
});

export default surveysState;
