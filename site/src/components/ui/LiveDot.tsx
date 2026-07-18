export default function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`live-dot ${className}`}
      aria-label="Live data indicator"
      role="status"
    />
  );
}
