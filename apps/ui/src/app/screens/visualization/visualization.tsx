import { createRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Mp3 } from '@constants/urls.constant';

export const Visualization = () => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [audioUrl] = useState('');
  const audioElement = new Audio();
  audioElement.crossOrigin = 'anonymous';
  const audioCtx = new AudioContext();
  const audioSource = audioCtx.createMediaElementSource(audioElement);
  const analyser = audioCtx.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  let barWidth = (innerWidth - 240 - 330 - 120) / bufferLength - 3;
  let barHeight = 10;
  let x = 0;

  const animate = () => {
    requestAnimationFrame(animate);
    x = 0;
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef!.current!.width, canvasRef!.current!.height);
      analyser.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = 'deeppink';
        ctx.fillRect(x, canvasRef!.current!.height - barHeight, barWidth, barHeight);
        x += barWidth + 4;
      }
    }
  };

  useEffect(() => {
    setCtx(canvasRef!.current!.getContext('2d')!);
    audioElement.src = Mp3.TraiTimTonThuong.url;
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = (innerWidth - 240 - 330 - 120);
      canvasRef.current.height = 400;
    }
    if (ctx) {

      // animate();
      audioElement.play();
      animate();
      console.log('playde');
    }
  }, [ctx]);

  const playSound = () => {
    void audioElement.play();

  };
  const pauseSound = () => {
    audioElement.pause();
  };
  return <div className="body-cc60">

    <canvas style={{
      border: '1px solid var(--tooltip-bg)'
    }} ref={canvasRef}></canvas>
    <div>
      <Button variant="contained" onClick={playSound}>Play</Button>
      <Button variant="contained" onClick={pauseSound}>Pause</Button>
    </div>
  </div>;
};
