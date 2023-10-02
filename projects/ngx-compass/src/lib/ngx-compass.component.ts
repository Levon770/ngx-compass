import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-compass',
  templateUrl: './ngx-compass.component.html',
  styleUrls: ['./ngx-compass.component.scss'],
})
export class NgxCompassComponent {
  lines: {x1: number; x2:number; y1: number; y2: number; w: number}[] = [];
  center: {x1: number; x2:number; y1: number; y2: number; w: number}[] = [];
  values: {x:number; y:number; value: string}[] = [];
  labels: {x:number; y:number; value: string}[] = [];
  radius = 117.5;

  private lineLength = 18;
  private lineWidth = 3;
  private secondaryAngle = 2;

  @Input() width?: number = 330;
  @Input() rotate?: number = 0;
  @Input() angleUnit? = 30;
  @Input() mode?: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.initCoordData();
    this.initCenter();
    this.defineNumber();
    this.defineLabel();
  }

  private initCoordData(): void {
    const initial = this.initFirstElement();
    const angleUnit = this.angleUnit || 30;
    const count = 360 / angleUnit;
    const steps = count * (angleUnit / this.secondaryAngle);

    for (let i = 0; i < steps; i++) {
      const angle = i * this.secondaryAngle;
      const radian = this.toRadians(angle);
      const notPointerAngle = angle % angleUnit;
      this.lines.push({
        x1: initial.x1 + (Math.sin(radian) * this.radius),
        x2: initial.x2 + (Math.sin(radian) * (this.radius - this.lineLength)),
        y1: initial.y1 + (this.radius * (1 - Math.cos(radian))),
        y2: initial.y2 + ((this.radius - this.lineLength) * (1 - Math.cos(radian))),
        w: notPointerAngle ? 1 : this.lineWidth,
      });
    }
  }
  defineNumber (): void {
    const initialValue = {
      x: 140.5,
      y: 0,
    };
    const angleUnit = this.angleUnit || 30;
    const valueRadius = 280 / 2;
    const count = 360 / angleUnit;

    for (let i = 0; i < count; i++) {
      const angle = (i * angleUnit) ;
      const radian = this.toRadians(angle);
      if (i === 0) {
        this.values.push({
          x: initialValue.x,
          y: initialValue.y,
          value: '0',
        });
      } else {
        this.values.push({
          x: initialValue.x + (Math.sin(radian) * (valueRadius)),
          y: initialValue.y + ((valueRadius) * (1 - Math.cos(radian))),
          value: angle < 100 ? `${angle}` : `${angle}`,
        });
      }
    }
  }

  defineLabel(): void {
    const r = 84;
    const initialValue = {
      x: r,
      y: 0,
    };
    const valueRadius = r;
    ['N', 'E', 'S', 'W'].forEach((item, i) => {
      const angle = (i * 90) ;
      const radian = this.toRadians(angle);
      this.labels.push({
        x: initialValue.x + (Math.sin(radian) * (valueRadius)),
        y: initialValue.y + ((valueRadius) * (1 - Math.cos(radian))),
        value: item,
      });
    });
  }

  private initCenter(): void {
    const bigStep = 3;
    const mainStep = 12;

    this.center = [
      {x1: this.radius, x2: this.radius, y1: this.centerLines(bigStep, 'start'), y2: this.centerLines(bigStep, 'end'), w: 1},
      {x1: this.centerLines(bigStep, 'start'), x2: this.centerLines(bigStep, 'end'), y1: this.radius, y2: this.radius, w: 1},

      {x1: this.radius, x2: this.radius, y1: this.centerLines(mainStep, 'start'), y2: this.centerLines(mainStep, 'end'), w: 3},
      {x1: this.centerLines(mainStep, 'start'), x2: this.centerLines(mainStep, 'end'), y1: this.radius, y2: this.radius, w: 3},
    ];
  }

  private centerLines(step: number, dir: 'start' | 'end'): number {
    return this.radius + ((this.radius / step) * (dir === 'start' ? -1 : 1));
  }

  private initFirstElement(): {x1: number; x2:number; y1: number; y2: number} {
    return {
      x1: this.radius,
      x2: this.radius,
      y1: 0,
      y2: this.lineLength,
    };
  }

  private toRadians(angle: number) {
    return angle * (Math.PI / 180);
  }
}
