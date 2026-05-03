import "./RadarRing.css";

export default function RadarRing() {
  return (
    <div className="radar-wrap">
      {/* Concentric rings */}
      <div className="radar-ring r1" />
      <div className="radar-ring r2" />
      <div className="radar-ring r3" />

      {/* Crosshairs */}
      <div className="radar-cross h" />
      <div className="radar-cross v" />

      {/* Compass ticks */}
      <div className="radar-tick n" />
      <div className="radar-tick s" />
      <div className="radar-tick e" />
      <div className="radar-tick w" />

      {/* Center dot */}
      <div className="radar-center" />

      {/* Rotating sweep arm + trail */}
      <div className="radar-sweep-wrap">
        <div className="radar-sweep-arm" />
        <div className="radar-sweep-trail" />
      </div>
    </div>
  );
}
