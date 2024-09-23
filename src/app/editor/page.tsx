'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CodeEditor from '@/components/codeEditor/CodeEditor'
import QuestionCard from '@/components/question/Question'
import axios from 'axios'

type Example = {
  input: string;
  output: string;
};

type TestCase = {
  input: any[]; // You can be more specific depending on your case
  expected: any; // You can be more specific depending on your case
};

type Problem = {
  title: string;
  description: string;
  examples: Example[];
  testCases: TestCase[];
};

export default function Component() {
  const [language, setLanguage] = useState<string>('javascript')
  const [code, setCode] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [testResults, setTestResults] = useState<{ passed: boolean; result: any; expected: any }[]>([])

  const problem: Problem = {
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] },
    ]
  }

  const starterCode: { [key: string]: string } = {
    javascript: `function twoSum(nums, target) {\n  // Your code here\n}`,
    python: `def two_sum(nums, target):\n    # Your code here\n    pass`,
    cpp: `#include <vector>\n\nclass Solution {\npublic:\n    std::vector<int> twoSum(std::vector<int>& nums, int target) {\n        // Your code here\n    }\n};`,
    java: `import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}`
  }

  const runCode = async () => {
    // backend call to run code
    // In a real application, this would be handled by a secure backend
    console.log("calling backend ✅")
    const input = "2,3"
    const expectedOutput = "5"
    const response = await axios.post(`http://localhost:8000/submit`,{code,language,input,expectedOutput})
    console.log(response);
    
    setOutput(response.data.output)
    // setOutput("Running code... (This is a simulation)")
    setTimeout(() => {
      const passedTests = Math.floor(Math.random() * 4)  // Simulate 0-3 passed tests
      const results = problem.testCases.map((_, index) => ({
        passed: index < passedTests,
        result: index < passedTests ? problem.testCases[index].expected : [0, 0],
        expected: problem.testCases[index].expected
      }))
      setTestResults(results)
      // setOutput(passedTests === 3 ? 'All test cases passed!' : `${passedTests}/3 test cases passed.`)
    }, 1500)  // Simulate a delay for code execution
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    setCode(starterCode[newLanguage])
  }

  // Set initial code when component mounts
  useEffect(() => {
    setCode(starterCode[language])
  }, [language])


  const problemData: Problem = {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3, 2, 4], target = 6",
        output: "[1, 2]",
        explanation: "",
      },
      {
        input: "nums = [3, 3], target = 6",
        output: "[0, 1]",
        explanation: "",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    followUp: "Can you come up with an algorithm that is less than O(n^2) time complexity?"
  };

  return (
    <>
      
      <div className="container m-2 text-black mx-auto">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Question Section */}
          
          <QuestionCard problem={problemData} />

          {/* Code Editor Section */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-white font-semibold ">Code Editor</h2>
              <Button onClick={runCode} className=" mb-2 bg-green-600 mt-4">Run Code</Button>

              <Select  value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[180px] bg-white m-2">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CodeEditor language={language} code={code} setCode={setCode} />
            
            {/* Output Section */}
            <h2 className="text-lg text-white font-semibold mt-4 mb-2">Output</h2>
            <Card>
              <CardContent>
                <pre className="whitespace-pre-wrap rounded-md h-5">{output }</pre>
              </CardContent>
            </Card>

            {/* Test Results Section */}
            <h2 className="text-lg text-white font-semibold mt-4 mb-2">Test Results</h2>
            <Card className='rounded-md text-white'>
              <CardContent>
                {testResults.map((result, index) => (
                  <div key={index} className="flex items-center mb-2">
                    {result.passed ? (
                      <CheckCircle className="text-green-500 mr-2" />
                    ) : (
                      <XCircle className="text-red-500 mr-2" />
                    )}
                    <span>
                      Test Case {index + 1}:
                      {result.passed ? ' Passed' : ` Failed (Expected: ${JSON.stringify(result.expected)}, Got: ${JSON.stringify(result.result)})`}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
