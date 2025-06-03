import Overlay from "../components/OverlayCheck.tsx";
import {Overlays}  from "../data/Overlays.ts";
import type {OverlayId} from "../data/Overlays.ts";

export default function OverlayContainer({
  visibleOverlays,
}: {
  visibleOverlays: OverlayId[];
}) {
  return (
    <>
      {visibleOverlays.map(id => (
        <Overlay
          key={id}
          message={Overlays[id].message}
        />
      ))}
    </>
  );
}