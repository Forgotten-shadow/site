// NfaLogo.tsx
interface NfaLogoProps {
  className?: string;
  size?: number;
}

export function NfaLogo({ className = '', size = 48 }: NfaLogoProps) {
  return (
    <img
      src="../assets/5235948a4a87c728412185749774b6e1bd69eb3e.png" // Берем картинку из папки public
      alt="Nexus Finance Advisory"
      width={size}
      height={size}
      className={`rounded-lg object-cover ${className}`}
    />
  );
}