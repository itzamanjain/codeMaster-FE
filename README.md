This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Features (TODO)

Clean UI
light dark mode
10+ question 
proper nafvigation across the app 
dashboard of user where he can see how many question solved and history kind of (login required)

backend 
    - question fetch with a given id 
    - code running on sandbox
    - code submission
    - storing to db for future ref
    -



## db schema 

question 
Column	Type	Description
id	SERIAL	Primary key
title	TEXT	Title of the question
description	TEXT	Detailed description of the question
example_input	TEXT	Example input for the question
example_output	TEXT	Example output for the question
constraints	TEXT	Constraints (e.g., time/space limits)
follow_up	TEXT	Follow-up questions or improvements
test_case_ids	INTEGER[]	Array of foreign keys referencing test_cases
difficulty	VARCHAR(10)	e.g., 'easy', 'medium', 'hard'
expected_time_complexity	VARCHAR(50)	Expected time complexity (e.g., O(n log n))
expected_space_complexity	VARCHAR(50)	Expected space complexity (e.g., O(n))
created_at	TIMESTAMP	Creation timestamp
updated_at	TIMESTAMP	Last update timestamp


test_cases table (enhanced):
Column	Type	Description
id	SERIAL	Primary key (auto-incremented)
question_id	INTEGER	Foreign key referencing questions(id)
input	TEXT	Input for the test case
expected_output	TEXT	Expected output for the test case
actual_output	TEXT	Actual output produced during execution
time_limit	INTEGER	Time limit for execution (in milliseconds)
difficulty_score	INTEGER	Difficulty score for the test case (1-5)
created_at	TIMESTAMP	Creation timestamp
updated_at	TIMESTAMP	Last update timestamp



questionFetching Service 
submission Service
Auth Service

// code submission pipeline
submit code --> code goes to docker based on language --> code run on test cases and check if matching expected output or not and based on it give response [accepted, wrong Ans , tle etc ]


- extract the test case from db according to problem id and then store them into a file input.txt and expected.txt for result 
