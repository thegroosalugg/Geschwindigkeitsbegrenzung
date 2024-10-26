import useGameController from '@/hook/useGameController';
import Questions from './Questions';
import Answers from './Answers';
import Score from './Score';

export default function Quiz() {
  const { user, question, timer, handleAnswer } = useGameController();

  return (
    <>
      <Questions question={question} user={user} timer={timer} />
      <Score user={user} timer={timer} />
      <Answers question={question} user={user} timer={timer} handleAnswer={handleAnswer} />
    </>
  );
}
