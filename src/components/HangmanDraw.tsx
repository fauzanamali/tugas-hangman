interface HangmanDrawProps {
  attempt: number;
}

const HangmanHead = () => (
  <div key="head" className="rounded-full border-[6px] border-black w-15 h-15 absolute -right-6 top-11" />
);
const HangmanBody = () => (
  <div key="body" className="bg-black h-32 w-2 absolute right-0 top-25" />
);
const HangmanRightArm = () => (
  <div key="r-arm" className="bg-black h-2 w-26 absolute -right-24 top-30 -rotate-25" />
);
const HangmanLeftArm = () => (
  <div key="l-arm" className="bg-black h-2 w-26 absolute left-46 top-30 rotate-25" />
);
const HangmanRightLeg = () => (
  <div key="r-leg" className="bg-black h-2 w-26 absolute -right-20 top-64 rotate-50" />
);
const HangmanLeftLeg = () => (
  <div key="l-leg" className="bg-black h-2 w-26 absolute left-50 top-64 -rotate-50" />
);

const HangmanFullBody = () => [
  <HangmanHead />,
  <HangmanBody />,
  <HangmanRightArm />,
  <HangmanLeftArm />,
  <HangmanRightLeg />,
  <HangmanLeftLeg />,
];

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <section className="relative">
      {HangmanFullBody().slice(0, attempt)}

      <div className="bg-black h-12 w-2 absolute right-0" />
      <div className="bg-black w-40 h-2 ml-32" />
      <div className="bg-black h-128 w-2 ml-32" />
      <div className="bg-black h-2 w-64" />
    </section>
  );
}

export default HangmanDraw;