"use client";

/**
 * Fixed film grain — analog newsprint feel. Sits at z-index 1; shell content uses z-index 2+.
 */
export function GrainOverlay() {
  return (
    <>
      <svg
        className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="easeysGrain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
      </svg>
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.16] mix-blend-multiply"
        style={{ filter: "url(#easeysGrain)" }}
        aria-hidden
      />
    </>
  );
}
