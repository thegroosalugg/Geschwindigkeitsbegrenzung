import Timer from '@/models/Timer';
import css from './StartScreen.module.css';

export default function StartScreen({ timer }: { timer: Timer }) {

  return (
    <section className={css['start-screen']}>
      Start Screen
      <button onClick={() => timer.start()}>Play Game</button>
    </section>
  );
}
