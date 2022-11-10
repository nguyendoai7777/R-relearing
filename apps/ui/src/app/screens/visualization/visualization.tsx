import { createRef, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Mp3 } from '@constants/urls.constant';
import { useAppSelector } from '@store/store';
import { mediaControlSlice } from '@store/slices/loop-state.slice';
import { selectMediaPlayer } from '@store/slices/media-player.slice';
import { selectPlayState } from '@store/slices/play-state.slice';

export const Visualization = () => {
  const audioElement = document.querySelector('audio')!;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtx = new AudioContext();
  let analyser: AnalyserNode;
  let audioSource: MediaElementAudioSourceNode;
  let ctx: CanvasRenderingContext2D;
  let bufferLength = 0;
  let dataArray: Uint8Array;
  let barWidth = 0;

  const { playing } = useAppSelector(selectPlayState);

  const SCREEN_SIZE = (innerWidth - 240 - 330 - 120);
  let barHeight = 10;
  let x = 0;

  const animate = () => {
    // requestAnimationFrame(animate);
    x = 0;
    if (ctx) {

      ctx.clearRect(0, 0, canvasRef!.current!.width, canvasRef!.current!.height);
      analyser!.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] ?? 10;
        ctx.fillStyle = 'deeppink';
        ctx.fillRect(x, canvasRef!.current!.height - barHeight, barWidth, barHeight);
        x += barWidth + 4;
        console.log({x, barWidth, barHeight});
      }
    }
  };


  useEffect(() => {
    audioElement.crossOrigin = 'anonymous';
    audioSource = audioCtx.createMediaElementSource(audioElement);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 128;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
  }, []);

  useEffect(() => {
    ctx = (canvasRef!.current!.getContext('2d')!);
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = (innerWidth - 240 - 330 - 120);
      canvasRef.current.height = 400;
    }
  }, []);

  useEffect(() => {
    ctx = (canvasRef!.current!.getContext('2d')!);
    analyser = audioCtx.createAnalyser();
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    console.log(`cay lam r`, canvasRef?.current?.width);
    barWidth = (canvasRef?.current?.width || SCREEN_SIZE) / bufferLength ;
    if (playing) {
      animate();
    }
  }, [playing]);


  return <div className="body-cc60">

    <canvas style={{
      border: '1px solid var(--tooltip-bg)'
    }} ref={canvasRef}></canvas>
  </div>;
};
