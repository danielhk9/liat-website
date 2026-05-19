export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Kitchen checkerboard floor */}
      <div
        className="absolute inset-0"
        style={{
          background: "repeating-conic-gradient(#fff8ec 0% 25%, #fde8b4 0% 50%) 0 0 / 72px 72px",
        }}
      />
      {/* Centre glow so hero content stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 130% 90% at 50% 35%, rgba(255,255,255,0.65) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
