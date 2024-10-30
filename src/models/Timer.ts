export default class Timer {
          max: number;
    remaining: number;
    isInitial: boolean;
     isPaused: boolean;
    isStopped: boolean;
   isGameover: boolean;
        pause: () => void;

  constructor() {
    this.max         = 0
    this.remaining   = 0
    this.isInitial   = true;
    this.isPaused    = true;
    this.isStopped   = true;
    this.isGameover  = false;
    this.pause       = () => {}
  }
}
