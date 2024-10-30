export default class Timer {
          max: number;
    remaining: number;
    isInitial: boolean;
    isStarted: boolean;
     isPaused: boolean;
    isStopped: boolean;
   isGameover: boolean;
        pause: () => void;
        start: () => void;

  constructor() {
    this.max         = 0
    this.remaining   = 0
    this.isInitial   = false;
    this.isStarted   = false;
    this.isPaused    = false;
    this.isStopped   = false;
    this.isGameover  = false;
    this.pause       = () => {};
    this.start       = () => {};
  }
}
