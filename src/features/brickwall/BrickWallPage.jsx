import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const BrickWallPage = () => {
  const wallRef = useRef(null);
  const navigate = useNavigate();

  const buildWall = () => {
    const wall = wallRef.current;
    if (!wall) return;
    wall.innerHTML = '';
    const W = window.innerWidth;
    const H = window.innerHeight;
    const bW = 72, bH = 28, gap = 3;
    const cols = Math.ceil(W / (bW + gap)) + 2;
    const rows = Math.ceil(H / (bH + gap)) + 2;

    for (let r = 0; r < rows; r++) {
      const offset = (r % 2 === 0) ? 0 : (bW + gap) / 2;
      for (let c = 0; c < cols; c++) {
        const brick = document.createElement('div');
        brick.className = 'brick';
        brick.style.cssText = `
          position: absolute;
          width: ${bW}px; height: ${bH}px;
          left: ${c * (bW + gap) - offset}px;
          top: ${r * (bH + gap)}px;
          background: #8B4513;
          border: 2px solid #5C2E00;
          border-radius: 3px;
          cursor: pointer;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3);
          --rot: ${(Math.random() * 30 - 15).toFixed(1)}deg;
        `;
        brick.addEventListener('click', () => dropBrick(brick));
        wall.appendChild(brick);
      }
    }
  };

  const dropBrick = (brick) => {
    brick.style.animation = 'brickFall 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards';
    brick.addEventListener('animationend', () => brick.remove(), { once: true });
  };

  useEffect(() => {
    buildWall();
    window.addEventListener('resize', buildWall);
    return () => window.removeEventListener('resize', buildWall);
  }, []);

  return (
    <>
      <style>{`
        @keyframes brickFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          30%  { transform: translateY(20px) rotate(var(--rot)); opacity: 1; }
          100% { transform: translateY(120vh) rotate(calc(var(--rot) * 4)); opacity: 0; }
        }
        .brick:hover { background: #a0522d !important; }
      `}</style>

      <div style={{
        width: '100vw', height: '100vh',
        background: '#1a1a2e',
        position: 'fixed', top: 0, left: 0,
        overflow: 'hidden', fontFamily: 'monospace'
      }}>
        {/* Texto secreto detrás */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#00ff88', textAlign: 'center',
          lineHeight: 2, zIndex: 0,
          textShadow: '0 0 10px #00ff88',
          fontSize: 'clamp(12px, 2vw, 18px)'
        }}>
          <div style={{ color: '#aaa', fontSize: '0.8em' }}>acceso SSH al laboratorio</div>
          <div>ssh estudiante</div>
          <div style={{ color: '#aaa', fontSize: '0.8em', marginTop: 8 }}>contraseña</div>
          <div>laboratorioSeguridad2026</div>
        </div>

        {/* Muro de ladrillos */}
        <div ref={wallRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
    

        {/* Hint */}
        <div style={{
          position: 'fixed', bottom: 16, left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.3)', fontSize: 12, zIndex: 100
        }}>
          haz clic en los ladrillos
        </div>
      </div>
    </>
  );
};