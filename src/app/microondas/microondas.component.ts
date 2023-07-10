import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {
  currentTime: string = "00:00";
  isRunning: boolean = false;
  timer: any;
  currentMinutes: number = 0;
  currentSeconds: number = 0;
  newSeconds: number = 0;
  newMinutes: number = 0;
  firstNumber: number = 0;
  secondNumber: number = 0;
  thirdNumber: number = 0;

  addDigit(digit: number) {
    if (this.currentMinutes === 0 && this.currentSeconds === 0) {
      this.currentMinutes = 0;
      this.currentSeconds = digit;
      this.firstNumber = digit;
      this.currentTime = `00:0${digit}`;
    } else if (this.currentMinutes === 0 && this.currentSeconds < 10) {
      this.secondNumber = digit;
      this.currentSeconds = this.currentSeconds * 10 + digit;
      this.currentTime = `00:${this.formatTimeValue(this.currentSeconds)}`;
    } else if (this.currentMinutes === 0 && this.currentSeconds >= 10) {
      this.thirdNumber = digit;
      this.currentMinutes = this.firstNumber;
      this.currentSeconds = this.secondNumber * 10 + digit;
      this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
    } else if (this.currentMinutes < 10 && this.currentSeconds >= 10 || this.currentSeconds === 0) {
      this.currentMinutes = this.currentMinutes * 10 + this.secondNumber;
      this.currentSeconds = this.thirdNumber * 10 + digit;
      this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
    }

    if (this.currentSeconds > 59) {
      const extraMinutes = Math.floor(this.currentSeconds / 60);
      const extraSeconds = Math.floor(this.currentSeconds % 60);
      this.newMinutes += extraMinutes;
      this.newSeconds += extraSeconds;
      this.currentTime = `${this.formatTimeValue(this.newMinutes)}:${this.formatTimeValue(this.newSeconds)}`;
    }

    if (this.currentMinutes > 30 || (this.currentMinutes === 30 && this.currentSeconds > 0)) {
      this.currentMinutes = 30;
      this.currentSeconds = 0;
      this.currentTime = `30:00`;
    }
  }

  add30Seconds() {
    this.currentSeconds += 30;
    if (this.currentSeconds > 59) {
      const extraMinutes = Math.floor(this.currentSeconds / 60);
      this.currentMinutes += extraMinutes;
      this.currentSeconds %= 60;
    }
    this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
  }

  add1Minute() {
    this.currentMinutes++;
    this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
  }

  add10Minutes() {
    this.currentMinutes += 10;
    if (this.currentMinutes > 30) {
      this.currentMinutes = 30;
      this.currentSeconds = 0;
    }
    this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
  }

  clearInput() {
    this.currentMinutes = 0;
    this.currentSeconds = 0;
    this.newMinutes = 0;
    this.newSeconds = 0;
    this.currentTime = "00:00";
  }

  startMicrowave() {
    if (!this.isRunning && (this.currentMinutes > 0 || this.currentSeconds > 0)) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  }

  stopMicrowave() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  }

  updateTime() {
    if (this.currentMinutes === 0 && this.currentSeconds === 0) {
      this.stopMicrowave();
      return;
    }

    if (this.currentSeconds === 0) {
      this.currentMinutes--;
      this.currentSeconds = 59;
    } else {
      this.currentSeconds--;
    }

    this.currentTime = `${this.formatTimeValue(this.currentMinutes)}:${this.formatTimeValue(this.currentSeconds)}`;
  }

  formatTimeValue(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
