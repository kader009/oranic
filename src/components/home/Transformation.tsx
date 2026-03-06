'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const Transformation = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        ref={containerRef}
        className="relative w-full aspect-1440/644 md:h-[644px] cursor-ew-resize select-none"
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* Full Background Image (After) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/transform.svg"
            alt="Transformation After"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Labels Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Before Label */}
          <div className="absolute md:flex hidden items-center justify-center bg-white w-[99.75px] h-[50px] top-[560px] left-[66.5px] px-[24px] py-[8px] gap-[10px] rounded-[8px] opacity-100">
            <span className="text-primary font-medium capitalize text-[28px]">
              Before
            </span>
          </div>

          {/* After Label */}
          <div className="absolute md:flex hidden items-center justify-center bg-white w-[89.78px] h-[50px] top-[560px] left-[1039.08px] px-[24px] py-[8px] gap-[10px] rounded-[8px] opacity-100">
            <span className="text-primary font-medium capitalize text-[28px]">
              After
            </span>
          </div>

          {/* Mobile Labels (Fallback) */}
          <div className="md:hidden absolute inset-x-0 bottom-4 flex justify-between px-6">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-[8px] text-primary font-medium capitalize text-[14px]">
              Before
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-[8px] text-primary font-medium capitalize text-[14px]">
              After
            </div>
          </div>
        </div>

        {/* Left Overlay (Before) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full" style={{ width: '100vw' }}>
            <Image
              src="/assets/images/transform2.svg"
              alt="Transformation Before"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="relative h-full w-[40px] md:w-[121px]">
            <Image
              src="/assets/images/Before After Slider.svg"
              alt="Slider Handle"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
