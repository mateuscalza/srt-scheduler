import { READY, RUNNING, BLOCKED } from './states';

export default class Job {
  constructor({ name, arrivalTime, burstTime }) {
    this.name = name;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.remainingTime = burstTime;

    this.history = Array(arrivalTime);
    this.currentState = READY;
    this.ended = false;
  }

  tick(time) {
    if (this.ended) {
      return this;
    }

    this.history[time] = this.currentState;

    if (this.currentState === RUNNING) {
      this.remainingTime -= 1;
      if (this.remainingTime <= 0) {
        this.end();
      }
    }
    return this;
  }

  dispatch() {
    this.currentState = RUNNING;
    return this;
  }

  block() {
    this.currentState = BLOCKED;
    return this;
  }

  end() {
    this.currentState = null;
    this.ended = true;
    return this;
  }
}
