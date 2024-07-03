import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="text-5xl sm:text-3xl font-bold flex justify-center items-center my-16">
      <div ref={textRef} className="max-w-[800px]">
        Fish out the Brand names in a chunk of text
      </div>
    </div>
  );
}

export default Hero;
