export default class Timer {
        max: number;
  remaining: number;
  isStopped: boolean;

  constructor() {
    this.max       = 0
    this.remaining = 0
    this.isStopped = false;
  }
}
