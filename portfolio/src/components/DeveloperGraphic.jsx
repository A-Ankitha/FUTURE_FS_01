export default function DeveloperGraphic() {
  return (
    <div className="developer-graphic" aria-hidden="true">
      <svg
        viewBox="0 0 520 620"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          {/* Main card gradient */}
          <linearGradient
            id="cardGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#101820" />
            <stop offset="100%" stopColor="#071014" />
          </linearGradient>

          {/* Teal glow */}
          <filter
            id="tealGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="6"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow */}
          <filter
            id="strongGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="12"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft background glow */}
          <radialGradient id="softGlow">
            <stop
              offset="0%"
              stopColor="#3ffff1"
              stopOpacity="0.20"
            />
            <stop
              offset="100%"
              stopColor="#3ffff1"
              stopOpacity="0"
            />
          </radialGradient>

          {/* Screen gradient */}
          <linearGradient
            id="screenGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#12232a"
            />
            <stop
              offset="100%"
              stopColor="#081114"
            />
          </linearGradient>
        </defs>

        {/* =====================================================
            FLOATING BACKGROUND GLOW
        ===================================================== */}

        <circle
          cx="260"
          cy="250"
          r="210"
          fill="url(#softGlow)"
        />

        {/* =====================================================
            NETWORK LINES
        ===================================================== */}

        <g
          className="graphic-network"
          fill="none"
          stroke="#3ffff1"
          strokeWidth="1"
          opacity="0.35"
        >
          <path d="M50 100 L120 145 L85 220 L155 250" />
          <path d="M120 145 L210 95 L285 135" />
          <path d="M285 135 L365 90 L430 145" />
          <path d="M365 90 L390 200 L455 235" />
          <path d="M85 220 L45 310 L125 345" />
          <path d="M155 250 L220 310 L290 280" />
          <path d="M430 145 L470 310 L400 350" />
          <path d="M290 280 L350 330 L400 350" />
        </g>

        {/* Network nodes */}

        <g
          className="graphic-nodes"
          fill="#3ffff1"
          filter="url(#tealGlow)"
        >
          <circle cx="50" cy="100" r="3" />
          <circle cx="120" cy="145" r="4" />
          <circle cx="85" cy="220" r="3" />
          <circle cx="155" cy="250" r="4" />
          <circle cx="210" cy="95" r="3" />
          <circle cx="285" cy="135" r="4" />
          <circle cx="365" cy="90" r="3" />
          <circle cx="430" cy="145" r="4" />
          <circle cx="390" cy="200" r="3" />
          <circle cx="455" cy="235" r="3" />
          <circle cx="45" cy="310" r="3" />
          <circle cx="125" cy="345" r="4" />
          <circle cx="220" cy="310" r="3" />
          <circle cx="290" cy="280" r="4" />
          <circle cx="350" cy="330" r="3" />
          <circle cx="400" cy="350" r="4" />
          <circle cx="470" cy="310" r="3" />
        </g>

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <rect
          x="48"
          y="55"
          width="424"
          height="510"
          rx="30"
          fill="url(#cardGradient)"
          stroke="#3ffff1"
          strokeOpacity="0.65"
          strokeWidth="1.5"
        />

        {/* Card glow */}

        <rect
          x="48"
          y="55"
          width="424"
          height="510"
          rx="30"
          fill="none"
          stroke="#3ffff1"
          strokeOpacity="0.15"
          strokeWidth="8"
          filter="url(#strongGlow)"
        />

        {/* =====================================================
            TERMINAL
        ===================================================== */}

        <rect
          x="78"
          y="85"
          width="150"
          height="100"
          rx="14"
          fill="#081114"
          stroke="#3ffff1"
          strokeOpacity="0.35"
        />

        <circle
          cx="95"
          cy="103"
          r="4"
          fill="#3ffff1"
        />

        <circle
          cx="108"
          cy="103"
          r="4"
          fill="#3ffff1"
          opacity="0.5"
        />

        <circle
          cx="121"
          cy="103"
          r="4"
          fill="#3ffff1"
          opacity="0.25"
        />

        <text
          x="94"
          y="130"
          fill="#8da5a8"
          fontSize="12"
          fontFamily="monospace"
        >
          &gt; build
        </text>

        <text
          x="94"
          y="149"
          fill="#3ffff1"
          fontSize="12"
          fontFamily="monospace"
        >
          &gt; debug
        </text>

        <text
          x="94"
          y="168"
          fill="#8da5a8"
          fontSize="12"
          fontFamily="monospace"
        >
          &gt; repeat_
        </text>

        {/* =====================================================
            CODE ICON
        ===================================================== */}

        <g
          className="code-icon"
          transform="translate(365 115)"
          stroke="#3ffff1"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-28 0 L-48 20 L-28 40" />
          <path d="M28 0 L48 20 L28 40" />
          <path d="M10 -2 L-10 42" />
        </g>

        {/* =====================================================
            CHARACTER
        ===================================================== */}

        <g className="developer-character">

          {/* Hair */}
          <path
            d="
              M205 225
              C195 175 230 135 280 140
              C330 142 350 180 345 225
              L330 260
              L215 260
              Z
            "
            fill="#18262d"
          />

          {/* Head */}
          <ellipse
            cx="275"
            cy="225"
            rx="62"
            ry="72"
            fill="#f0c7aa"
          />

          {/* Hair front */}
          <path
            d="
              M215 210
              C215 160 250 145 285 155
              C320 165 335 190 330 220
              C312 200 300 190 280 185
              C260 210 240 220 215 225
              Z
            "
            fill="#17232a"
          />

          {/* Headphones */}
          <path
            d="
              M210 225
              C205 165 240 130 280 130
              C325 130 350 165 345 225
            "
            fill="none"
            stroke="#3ffff1"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Headphone cups */}
          <rect
            x="201"
            y="212"
            width="22"
            height="48"
            rx="10"
            fill="#0c1519"
            stroke="#3ffff1"
            strokeWidth="4"
          />

          <rect
            x="327"
            y="212"
            width="22"
            height="48"
            rx="10"
            fill="#0c1519"
            stroke="#3ffff1"
            strokeWidth="4"
          />

          {/* Eyes */}
          <ellipse
            cx="253"
            cy="226"
            rx="7"
            ry="9"
            fill="#11181c"
          />

          <ellipse
            cx="297"
            cy="226"
            rx="7"
            ry="9"
            fill="#11181c"
          />

          {/* Eye highlights */}
          <circle
            cx="255"
            cy="223"
            r="2"
            fill="#fff"
          />

          <circle
            cx="299"
            cy="223"
            r="2"
            fill="#fff"
          />

          {/* Smile */}
          <path
            d="M264 250 Q275 258 286 250"
            fill="none"
            stroke="#9c5f56"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Hoodie */}
          <path
            d="
              M205 285
              C220 270 240 265 275 265
              C310 265 330 270 345 285
              L375 405
              L175 405
              Z
            "
            fill="#101b21"
            stroke="#3ffff1"
            strokeOpacity="0.3"
          />

          {/* Hoodie strings */}
          <path
            d="M258 282 L250 320"
            stroke="#3ffff1"
            strokeWidth="2"
          />

          <path
            d="M292 282 L300 320"
            stroke="#3ffff1"
            strokeWidth="2"
          />

          {/* Developer symbol */}
          <g
            transform="translate(275 335)"
            stroke="#3ffff1"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M-12 -8 L-22 0 L-12 8" />
            <path d="M12 -8 L22 0 L12 8" />
            <path d="M5 -10 L-5 10" />
          </g>

          {/* Laptop */}
          <rect
            x="160"
            y="365"
            width="230"
            height="105"
            rx="10"
            fill="url(#screenGradient)"
            stroke="#3ffff1"
            strokeWidth="2"
          />

          <rect
            x="175"
            y="380"
            width="200"
            height="70"
            rx="5"
            fill="#071014"
          />

          {/* Laptop code */}
          <g
            fontFamily="monospace"
            fontSize="9"
          >
            <text
              x="190"
              y="402"
              fill="#3ffff1"
            >
              &gt; const idea = true;
            </text>

            <text
              x="190"
              y="418"
              fill="#6c8589"
            >
              &gt; build(idea)
            </text>

            <text
              x="190"
              y="434"
              fill="#3ffff1"
            >
              &gt; ship();
            </text>
          </g>

          {/* Laptop base */}
          <path
            d="
              M145 470
              L405 470
              L425 480
              L125 480
              Z
            "
            fill="#172329"
            stroke="#3ffff1"
            strokeOpacity="0.4"
          />

        </g>

        {/* =====================================================
            CURRENTLY BUILDING
        ===================================================== */}

        <rect
          x="78"
          y="430"
          width="364"
          height="58"
          rx="14"
          fill="#081114"
          stroke="#3ffff1"
          strokeOpacity="0.4"
        />

        <text
          x="260"
          y="452"
          textAnchor="middle"
          fill="#6d898d"
          fontSize="9"
          letterSpacing="3"
          fontFamily="monospace"
        >
          CURRENTLY BUILDING
        </text>

        <text
          x="260"
          y="474"
          textAnchor="middle"
          fill="#f2f7f7"
          fontSize="14"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          Web
          <tspan fill="#3ffff1"> • </tspan>
          AI
          <tspan fill="#3ffff1"> • </tspan>
          Security
        </text>

        {/* =====================================================
            STATUS BAR
        ===================================================== */}

        <rect
          x="78"
          y="510"
          width="364"
          height="34"
          rx="17"
          fill="#0c171b"
          stroke="#3ffff1"
          strokeOpacity="0.45"
        />

        <circle
          cx="97"
          cy="527"
          r="5"
          fill="#3ffff1"
          filter="url(#tealGlow)"
        />

        <text
          x="112"
          y="531"
          fill="#a9bbbd"
          fontSize="10"
          fontFamily="monospace"
        >
          turning curiosity into useful software
        </text>
      </svg>
    </div>
  );
}