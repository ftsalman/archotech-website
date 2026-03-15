import React, { useEffect, useRef } from 'react'

export const useScroll = () => {
 const elRef = useRef(null);
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // Allow vertical scroll to move horizontally instead
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);
  return elRef;
}
