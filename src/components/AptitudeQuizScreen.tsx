import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "Do you enjoy solving mathematical problems and working with numbers?",
    options: [
      { id: "a", text: "Absolutely love it!", color: "bg-green-500" },
      { id: "b", text: "Yes, it's interesting", color: "bg-blue-500" },
      { id: "c", text: "Sometimes", color: "bg-yellow-500" },
      { id: "d", text: "Not really", color: "bg-red-500" }
    ]
  },
  {
    id: 2,
    question: "How do you feel about creative writing and literature?",
    options: [
      { id: "a", text: "I'm passionate about it", color: "bg-purple-500" },
      { id: "b", text: "I enjoy it", color: "bg-blue-500" },
      { id: "c", text: "It's okay", color: "bg-yellow-500" },
      { id: "d", text: "Not my thing", color: "bg-red-500" }
    ]
  },
  {
    id: 3,
    question: "Are you interested in understanding how things work (machines, body, nature)?",
    options: [
      { id: "a", text: "Very much so!", color: "bg-green-500" },
      { id: "b", text: "Yes, I'm curious", color: "bg-blue-500" },
      { id: "c", text: "Somewhat", color: "bg-yellow-500" },
      { id: "d", text: "Not particularly", color: "bg-red-500" }
    ]
  },
  {
    id: 4,
    question: "Do you enjoy working with people and helping them solve problems?",
    options: [
      { id: "a", text: "I love helping others", color: "bg-green-500" },
      { id: "b", text: "Yes, it's fulfilling", color: "bg-blue-500" },
      { id: "c", text: "Sometimes", color: "bg-yellow-500" },
      { id: "d", text: "I prefer working alone", color: "bg-red-500" }
    ]
  },
  {
    id: 5,
    question: "How comfortable are you with technology and digital tools?",
    options: [
      { id: "a", text: "I'm a tech enthusiast", color: "bg-green-500" },
      { id: "b", text: "Pretty comfortable", color: "bg-blue-500" },
      { id: "c", text: "Basic level", color: "bg-yellow-500" },
      { id: "d", text: "I struggle with tech", color: "bg-red-500" }
    ]
  }
];

interface AptitudeQuizScreenProps {
  onQuizComplete: () => void;
}

export function AptitudeQuizScreen({ onQuizComplete }: AptitudeQuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const handleAnswer = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers({ ...answers, [question.id]: optionId });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[quizQuestions[currentQuestion + 1].id] || "");
    } else {
      onQuizComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || "");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
            Aptitude Assessment
          </h1>
          <p className="text-slate-600">
            Answer honestly to get the most accurate career recommendations
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-slate-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-slate-200" />
        </Card>

        {/* Question Card */}
        <Card className="p-8 mb-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-slate-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {question.options.map((option) => (
              <Button
                key={option.id}
                variant={selectedOption === option.id ? "default" : "outline"}
                className={`p-6 h-auto text-left justify-start hover:scale-105 transition-all duration-200 ${
                  selectedOption === option.id 
                    ? `${option.color} text-white hover:${option.color}/90` 
                    : `border-2 hover:border-slate-300 text-slate-700`
                }`}
                onClick={() => handleAnswer(option.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedOption === option.id 
                      ? 'bg-white border-white' 
                      : 'border-slate-400'
                  }`}></div>
                  <span className="font-medium">{option.text}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {quizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentQuestion
                      ? 'bg-blue-600'
                      : answers[index + 1]
                      ? 'bg-green-500'
                      : 'bg-slate-300'
                  }`}
                ></div>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`flex items-center space-x-2 ${
                currentQuestion === quizQuestions.length - 1
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <span>
                {currentQuestion === quizQuestions.length - 1 ? 'Complete' : 'Next'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Tips Card */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Tips for Better Results</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Answer based on your genuine interests, not what others expect</li>
            <li>• Think about what activities make you lose track of time</li>
            <li>• Consider your natural strengths and inclinations</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}