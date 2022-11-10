import { createRef, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Mp3 } from '@constants/urls.constant';
import { useAppSelector } from '@store/store';
import { mediaControlSlice } from '@store/slices/loop-state.slice';
import { selectMediaPlayer } from '@store/slices/media-player.slice';
import { selectPlayState } from '@store/slices/play-state.slice';
import { audioContext, audioElement } from '@constants/profile.const';

export const Visualization = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let analyser: AnalyserNode;
  let audioSource: MediaElementAudioSourceNode;
  let ctx: CanvasRenderingContext2D;
  let bufferLength = 0;
  let dataArray: Uint8Array;
  let barWidth = 0;
  const SCREEN_SIZE = (innerWidth - 240 - 330 - 120);
  let barHeight = 10;
  let x = 0;
  let barColor = 'deeppink';
  let recursive = 0;
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const { playing } = useAppSelector(selectPlayState);
  const animate = () => {
    recursive = requestAnimationFrame(animate);
    x = 0;
    if (ctx) {
      ctx.clearRect(0, 0, (canvasRef?.current?.width || 0), (canvasRef?.current?.height || 0));
      analyser!.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = 'pink';
        ctx.fillRect(x, (canvasRef?.current?.height || barHeight) - barHeight - 2, barWidth, 5);
        ctx.fillStyle = barColor;
        ctx.fillRect(x, (canvasRef?.current?.height || barHeight) - barHeight, barWidth, barHeight);
        x += barWidth + 4;
      }
    }
  };


  useEffect(() => {
    audioElement.crossOrigin = 'anonymous';
    audioSource = audioContext.createMediaElementSource(audioElement);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    barWidth = (SCREEN_SIZE) / bufferLength - 4;
    audioElement.load();

    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });
    audioElement.addEventListener('timeupdate', () => {
      setCurrentTime(audioElement.currentTime);
    });
    return () => {
      cancelAnimationFrame(recursive);
    };
  }, []);

  useEffect(() => {
    ctx = (canvasRef!.current!.getContext('2d')!);
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = (innerWidth - 240 - 330 - 120);
      canvasRef.current.height = 300;
    }
  }, []);

  useEffect(() => {

    animate();
  }, [playing]);


  return <div className="body-cc60">

    <div className="visualization relative flex" onClick={() => {
      console.log('clicked');
      barColor = 'black';
      console.log(barColor);
    }}>
      <canvas style={{
        borderBottom: '1px solid var(--tooltip-bg)'
      }} ref={canvasRef}></canvas>
      <div className="duration" style={{ width: currentTime / duration * 100 + '%' }}></div>
    </div>
  </div>;
};
