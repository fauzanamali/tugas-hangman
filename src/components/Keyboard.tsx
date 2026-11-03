import clsx from "clsx";

const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled?: boolean;
}

export default function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <section className="flex flex-col items-center gap-2">
      {KEYS.map((row, index) => (
        <div key={index} className="flex gap-2">
          {row.split("").map((letter) => {
            const lowerLetter = letter.toLowerCase();
            const isInactive = inactiveLetters.includes(lowerLetter);
            const isActive = activeLetters.includes(lowerLetter);

            return (
              <button
                key={letter}
                onClick={() => onKeyboardClick(lowerLetter)}
                disabled={isInactive || isActive || disabled}
                className={clsx(
                  "border p-5 rounded-xl size-20 font-bold text-xl uppercase transition flex items-center justify-center",
                  isInactive && "bg-gray-200 text-gray-400 cursor-not-allowed",
                  isActive && "bg-blue-500 text-white cursor-not-allowed",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
}