import { MouseEvent } from 'react';
import { clearInterval } from 'timers';

export class AnimationController {
  static onActivateEffect(params: MouseEvent<HTMLElement>) {
    const { clientX, clientY, currentTarget } = params;
    const rootParent = currentTarget.parentElement;
    const { x, y } = rootParent!.getBoundingClientRect();
    const animateRoot = document.createElement('div');
    animateRoot.className = 'animate-root';
    animateRoot.style.top = y + 'px';
    animateRoot.style.left = x + 'px';
    document.body.appendChild(animateRoot);
    console.log({x, y});
    let ball = { x, y, speed: 0.01, t: 0, radius: 20 };
    let points = [
      { x: ball.x, y: ball.y },
      { x: x, y: 200 },
      { x: x, y: 295 },
      { x: x, y: 0 }
    ];
    const reDrawPosition = () => {
      animateRoot.style.left = x + ball.x + 'px';
      animateRoot.style.top = ball.y + 'px';
    }
    const moveElement = () => {

      let [p0, p1, p2, p3] = points;
      let cx = (p1.x - p0.x);
      let bx = (p2.x - p1.x) - cx;
      let ax = p3.x - p0.x - cx - bx;

      let cy = (p1.y - p0.y);
      let by = (p2.y - p1.y) - cy;
      let ay = p3.y - p0.y - cy - by;

      let t = ball.t;

      //Increment t value by speed
      ball.t += ball.speed;
      //Calculate new X & Y positions of ball
      let xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
      let yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;

      if (ball.t > 1) {
        ball.t = 1;
      }

      //We draw the ball to the canvas in the new location
      ball.x = xt;
      ball.y = yt;
      reDrawPosition();
    };


    const animate = () => {
      requestAnimationFrame(animate);
      moveElement();
    }
    animate();

  }
}
