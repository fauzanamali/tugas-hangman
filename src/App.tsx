import { useState } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  const [currentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)].toLowerCase();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = selectedLetters.filter(
    (letter) => !currentWord.includes(letter)
  );

 
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter.toLowerCase()));

  const addLetter = (letter: string) => {
    if (selectedLetters.includes(letter) || isLoser || isWinner) return;
    setSelectedLetters((prev) => [...prev, letter]);
  };

  return (
    <section className="flex flex-col items-center gap-10 p-6">
    
      <div className="text-3xl font-bold text-center">
        {isWinner && "You win, refresh and try again!"}
        {isLoser && "Nice try, refresh and try again!"}
      </div>

      <HangmanDraw attempt={incorrectLetters.length} />

      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        reveal={isLoser}
        isWinner={isWinner}
      />

      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetters}
        activeLetters={selectedLetters.filter((letter) =>
          currentWord.includes(letter)
        )}
        disabled={isWinner || isLoser}
      />
    </section>
  );
}

export default App;