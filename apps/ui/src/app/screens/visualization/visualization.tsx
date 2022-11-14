import React, { useEffect, useRef, useState } from 'react';
import './visualization.scss';
import { analyser, audioElement, barWidth, bufferLength } from '@constants/profile.const';
import { useParams } from 'react-router-dom';
import { SongBase } from '@models/media.model';
import { PlayingDecorator } from '@cpns/playing-decorator/playing-decorator';
import { injectHTML } from '@modules/feature.module';
import { TOP_100_ALL } from '@constants/mock.const';

let recursive: undefined | number = 0;

export const Visualization = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx: CanvasRenderingContext2D;
  let barHeight = 10;
  let x = 0;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [info, setInfo] = useState<SongBase>();
  const { songId } = useParams();

  let hue = 0;
  const getInfo = () => {
    const currentSong = TOP_100_ALL.find(e => e.id === songId);
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
    if (innerWidth >= 600) {
      animate();
    }
    return () => {
      if (innerWidth >= 600) {
        cancelAnimationFrame(recursive as number);
        recursive = undefined;
      }
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
      <PlayingDecorator className="s-info" style={{ minWidth: '300px' }} currentsong={info} />
    </div>
    <div className="lyrics-box">
      <div className="header-pai">Lời bài hát</div>
      <div className="lyrics"></div>
    </div>
  </div>;
};
