import { useState } from "react";

interface FlashCardProps {
  term: string;
  definition: string;
}

const FlashCard = ({ term, definition }: FlashCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
 
    <div
      className="cursor-pointer h-36"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      {/*
        relative              → parent for absolute children
        w-full h-full         → fills the perspective container
        transition-transform  → animates the rotation smoothly
        duration-500          → 500ms flip speed
        style transform-style → preserves 3D for children
        rotateY(180deg)       → flips when .flipped is true
      */}
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — Term */}
        {/*
          absolute + inset-0    → covers full card area
          backface-hidden       → hides this face when flipped to back
          rounded-2xl           → rounded card corners
          flex items-center     → centers content vertically
          justify-center        → centers content horizontally
        */}
        <div
          className="absolute inset-0 rounded-2xl border border-green-200 bg-green-50 flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
         
          <p className="text-center font-semibold text-slate-800 text-lg">
            {term}
          </p>
          <p className="mt-3 text-xs text-slate-400">Click to reveal</p>
        </div>

        {/* BACK — Definition */}
        {/*
          rotateY(180deg) on the back face means:
          when parent rotates 180deg, back comes to front
          when parent is at 0deg, back is hidden behind front
        */}
        <div
          className="absolute inset-0 rounded-2xl border border-green-300 bg-green-100 flex flex-col items-center justify-center p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-green-500 mb-2">
            Definition
          </p>
          <p className="text-center text-sm leading-relaxed text-slate-700">
            {definition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;