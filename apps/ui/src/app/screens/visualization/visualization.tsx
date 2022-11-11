import React, { useEffect, useRef, useState } from 'react';
import './visualization.scss';
import { useAppSelector } from '@store/store';
import { selectMediaPlayer } from '@store/slices/media-player.slice';
import { selectPlayState } from '@store/slices/play-state.slice';
import { analyser, audioElement, barWidth, bufferLength, dataArray, SCREEN_SIZE } from '@constants/profile.const';
import { useParams } from 'react-router-dom';
import { SongBase } from '@models/media.model';
import { PlayingDecorator } from '@cpns/playing-decorator/playing-decorator';

let recursive: undefined | number = 0;

export const Visualization = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx: CanvasRenderingContext2D;
  let barHeight = 10;
  let x = 0;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [info, setInfo] = useState<SongBase>();
  const { playing } = useAppSelector(selectPlayState);
  const { songId } = useParams();

  const { currentList } = useAppSelector(selectMediaPlayer);
  let hue = 0;
  const getInfo = () => {
    const currentSong = currentList.find(e => e.id === songId);
    setInfo(currentSong);
  };

  const animate = () => {
    x = 0;
    hue++;
    recursive = requestAnimationFrame(animate);
    if (ctx) {
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, (canvasRef?.current?.width || 0), (canvasRef?.current?.height || 0));
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.fillRect(x, (canvasRef?.current?.height || barHeight) - barHeight - 2, barWidth, 5);
        ctx.fillStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.fillRect(x, (canvasRef?.current?.height || barHeight) - dataArray[i], barWidth, (canvasRef?.current?.height || barHeight));
        x += barWidth + 4;
      }
    }
  };


  useEffect(() => {
    getInfo();
    ctx = (canvasRef!.current!.getContext('2d')!);
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = 820;
      canvasRef.current.height = 300;
    }
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });
    audioElement.addEventListener('timeupdate', () => {
      setCurrentTime(audioElement.currentTime);
    });
    animate();
    return () => {
      cancelAnimationFrame(recursive as number);
      recursive = undefined;
    };
  }, []);



  return <div className="body-cc60">

    <div className="flex s-detail justify-between">
      <div className="visualization relative flex">
        <canvas style={{
          height: '300px',
          borderBottom: '1px solid var(--tooltip-bg)'
        }} ref={canvasRef}></canvas>
        <div className="duration" style={{ width: currentTime / duration * 100 + '%' }}></div>
      </div>
      <PlayingDecorator className="s-info" />
    </div>
  </div>;
};
