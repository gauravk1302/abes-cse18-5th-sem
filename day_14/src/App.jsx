
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  function nextQuestion() {
    if (selected === "") {
      alert("Please select an answer");
      return;
    }

    const newScore =
      score +
      (selected === questions[index].correct_answer ? 1 : 0);

    setScore(newScore);

    if (index === questions.length - 1) {
      setResult(true);
      setShowConfetti(true);
    } else {
      setIndex(index + 1);
      setSelected("");
    }
  }

  function restartQuiz() {
    setIndex(0);
    setSelected("");
    setScore(0);
    setResult(false);
    setShowConfetti(false);
  }

  if (questions.length === 0) {
    return <div className="loading">Loading Questions...</div>;
  }

  const question = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="app">
      <div className="quiz-container">
        <header className="quiz-header">
          <p className="brand">QUIZ LAB</p>
          <h1>Test Your Knowledge</h1>
          <p className="subtitle">
            Learn something new with every question.
          </p>
        </header>

        {result ? (
          <div className="result">
            {showConfetti && (
              <div className="confetti">
                {Array.from({ length: 45 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      "--i": i,
                      "--x": `${Math.random() * 100}%`,
                      "--delay": `${Math.random() * 1.5}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <p className="eyebrow">QUIZ COMPLETED</p>
            <h2>Great Work!</h2>
            <p className="score">
              {score} <span>/ {questions.length}</span>
            </p>
            <p className="result-text">
              {score === questions.length
                ? "Perfect score! Outstanding work."
                : "Quiz finished. Keep learning and try again!"}
            </p>

            <button className="primary-btn" onClick={restartQuiz}>
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="quiz-meta">
              <span className="question-count">
                QUESTION {index + 1} / {questions.length}
              </span>
              <span className="difficulty">
                {question.difficulty}
              </span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="category">{question.category}</p>
            <h2 className="question">{question.question}</h2>
            <p className="instruction">Choose your answer below</p>

            <div className="options">
              {question.options.map((option, i) => (
                <label
                  className={`option ${
                    selected === option ? "selected" : ""
                  }`}
                  key={option}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>

                  <span className="option-text">{option}</span>

                  <input
                    type="radio"
                    name="answer"
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                  />
                </label>
              ))}
            </div>

            <button
              className="primary-btn"
              onClick={nextQuestion}
              disabled={!selected}
            >
              {index === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>

            <p className="footer-text">
              Take your time. Choose carefully.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
