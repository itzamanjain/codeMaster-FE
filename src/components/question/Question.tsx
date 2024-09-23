import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// Define the type for the problem prop
interface Example {
  input: string;
  output: string;
  explanation: string;
}

interface Problem {
  title: string;
  description: string;
  examples: Example[];
  constraints: string[];
  followUp?: string;
}

interface QuestionProps {
  problem: Problem;
}

const QuestionCard: React.FC<QuestionProps> = ({ problem }) => {
  return (
    <div className="p-4">
      <h2 className='mb-3'> </h2>
      <Card className="mb-6 h-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
          <CardDescription className="text-md text-gray-600">
            {problem.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Examples Section */}
          <h3 className="font-semibold text-lg mb-2">Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="mt-2 p-2 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                <strong>Input:</strong> {example.input}
              </p>
              <p className="font-mono text-sm">
                <strong>Output:</strong> {example.output}
              </p>
              {example.explanation && (
                <p className="text-sm text-gray-500">
                  <strong>Explanation:</strong> {example.explanation}
                </p>
              )}
            </div>
          ))}

          {/* Constraints Section */}
          <h3 className="font-semibold text-lg mt-4 mb-2">Constraints:</h3>
          <ul className="list-disc list-inside">
            {problem.constraints.map((constraint, index) => (
              <li key={index} className="text-sm text-gray-600">
                {constraint}
              </li>
            ))}
          </ul>

          {/* Follow-up Section */}
          {problem.followUp && (
            <>
              <h3 className="font-semibold text-lg mt-4 mb-2">Follow-up:</h3>
              <p className="text-sm text-gray-600">{problem.followUp}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCard;
