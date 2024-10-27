export default class Timer {
          max: number;
    remaining: number;
    isStopped: boolean;
   isGameover: boolean;

  constructor() {
    this.max         = 0
    this.remaining   = 0
    this.isStopped   = false;
    this.isGameover  = false;
  }
}
