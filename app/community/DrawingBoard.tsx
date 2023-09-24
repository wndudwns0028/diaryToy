"use client";
import React, { useState, useRef, MouseEvent, useEffect } from "react";
import styles from "./page.module.scss";

export default function DrawingBoard() {
  const [color, setColor] = useState<string>("black");
  const [drawing, setDrawing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [lineWidth, setLineWidth] = useState<number>(2);

  const startDrawing = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    console.log("mouseDown..!");
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const draw = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;
    if (context) {
      context.lineTo(offsetX, offsetY);
      context.strokeStyle = color;
      context.stroke();
    }
  };

  const endDrawing = () => {
    console.log("mouseUp..!");
    contextRef.current?.closePath();
    setDrawing(false);
  };

  const clearCanvas = () => {
    contextRef.current?.clearRect(
      0,
      0,
      canvasRef.current?.width || 0,
      canvasRef.current?.height || 0
    );
  };

  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  const changeLineWidth = (newWidth: number) => {
    setLineWidth(newWidth);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const image = canvas.toDataURL("/static/images/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "my_drawing.png";
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        contextRef.current = context;
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = lineWidth; // 마우스 굵기 설정
      }
    }
  }, [color, lineWidth]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button onClick={() => changeColor("black")}>검정펜</button>
          <button onClick={() => changeColor("red")}>빨간펜</button>
          <button onClick={() => changeColor("green")}>초록펜</button>
          <button onClick={() => changeColor("blue")}>파란펜</button>
        </div>
        <div>
          <button onClick={() => changeLineWidth(2)}>굵기 2</button>
          <button onClick={() => changeLineWidth(4)}>굵기 4</button>
          <button onClick={() => changeLineWidth(6)}>굵기 6</button>
        </div>
        <button onClick={clearCanvas}>초기화</button>
        <button onClick={saveImage}>저장하기</button>
      </div>
      <div
        style={{ width: "1000px", height: "100%", border: "1px solid black" }}
      >
        <canvas
          ref={canvasRef}
          width={1000}
          height={600}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
        />
      </div>
    </div>
  );
}
