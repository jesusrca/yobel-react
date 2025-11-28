function Frame() {
  return (
    <div className="absolute h-[879px] left-[-379px] top-[120px] w-[2198px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2198 879">
        <g id="Frame 50">
          <ellipse cx="1099" cy="346.5" fill="url(#paint0_linear_92_1262)" id="Ellipse 9" rx="1099" ry="346.5" />
          <ellipse cx="1099" cy="439.5" fill="url(#paint1_linear_92_1262)" id="Ellipse 7" rx="1099" ry="346.5" />
          <ellipse cx="1099" cy="532.5" fill="url(#paint2_linear_92_1262)" id="Ellipse 8" rx="1099" ry="346.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_92_1262" x1="1099" x2="1099" y1="-124.5" y2="324">
            <stop offset="0.0961538" stopColor="#F0DE32" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_92_1262" x1="1099" x2="1099" y1="-31.5" y2="417">
            <stop offset="0.0961538" stopColor="#F0DE32" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_92_1262" x1="1099" x2="1099" y1="61.5" y2="510">
            <stop offset="0.0961538" stopColor="#F0DE32" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Circulos() {
  return (
    <div className="absolute contents left-[-379px] top-[120px]" data-name="Círculos">
      <Frame />
    </div>
  );
}

export default function PreFooter() {
  return (
    <div className="relative size-full" data-name="pre-Footer">
      <Circulos />
    </div>
  );
}