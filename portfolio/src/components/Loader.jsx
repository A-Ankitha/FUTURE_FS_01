import { useEffect, useState } from "react";
import "./Loader.css";

const INTRO_TIME = 700;
const REVEAL_TIME = 2400;
const HOLD_TIME = 350;
const EXIT_TIME = 800;

const TOTAL_TIME =
  INTRO_TIME +
  REVEAL_TIME +
  HOLD_TIME +
  EXIT_TIME;

const getWavePoints = (progress) => {
  /*
    SVG viewBox:
    0 0 1000 220

    The word occupies roughly the vertical range
    around the center of this viewBox.

    Progress:
      0   = wave starts at bottom
      50  = wave reaches middle
      100 = wave goes above the entire word
  */

  const baseY = 220 - (progress / 100) * 260;

  /*
    Small vertical variations create the liquid edge.
  */
  return `
    0,${baseY + 5}
    100,${baseY - 1}
    200,${baseY + 4}
    300,${baseY - 3}
    400,${baseY + 4}
    500,${baseY - 1}
    600,${baseY + 4}
    700,${baseY - 3}
    800,${baseY + 4}
    900,${baseY - 1}
    1000,${baseY + 3}

    1000,260
    0,260
  `;
};

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const start = performance.now();
    let frame;

    const animate = (now) => {
      const elapsed = now - start;

      if (elapsed < INTRO_TIME) {
        setPhase("intro");
        setProgress(0);
      } else if (elapsed < INTRO_TIME + REVEAL_TIME) {
        setPhase("reveal");

        const revealElapsed =
          elapsed - INTRO_TIME;

        const raw =
          Math.min(
            revealElapsed / REVEAL_TIME,
            1
          );

        const eased =
          1 - Math.pow(1 - raw, 1.1);

        setProgress(
          Math.round(eased * 100)
        );
      } else if (
        elapsed <
        INTRO_TIME +
          REVEAL_TIME +
          HOLD_TIME
      ) {
        setPhase("complete");
        setProgress(100);
      } else if (elapsed < TOTAL_TIME) {
        setPhase("exit");
        setProgress(100);
      } else {
        setProgress(100);
        setPhase("exit");

        setTimeout(() => {
          onComplete();
        }, 50);

        return;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [onComplete]);

  const wavePoints = getWavePoints(progress);

  return (
    <div
      className={`loader loader--${phase}`}
      role="status"
      aria-label={`Loading portfolio ${progress}%`}
    >
      <div className="loader-inner">

        <svg
          className="loader-logo"
          viewBox="0 0 1000 220"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>

            {/* -------------------------------------
                WAVE CLIP
            ------------------------------------- */}

            <clipPath id="ankithaWave"
              clipPathUnits="userSpaceOnUse"
            >
              <polygon
                points={wavePoints}
              />
            </clipPath>

            {/* -------------------------------------
                SUBTLE TEAL GLOW
            ------------------------------------- */}

            <filter
              id="tealGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

          </defs>


          {/* =====================================
              BASE WORD
          ===================================== */}

          <text
            className="loader-svg-text loader-svg-base"
            x="500"
            y="160"
            textAnchor="middle"
          >
            ANKITHA
          </text>


          {/* =====================================
              TEAL LIQUID WORD
          ===================================== */}

          <g
            clipPath="url(#ankithaWave)"
            className="loader-svg-liquid"
          >
            <text
              className="loader-svg-text loader-svg-teal"
              x="500"
              y="160"
              textAnchor="middle"
              filter="url(#tealGlow)"
            >
              ANKITHA
            </text>
          </g>

        </svg>


        {/* =====================================
            LOADING COUNTER
        ===================================== */}

        <div className="loader-meta">

          <span>
            loading...
          </span>

          <span className="loader-progress">
            {progress} %
          </span>

        </div>

      </div>
    </div>
  );
}