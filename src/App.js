import React, { useState } from 'react';
import './App.css';

function App() {
  const [midtermGrade, setMidtermGrade] = useState(65);
  const [homework1Grade, setHomework1Grade] = useState(100);
  const [homework2Grade, setHomework2Grade] = useState(90);
  const [homework3Grade, setHomework3Grade] = useState(95);
  const [project1Grade, setProject1Grade] = useState(85);
  const [project2Grade, setProject2Grade] = useState(0);
  const [finalExamGrade, setFinalExamGrade] = useState(0);

  const weights = {
    midterm: 25,
    homework1: 5,
    homework2: 5,
    homework3: 5,
    project1: 15,
    project2: 15,
    finalExam: 30,
  };
  const calculateAverage = () => {
    const weights = {
      midterm: 25,
      homework1: 5,
      homework2: 5,
      homework3: 5,
      project1: 15,
      project2: 15,
      finalExam: 30,
    };

    const totalWeight = Object.values(weights).reduce((acc, weight) => acc + weight, 0);

    const weightedAverage =
      (midtermGrade * weights.midterm +
        homework1Grade * weights.homework1 +
        homework2Grade * weights.homework2 +
        homework3Grade * weights.homework3 +
        project1Grade * weights.project1 +
        project2Grade * weights.project2 +
        finalExamGrade * weights.finalExam) /
      totalWeight;

    return weightedAverage;
  };

  const calculateLetterGrade = (average) => {
    if (average >= 91) return 'AA';
    if (average >= 81) return 'BA';
    if (average >= 71) return 'BB';
    if (average >= 61) return 'CB';
    if (average >= 55) return 'CC';
    if (average >= 50) return 'DC';
    if (average >= 45) return 'DD';
    return 'FF';
  };

  const handleSliderChange = (event, setterFunction) => {
    setterFunction(parseInt(event.target.value, 10));
  };

  const handleInputChange = (event, setterFunction) => {
    const value = parseInt(event.target.value, 10);
    setterFunction(value);
  };

  const getLetterGradeColor = (letterGrade) => {
    return letterGrade === 'FF' ? '#dc3545' : '#28a745';
  };

  return (
    <div className="App">
      <h1>Grade Calculator</h1>

      <div className="grid-container">
        <div className="grid-item">
          <label>Midterm Exam:</label>
          <span >{`( Weight: ${weights.midterm}% )`}</span>
          <input type="range" min="0" max="100" value={midtermGrade} onChange={(e) => handleSliderChange(e, setMidtermGrade)} />
          <input type="number" min="0" max="100" value={midtermGrade} onChange={(e) => handleInputChange(e, setMidtermGrade)} />
        </div>

        <div className="grid-item">
          <label>Homework Assignment 1:</label>
          <span>{`( Weight: ${weights.homework1}% )`}</span>
          <input type="range" min="0" max="100" value={homework1Grade} onChange={(e) => handleSliderChange(e, setHomework1Grade)} />
          <input type="number" min="0" max="100" value={homework1Grade} onChange={(e) => handleInputChange(e, setHomework1Grade)} />
        </div>

        <div className="grid-item">
          <label>Homework Assignment 2:</label>
          <span>{`( Weight: ${weights.homework2}% )`}</span>
          <input type="range" min="0" max="100" value={homework2Grade} onChange={(e) => handleSliderChange(e, setHomework2Grade)} />
          <input type="number" min="0" max="100" value={homework2Grade} onChange={(e) => handleInputChange(e, setHomework2Grade)} />
        </div>

        <div className="grid-item">
          <label>Homework Assignment 3:</label>
          <span>{`( Weight: ${weights.homework3}% )`}</span>
          <input type="range" min="0" max="100" value={homework3Grade} onChange={(e) => handleSliderChange(e, setHomework3Grade)} />
          <input type="number" min="0" max="100" value={homework3Grade} onChange={(e) => handleInputChange(e, setHomework3Grade)} />
        </div>

        <div className="grid-item">
          <label>First-step of Project:</label>
          <span>{`( Weight: ${weights.project1}% )`}</span>
          <input type="range" min="0" max="100" value={project1Grade} onChange={(e) => handleSliderChange(e, setProject1Grade)} />
          <input type="number" min="0" max="100" value={project1Grade} onChange={(e) => handleInputChange(e, setProject1Grade)} />
        </div>

        <div className="grid-item">
          <label>Second-step of Project:</label>
          <span>{`( Weight: ${weights.project2}% )`}</span>
          <input type="range" min="0" max="100" value={project2Grade} onChange={(e) => handleSliderChange(e, setProject2Grade)} />
          <input type="number" min="0" max="100" value={project2Grade} onChange={(e) => handleInputChange(e, setProject2Grade)} />
        </div>

        <div className="grid-item">
          <label>Final Exam:</label>
          <span>{`( Weight: ${weights.finalExam}% )`}</span>
          <input type="range" min="0" max="100" value={finalExamGrade} onChange={(e) => handleSliderChange(e, setFinalExamGrade)} />
          <input type="number" min="0" max="100" value={finalExamGrade} onChange={(e) => handleInputChange(e, setFinalExamGrade)} />
        </div>
      </div>

      <div className="result">
        <p>
          Your average grade at the end of the semester will be{' '}
          <strong style={{ color: getLetterGradeColor(calculateLetterGrade(calculateAverage())) }}>
            {calculateAverage().toFixed(2)}
          </strong>{' '}
          and your letter grade for this course will be{' '}
          <strong style={{ color: getLetterGradeColor(calculateLetterGrade(calculateAverage())) }}>
            {calculateLetterGrade(calculateAverage())}
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
