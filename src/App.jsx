import { useState } from "react";
import './App.css'

function App() {
  const [randomQuote, setRandomQuote] = useState("Talk is cheap. Show me the code. – Linus Torvalds");
  const programmingQuotes = [
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "First, solve the problem. Then, write the code. – John Johnson",
    "To iterate is human, to recurse divine. – L. Peter Deutsch",
    "I'm not a great programmer; I'm just a good programmer with great habits. – Kent Beck",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Make it work, make it right, make it fast. – Kent Beck",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "Controlling complexity is the essence of computer programming. – Brian Kernighan",
    "The function of good software is to make the complex appear to be simple. – Grady Booch",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "In order to be irreplaceable, one must always be different. – Coco Chanel",
    "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
    "The best way to predict the future is to invent it. – Alan Kay",
    "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint-Exupéry",
    "You can't have great software without a great team, and most software teams behave like dysfunctional families. – Jim McCarthy",
    "The only way to go fast is to go well. – Robert C. Martin",
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    "The most important property of a program is whether it accomplishes the intention of its user. – C.A.R. Hoare",
    "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler",
    "There are only two kinds of programming languages: those people always bitch about and those nobody uses. – Bjarne Stroustrup",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. – Bill Gates",
    "Any sufficiently advanced technology is indistinguishable from magic. – Arthur C. Clarke",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds",
    "The most important single aspect of software development is to be clear about what you are trying to build. – Bjarne Stroustrup",
    "Programming is not easy like Sunday morning, it’s silent poetry. – Waseem Latif",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. – Anonymous",
    "One man’s crappy software is another man’s full-time job. – Jessica Gaston",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
    "In theory, there is no difference between theory and practice. But, in practice, there is. – Jan L. A. van de Snepscheut",
    "It’s not a bug – it’s an undocumented feature. – Anonymous",
    "The most likely way for the world to be destroyed, most experts agree, is by accident. That’s where we come in; we’re computer professionals. We cause accidents. – Nathaniel Borenstein",
    "There is no programming language, no matter how structured, that will prevent programmers from making bad programs. – Larry Flon",
    "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. – Eric Raymond",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. – Seymour Cray",
    "A language that doesn’t affect the way you think about programming is not worth knowing. – Alan Perlis",
    "The best performance improvement is the transition from the nonworking state to the working state. – John Ousterhout",
    "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. – Alan Kay",
    "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. – Oktal",
    "A good programmer is someone who looks both ways before crossing a one-way street. – Doug Linder",
    "Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems. – Jamie Zawinski",
    "You can’t have great software without a great team, and most software teams behave like dysfunctional families. – Jim McCarthy",
    "Any sufficiently advanced bug is indistinguishable from a feature. – Rich Kulawiec",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. – Patrick McKenzie"
  ];

  const handleQuote = () => {
    let randomNumber = Math.floor(Math.random() * programmingQuotes.length);
    setRandomQuote(programmingQuotes[randomNumber]);
  };

  return (
    <>
      <div className="container">
        <div className="quote">
          <h2>"{randomQuote}"</h2>
        </div>
        <button onClick={handleQuote}>Generate Quote</button>
      </div>
    </>
  );
}

export default App;
