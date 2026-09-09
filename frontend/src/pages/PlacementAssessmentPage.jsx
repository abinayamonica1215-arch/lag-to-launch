import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  HelpCircle,
  Brain,
  Code2,
  TrendingUp,
  MessageSquare,
} from 'lucide-react';

/**
 * PlacementAssessmentPage Component
 * 
 * Part 4 — Screen 5: Placement Assessment
 * Route: /placement-assessment
 * 
 * Interactive mock assessment with multiple-choice questions across 4 categories:
 * Aptitude, Technical, Logical Reasoning, Communication.
 * React state only. Navigates to /assessment-result upon completion.
 */
export default function PlacementAssessmentPage() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      category: 'Technical',
      categoryIcon: Code2,
      question: 'What is the time complexity of searching in a Balanced Binary Search Tree (AVL tree)?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correctAnswer: 1,
    },
    {
      id: 2,
      category: 'Technical',
      categoryIcon: Code2,
      question: 'Which of the following data structures is used for implementing Breadth-First Search (BFS)?',
      options: ['Stack', 'Queue', 'Priority Queue', 'Array'],
      correctAnswer: 1,
    },
    {
      id: 3,
      category: 'Aptitude',
      categoryIcon: Brain,
      question: 'A train 120 meters long passes a telegraph post in 6 seconds. What is the speed of the train in km/h?',
      options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
      correctAnswer: 1,
    },
    {
      id: 4,
      category: 'Logical Reasoning',
      categoryIcon: TrendingUp,
      question: 'Find the next number in the series: 3, 7, 15, 31, 63, ...?',
      options: ['125', '126', '127', '128'],
      correctAnswer: 2,
    },
    {
      id: 5,
      category: 'Communication',
      categoryIcon: MessageSquare,
      question: 'In an interview setting, which opening statement is most effective for answering "Tell me about yourself"?',
      options: [
        'Reciting your entire high school and family background in detail.',
        'Highlighting your education, core technical skills, key projects, and career goal.',
        'Asking the interviewer to review your resume instead.',
        'Listing your hobbies and personal interests first.',
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      category: 'Technical',
      categoryIcon: Code2,
      question: 'Which SQL clause is used to filter the results of an aggregate function such as COUNT() or AVG()?',
      options: ['WHERE', 'ORDER BY', 'HAVING', 'GROUP BY'],
      correctAnswer: 2,
    },
    {
      id: 7,
      category: 'Aptitude',
      categoryIcon: Brain,
      question: 'If 12 men can complete a project in 15 days, in how many days can 20 men complete the same project?',
      options: ['8 days', '9 days', '10 days', '12 days'],
      correctAnswer: 1,
    },
    {
      id: 8,
      category: 'Logical Reasoning',
      categoryIcon: TrendingUp,
      question: 'Pointing to a photograph, a man says, "She is the daughter of my grandfather\'s only son." Who is she?',
      options: ['Mother', 'Sister', 'Aunt', 'Niece'],
      correctAnswer: 1,
    },
    {
      id: 9,
      category: 'Communication',
      categoryIcon: MessageSquare,
      question: 'What is the recommended structure for answering behavioral interview questions?',
      options: [
        'STAR Method (Situation, Task, Action, Result)',
        'PASS Method (Past, Action, Summary, Success)',
        'SMART Method (Specific, Measurable, Action, Realistic, Timed)',
        'SWOT Analysis',
      ],
      correctAnswer: 0,
    },
    {
      id: 10,
      category: 'Technical',
      categoryIcon: Code2,
      question: 'In Python, what is the default behavior when passing mutable objects like lists as arguments to a function?',
      options: [
        'Passed by value (a copy is created)',
        'Passed by object reference (modifications affect the caller)',
        'Syntax error unless explicitly cloned',
        'Converted to an immutable tuple',
      ],
      correctAnswer: 1,
    },
  ];

  // Current question index (0 to 9)
  const [currentIndex, setCurrentIndex] = useState(3); // Start at Question 4 of 10 as specified in prompt
  const [selectedAnswers, setSelectedAnswers] = useState({
    0: 1,
    1: 1,
    2: 1,
  });

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);
  const Icon = currentQ.categoryIcon;

  const handleSelectOption = (optIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Submit assessment
      navigate('/assessment-result');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between p-4 sm:p-6 font-sans">
      {/* Top Header */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between py-4">
        <Link to="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs shadow-xs">
            L2L
          </div>
          <span className="font-bold text-base text-content-heading tracking-tight">
            Lag to Launch
          </span>
        </Link>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-content-muted flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            Time Elapsed: 08:24
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="text-xs"
          >
            Save & Exit
          </Button>
        </div>
      </header>

      {/* Main Assessment Container */}
      <main className="max-w-2xl mx-auto w-full my-auto py-6">
        <div className="bg-surface-card rounded-xl border border-line p-6 sm:p-8 shadow-xs space-y-6">
          
          {/* Header & Category Badge */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-line">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-light text-primary border border-primary/20">
                  Placement Assessment
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-line text-content-body">
                  <Icon className="w-3 h-3 text-primary" />
                  {currentQ.category}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-content-heading mt-1">
                Question {currentIndex + 1} of {questions.length}
              </h1>
            </div>

            <div className="text-right">
              <span className="text-xs font-semibold text-primary tabular-nums">
                Progress: {progressPercent}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <ProgressBar value={progressPercent} variant="primary" />
          </div>

          {/* Question Box */}
          <div className="space-y-4 pt-1">
            <h2 className="text-base sm:text-lg font-semibold text-content-heading leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentIndex] === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3
                      ${isSelected
                        ? 'border-primary bg-primary-light text-primary ring-2 ring-primary/20 font-semibold'
                        : 'border-line bg-surface hover:border-slate-300 text-content-heading'
                      }
                    `}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5
                        ${isSelected ? 'bg-primary text-white' : 'bg-white border border-line text-content-muted'}
                      `}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug pt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-line flex items-center justify-between gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="gap-1.5 text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              className="gap-1.5 text-xs font-semibold"
            >
              {currentIndex === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-content-muted">
        Lag to Launch Placement Diagnostic • Static Demonstration Questions
      </footer>
    </div>
  );
}
