<template>
  <p class="moto moto1">
    Your Comfort
  </p>
  <div class="logo">
    <canvas id="canvas" width="400" height="400" style="stroke: var(--color0);"></canvas>
    <svg id="svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <line x1="200" y1="400" x2="200" y2="0" />
      <line x1="200" y1="0" x2="0" y2="200" />
      <line x1="0" y1="200" x2="200" y2="200" />
      // x,y start position
      // rx,ry radius x and y
      // x1,y1 end position
      <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />
      <circle cx="200" cy="200" r="186" fill="none" />
    </svg>
  </div>
  <span class="brand-name">
    <span class="abcd">
      <b class="A">A</b>
      <b class="B">B</b>
      <b class="C">C</b>
      <b class="D">D</b>
    </span>
    <b class="dash">&nbsp;</b>
    <span class="sign">sign</span>
  </span>
  <p class="moto moto2">
    Our Signature Design
  </p>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import getTheme from '@/helpers/getTheme'
const theme = ref(getTheme())

onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 28;
  ctx.strokeStyle = theme.value === 'dark' ? '#fff' : '000';

  function drawOne(t) {
    ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.lineTo(200, 400 - t);
    ctx.stroke();
  }

  function drawTwo(t) {
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200 - t, t);
    ctx.stroke();
  }

  function drawThree(t) {
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(t, 200);
    ctx.stroke();
  }

  function drawFour(t) {
    ctx.beginPath();
    ctx.ellipse(200, 105, 93, 93, Math.PI / 2, 0, -Math.PI / 180 * t, true);
    ctx.stroke();
  }

  function drawFive(t) {
    ctx.beginPath();
    ctx.ellipse(200, 200, 186, 186, -Math.PI / 2, 0, -Math.PI / 180 * t, true);
    ctx.stroke();6
  }

  function one() {
    for (let i = 0; i <= 400; i++) {
      setTimeout(() => drawOne(i), i * 3);
    }
  }

  function two() {
    for (let i = 0; i <= 200; i++) {
      setTimeout(() => drawTwo(i), i * 5);
    }
  }

  function three() {
    for (let i = 0; i <= 200; i++) {
      setTimeout(() => drawThree(i), i * 4);
    }
  }

  function four() {
    for (let i = 0; i <= 180; i++) {
      setTimeout(() => drawFour(i), i * 5);
    }
  }

  function five() {
    for (let i = 0; i <= 360; i++) {
      setTimeout(() => drawFive(i), i * 7);
    }
  }

  one()
  setTimeout(() => two(), 1200);
  setTimeout(() => three(), 2200);
  setTimeout(() => four(), 3000);
  setTimeout(() => five(), 3900);
})

</script>

<style lang="scss">
.logo {
  width: 50vmin;
  height: 50vmin;
  position: relative;
  top: 2vmin;
}

#canvas, #svg {
  width: 50vmin;
  height: 50vmin;
}

#svg {
  position: absolute;
  top: 0;
  left: 0;
  stroke-width: 28px;

  stroke: #888888;
}

#canvas {
  position: relative;
  z-index: 1;

  stroke: var(--color0);
}

@keyframes span-a {
  from {
    transform: scale(20) translate(-150%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes span-b {
  from {
    transform: scale(20) translate(-125%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes span-c {
  from {
    transform: scale(20) translate(-100%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes span-d {
  from {
    transform: scale(20) translate(-75%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes span-dash {
  from {
    transform: scale(20) translate(0%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes span-sign {
  from {
    transform: scale(20) translate(300%, 100%);
    visibility: visible;
  }
  to {
    transform: scale(1);
    visibility: visible;
  }
}

/* Animation for the shining gradient effect */
@keyframes shine {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

/* Animation for the appearance effect */
@keyframes appearance {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.brand-name {
  font-size: 10vmin;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 50vmin 1fr;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 50dvh;
  transform: translateY(-42%);
  left: 0;
}

.brand-name > * {
  display: inline-flex;
  visibility: hidden;
  transform: scale(1);
  align-items: center;
}

.abcd {
  justify-content: flex-end;
}

.A {
  animation: span-a 2s linear 1s 1 normal forwards running;
}

.B {
  animation: span-b 2s linear 1.45s 1 normal forwards running;
}

.C {
  animation: span-c 2s linear 1.9s 1 normal forwards running;
}

.D {
  animation: span-d 2s linear 2.35s 1 normal forwards running;
}

.dash {
  animation: span-dash 2s linear 3.16s 1 normal forwards running;
}

.sign {
  position: relative;
  animation: span-sign 2s linear 4.42s 1 normal forwards running;
}

.moto {
  text-align: center;
  position: relative;
  opacity: 0;
  background: linear-gradient(90deg, #ff6b6b, #f06595, #845ef7, #22d3ee, #48e4c2, #ff6b6b);
  background-size: 200%;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  animation: appearance 2s linear 6.72s 1 normal forwards running, shine 6s linear infinite;
  font-size: 5vmin;
}

.moto1 {
  top: 7vmin;
}
.moto2 {
  top: -4vmin;
}
</style>