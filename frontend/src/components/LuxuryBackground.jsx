import { useEffect, useRef, useState } from "react";

export default function LuxuryBackground() {
  const codeCanvasRef = useRef(null);
  const fxCanvasRef = useRef(null);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    window.removeEventListener("scroll", handleScroll);

    const checkPerformance = () => {
      const cores = navigator.hardwareConcurrency || 4;
      const memory = navigator.deviceMemory || 4;
      setIsLowPerformance(cores <= 2 || memory <= 2);
    };
    checkPerformance();

    const codeCanvas = codeCanvasRef.current;
    const fxCanvas = fxCanvasRef.current;

    const codeCtx = codeCanvas.getContext("2d");
    const fxCtx = fxCanvas.getContext("2d");

    let width, height;
    let streams = [];
    let ripples = [];
    let cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrame;

    const snippets = [
      "const optimize = () => true;",
      "SELECT * FROM production;",
      "class Engine { init(); }",
      "git push origin main",
      "docker compose up",
      "let dp = Array(n).fill(0);",
      "if(system){ evolve(); }",
      "npm run build",
      "while(alive){ code(); }",
      "#include <bits/stdc++.h>",
    ];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      codeCanvas.width = fxCanvas.width = width;
      codeCanvas.height = fxCanvas.height = height;

      initStreams();
    }

    function initStreams() {
      streams = [];
      codeCtx.font = "14px monospace";

      const rowHeight = 70;
      const rows = Math.ceil(height / rowHeight);

      for (let i = 0; i < rows; i++) {
        const y = i * rowHeight + 40;
        const itemsPerRow = isLowPerformance ? 1 : 2;

        for (let j = 0; j < itemsPerRow; j++) {
          const text = snippets[Math.floor(Math.random() * snippets.length)];
          const textWidth = codeCtx.measureText(text).width;

          streams.push({
            text,
            width: textWidth,
            x: Math.random() * width,
            y,
            speed: 0.15 + Math.random() * 0.2,
            direction: i % 2 === 0 ? -1 : 1,
            depth: 0.9 + Math.random() * 0.2,
            opacity: 0.3 + Math.random() * 0.3,
            color: [
              "rgba(139,92,246,1)",
              "rgba(56,189,248,1)",
              "rgba(20,184,166,1)",
              "rgba(99,102,241,1)",
            ][Math.floor(Math.random() * 4)],
          });
        }
      }
    }

    function drawCode() {
      const fadeFactor = Math.max(1 - scrollY / 600, 0.3);

      codeCtx.clearRect(0, 0, width, height);
      codeCtx.font = "14px monospace";

      streams.forEach((code) => {
        codeCtx.save();
        codeCtx.globalAlpha = code.opacity * fadeFactor;
        codeCtx.fillStyle = code.color;
        codeCtx.shadowColor = code.color;
        codeCtx.shadowBlur = 12;
        codeCtx.scale(code.depth, code.depth);

        const scaledX = code.x / code.depth;
        const scaledY = code.y / code.depth;
        codeCtx.fillText(code.text, scaledX, scaledY);
        codeCtx.restore();

        code.x += code.speed * code.direction;

        if (code.direction === -1 && code.x < -code.width - 50) {
          code.x = width + 50;
        }
        if (code.direction === 1 && code.x > width + 50) {
          code.x = -code.width - 50;
        }
      });

      const gradient = codeCtx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(10,10,15,1)");
      gradient.addColorStop(0.15, "rgba(10,10,15,0)");
      gradient.addColorStop(0.85, "rgba(10,10,15,0)");
      gradient.addColorStop(1, "rgba(10,10,15,1)");
      codeCtx.fillStyle = gradient;
      codeCtx.fillRect(0, 0, width, height);
    }

    function drawFX() {
      if (isLowPerformance) return;

      fxCtx.clearRect(0, 0, width, height);

      ripples.forEach((r, index) => {
        fxCtx.beginPath();
        fxCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        fxCtx.strokeStyle = `rgba(139,92,246,${r.alpha})`;
        fxCtx.lineWidth = 2;
        fxCtx.stroke();

        r.radius += 2.5;
        r.alpha -= 0.01;
        if (r.alpha <= 0) ripples.splice(index, 1);
      });

      const gradient = fxCtx.createRadialGradient(
        cursor.x,
        cursor.y,
        0,
        cursor.x,
        cursor.y,
        70,
      );
      gradient.addColorStop(0, "rgba(99,102,241,0.6)");
      gradient.addColorStop(0.4, "rgba(79,70,229,0.18)");
      gradient.addColorStop(1, "rgba(15,23,42,0)");
      fxCtx.fillStyle = gradient;
      fxCtx.beginPath();
      fxCtx.arc(cursor.x, cursor.y, 70, 0, Math.PI * 2);
      fxCtx.fill();
    }

    function animate() {
      drawCode();
      drawFX();
      animationFrame = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const handleClick = (e) => {
      if (!isLowPerformance)
        ripples.push({ x: e.clientX, y: e.clientY, radius: 0, alpha: 0.5 });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <canvas
        ref={codeCanvasRef}
        className="fixed top-0 left-0 w-full h-full z-[-3]"
      />
      <canvas
        ref={fxCanvasRef}
        className="fixed top-0 left-0 w-full h-full z-[-2]"
      />
      <div className="fixed inset-0 backdrop-blur-[1.5px] bg-[#05070d59] z-[-1]" />
    </>
  );
}
