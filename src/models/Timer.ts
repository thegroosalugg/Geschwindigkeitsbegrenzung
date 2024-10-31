export default class Timer {
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

  constructor() {
    this.max         = 0
    this.remaining   = 0
    this.isInitial   = false;
    this.isStarted   = false;
    this.isPaused    = false;
    this.isStopped   = false;
    this.isGameover  = false;
    this.start       = () => {};
    this.pause       = () => {};
    this.replay      = () => {};
  }
}
