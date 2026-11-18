
import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load questions");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No questions found");
        }
        setQuestions(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const score = questions.reduce(
    (total, q, i) =>
      total + (answers[i] === q.correct_answer ? 1 : 0),
    0
  );

  const percentage = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  const confetti = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${2 + Math.random() * 2}s`,
      })),
    []
  );

  function nextQuestion() {
    if (answers[index] === undefined) return;

    if (index === questions.length - 1) {
      setResult(true);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function restartQuiz() {
    setIndex(0);
    setAnswers({});
    setResult(false);
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loader" />
        <p>Preparing your challenge...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <p>{error}</p>
        <button
          className="primary-btn"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const question = questions[index];
  const progress = ((index + 1) / questions.length) * 100;
  const selected = answers[index];

  return (
    <div className="app">
      <div className="quiz-container">
        <header className="quiz-header">
          <p className="brand">✦ QUIZ LAB</p>
          <h1>Test Your Knowledge</h1>
          <p className="subtitle">
            Challenge your mind. Unlock your potential.
          </p>
        </header>

        {result ? (
          <div className="result">
            <div className="confetti" aria-hidden="true">
              {confetti.map((piece) => (
                <span
                  key={piece.id}
                  style={{
                    "--x": piece.x,
                    "--delay": piece.delay,
                    "--duration": piece.duration,
                  }}
                />
              ))}
            </div>

            <div className="trophy">🏆</div>
            <p className="eyebrow">CHALLENGE COMPLETED</p>
            <h2>
              {percentage === 100
                ? "Perfect Score!"
                : percentage >= 70
                ? "Great Work!"
                : "Keep Practicing!"}
            </h2>

            <p className="score">
              {score}
              <span> / {questions.length}</span>
            </p>

            <div className="percentage">{percentage}% Accuracy</div>

            <p className="result-text">
              {percentage === 100
                ? "Incredible! You got every answer correct."
                : percentage >= 70
                ? "Excellent progress. Keep it going!"
                : "Every attempt makes you better. Try again!"}
            </p>

            <button className="primary-btn" onClick={restartQuiz}>
              ↻ Play Again
            </button>
          </div>
        ) : (
          <div key={index} className="question-section">
            <div className="quiz-meta">
              <span className="question-count">
                QUESTION {String(index + 1).padStart(2, "0")}
                <span className="count-total">
                  {" "} / {String(questions.length).padStart(2, "0")}
                </span>
              </span>

              <span className="difficulty">
                ✦ {question.difficulty}
              </span>
            </div>

            <div
              className="progress-track"
              role="progressbar"
              aria-valuenow={index + 1}
              aria-valuemin={0}
              aria-valuemax={questions.length}
            >
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="category">{question.category}</p>
            <h2 className="question">{question.question}</h2>
            <p className="instruction">
              Select the correct answer from the options below.
            </p>

            <div className="options">
              {question.options.map((option, i) => (
                <label
                  className={`option ${
                    selected === option ? "selected" : ""
                  }`}
                  key={i}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>

                  <span className="option-text">{option}</span>

                  <input
                    type="radio"
                    name={`answer-${index}`}
                    checked={selected === option}
                    onChange={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [index]: option,
                      }))
                    }
                  />
                </label>
              ))}
            </div>

            <div className="navigation">
              {index > 0 && (
                <button
                  className="back-btn"
                  onClick={() => setIndex((prev) => prev - 1)}
                >
                  ← Back
                </button>
              )}

              <button
                className="primary-btn"
                onClick={nextQuestion}
                disabled={selected === undefined}
              >
                {index === questions.length - 1
                  ? "Finish Quiz ✓"
                  : "Next Question →"}
              </button>
            </div>

            <p className="footer-text">
              ✧ Think carefully. You've got this!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
