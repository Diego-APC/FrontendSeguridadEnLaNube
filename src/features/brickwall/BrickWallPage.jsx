import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DiegoPinzon from '../../assets/DiegoPinzon.jpeg';
import SantiagoGutierrez from '../../assets/SantigoGutierrez.jpeg';

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

  const cardStyle = {
    textAlign: 'center', color: '#fff',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    width: 'clamp(140px, 20vw, 200px)'
  };

  const photoStyle = {
    width: 110, height: 110, borderRadius: '50%',
    objectFit: 'cover', border: '3px solid #00ff88',
    boxShadow: '0 0 16px #00ff8866', marginBottom: 12
  };

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
        {/* Contenido detrás del muro */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          zIndex: 0, gap: 20
        }}>
          {/* Universidad */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              color: '#00ff88', fontSize: 'clamp(16px, 2.5vw, 26px)',
              fontWeight: 'bold', textShadow: '0 0 12px #00ff88', letterSpacing: 2
            }}>
              Universidad de Cundinamarca
            </div>
            <div style={{ color: '#aaa', fontSize: 'clamp(11px, 1.4vw, 15px)', marginTop: 4 }}>
              Sede Chía
            </div>
          </div>

          {/* Tres columnas */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 'clamp(16px, 5vw, 60px)',
            width: '100%', padding: '0 24px'
          }}>
            {/* Diego — izquierda */}
            <div style={cardStyle}>
              <img src={DiegoPinzon} alt="Diego" style={photoStyle} />
              <div style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 1.5vw, 15px)' }}>
                Diego Alexander<br />Pinzón Camargo
              </div>
              <div style={{ color: '#00ff88', fontSize: 'clamp(10px, 1.2vw, 13px)', marginTop: 6 }}>
                Desarrollo Frontend
              </div>
              <div style={{ color: '#aaa', fontSize: 'clamp(9px, 1vw, 12px)', marginTop: 3 }}>
                Ingeniero de Sistemas<br />y Computación
              </div>
            </div>

            {/* SSH — centro */}
            <div style={{ textAlign: 'center', lineHeight: 2, minWidth: 180 }}>
              <div style={{ color: '#aaa', fontSize: '0.75em' }}>acceso SSH al laboratorio</div>
              <div style={{ color: '#00ff88', fontSize: 'clamp(12px, 1.5vw, 16px)' }}>ssh estudiante</div>
              <div style={{ color: '#aaa', fontSize: '0.75em', marginTop: 8 }}>contraseña</div>
              <div style={{ color: '#00ff88', fontSize: 'clamp(12px, 1.5vw, 16px)' }}>laboratorioSeguridad2026</div>
            </div>

            {/* Santiago — derecha */}
            <div style={cardStyle}>
              <img src={SantiagoGutierrez} alt="Santiago" style={photoStyle} />
              <div style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 1.5vw, 15px)' }}>
                Julián Santiago<br />Gutiérrez Rodríguez
              </div>
              <div style={{ color: '#00ff88', fontSize: 'clamp(10px, 1.2vw, 13px)', marginTop: 6 }}>
                Desarrollo Backend
              </div>
              <div style={{ color: '#aaa', fontSize: 'clamp(9px, 1vw, 12px)', marginTop: 3 }}>
                Ingeniero de Sistemas<br />y Computación
              </div>
            </div>
          </div>
        </div>

        {/* Muro de ladrillos */}
        <div ref={wallRef} style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%', zIndex: 1
        }} />

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