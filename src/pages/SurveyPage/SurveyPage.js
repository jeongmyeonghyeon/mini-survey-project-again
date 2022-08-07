import ProgressIndicator from 'components/ProgressIndicator';
import QuestionBox from 'components/QuestionBox';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function SurveyPage() {
  const params = useParams();

  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      options: {
        placeholder: 'placeholder 입니다.',
      },
      required: false,
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'textarea',
      options: {
        placeholder: 'placeholder 입니다.',
      },
      required: false,
    },
    {
      title: '질문3 입니다.',
      desc: '설명3 입니다.',
      type: 'select',
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
      required: false,
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </>
  );
}

export default SurveyPage;
