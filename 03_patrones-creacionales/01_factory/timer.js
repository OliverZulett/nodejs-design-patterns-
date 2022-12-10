export class Timer {
  constructor(timerLabel) {
    this.label = timerLabel;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(
      `La ejecucion ${this.label} duro: ${diff[0]} segundos con ${diff[1]} nano segundos`
    );
  }
}
