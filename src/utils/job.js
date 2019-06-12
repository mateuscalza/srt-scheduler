import { READY, RUNNING, BLOCKED } from './states';
import { saveMetric } from './timeEstimation';

export default class Job {
  constructor({ id, name, arrivalTime, burstTime }) {
    this.id = id;
    this.name = name;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.elapsedTime = 0;

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
      this.elapsedTime += 1;
      if (this.elapsedTime >= this.burstTime) {
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
    saveMetric(this);
    return this;
  }
}
