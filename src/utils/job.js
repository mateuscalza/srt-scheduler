import { READY } from './states';

export default class Job {
  constructor({ name, arrivalTime, burstTime }) {
    this.name = name;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;

    this.history = Array(arrivalTime);
    this.currentState = READY;

    this.tick(arrivalTime);
  }

  tick(time) {
    this.history[time] = this.currentState;
    return this;
  }

  end() {
    this.currentState = null;
    return this;
  }
}
