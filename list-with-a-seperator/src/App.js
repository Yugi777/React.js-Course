import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};
export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <div key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </div>
      ))}
    </article>
  );
}
