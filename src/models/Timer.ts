type Timer = {
          max: number;
    remaining: number;
    isInitial: boolean;
    isStarted: boolean;
     isPaused: boolean;
    isStopped: boolean;
   isGameover: boolean;
        start: () => void;
        pause: () => void;
       replay: () => void;
       answer: (choice: string) => void;
};

export default Timer;
