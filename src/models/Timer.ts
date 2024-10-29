export default class Timer {
          max: number;
    remaining: number;
    isInitial: boolean;
    isStopped: boolean;
   isGameover: boolean;

  constructor() {
    this.max         = 0
    this.remaining   = 0
    this.isInitial   = true;
    this.isStopped   = true;
    this.isGameover  = false;
  }
}
