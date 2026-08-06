type CornerFrameProps = {
  className?: string;
  color?: string;
};

/**
 * Repères d'angle façon plan technique / instrument de mesure.
 * Élément signature du site : évoque le mesurage (Loi Carrez, Loi Boutin)
 * et la précision d'un contrôle de conformité.
 */
export default function CornerFrame({ className = "", color = "#1fa398" }: CornerFrameProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 26V4h22" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <path d="M118 26V4H96" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <path d="M2 94v22h22" stroke={color} strokeWidth="3" strokeLinecap="square" />
      <path d="M118 94v22H96" stroke={color} strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}
