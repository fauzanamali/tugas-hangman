interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  reveal?: boolean;
  isWinner?: boolean;
}

function HangmanWord({
  word,
  selectedLetters,
  reveal = false,
  isWinner = false,
}: HangmanWordProps) {
  return (
    <section className="flex gap-6">
      {word.split("").map((letter, index) => {
        const lowerLetter = letter.toLowerCase();
        const isGuessed = selectedLetters.includes(lowerLetter);
        const isVisible = isGuessed || reveal;

        // Pewarnaan huruf berdasarkan kondisi game
        let letterColor = "text-black";
        if (isWinner) {
          letterColor = "text-green-500";
        } else if (reveal && !isGuessed) {
          letterColor = "text-red-500";
        }

        return (
          <span
            key={index}
            className="text-5xl font-semibold mx-2 uppercase border-b-4 border-black pb-2"
          >
            <span
              className={`
                ${isVisible ? "visible" : "invisible"}
                ${letterColor}
              `}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;