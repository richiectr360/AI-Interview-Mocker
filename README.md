# AI Interview Mocker

**Live Demo**: [Enter Live Link Here]

The **AI Interview Mocker** is an intelligent web application designed to help users prepare for job interviews through AI-generated mock interview questions. The app integrates cutting-edge technologies like Google's Generative AI (Gemini) and the Drizzle ORM to offer personalized and effective interview preparation. Users can generate interview questions based on job roles and experience, record answers using speech-to-text technology, and receive instant feedback, making it an efficient tool for job interview preparation.

## Problem the Project Solves

Preparing for job interviews can be daunting, with an overwhelming amount of resources and not enough personalized guidance. This app solves that problem by offering:

- **AI-generated interview questions** tailored to the user's job role and experience.
- **Real-time feedback** on answers with suggestions for improvement.
- **Recording features** allowing users to practice responses using their voice.
- **User-friendly interface** to track interview progress and review feedback.

By leveraging AI and providing a streamlined experience, this application helps users efficiently prepare for job interviews, improving their chances of success.

## Features

- **AI-generated Interview Questions**: Get customized interview questions based on job position and experience using Google's Gemini AI.
- **Interview Feedback**: Receive real-time feedback on answers, including rating and suggestions for improvement.
- **Interview Recording**: Record answers using the built-in speech-to-text feature.
- **Interview Tracking**: Track previous interviews and their feedback, with easy access to past interviews.
- **Authentication with Clerk**: Secure user authentication using Clerk's authentication platform.
- **Responsive UI**: Clean and responsive UI built with Tailwind CSS.

## Project Structure

```plaintext
├── app
│   ├── dashboard
│   │   ├── _components
│   │   │   ├── AddNewInterview.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── InterviewItemCard.jsx
│   │   │   ├── InterviewList.jsx
│   │   └── page.jsx
│   ├── interview
│   │   ├── [interviewId]
│   │   │   ├── feedback
│   │   │   │   └── page.jsx
│   │   │   ├── start
│   │   │   │   ├── _components
│   │   │   │   │   ├── QuestionsSection.jsx
│   │   │   │   │   └── RecordAnswerSection.jsx
│   │   │   └── page.jsx
├── components
│   ├── ui
│   │   ├── button.jsx
│   │   ├── collapsible.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   └── sonner.jsx
├── utils
│   ├── db.js
│   ├── GeminiAIModal.jsx
│   ├── planData.jsx
│   ├── schema.js
└── lib
    └── utils.js
```

## Tech Stack

- **Next.js**: Framework for server-side rendering and building static web applications.
- **Clerk**: Provides secure user authentication.
- **Google Generative AI (Gemini)**: Used for AI-powered interview question generation and feedback.
- **Drizzle ORM**: Simplified database interaction using modern ORM.
- **Tailwind CSS**: Utility-first CSS framework used to create a responsive and clean user interface.
- **PostgreSQL**: Relational database for storing user interviews and feedback.
- **React Hook Speech-to-Text**: Enables voice input for recording interview answers.
- **Webcam API**: Used to capture video responses during mock interviews.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (comes with Node.js) or Yarn

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-interview-mocker.git
   cd ai-interview-mocker
   ```

2. Install the dependencies:
   ```
   npm install
   # or if you are using Yarn
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   NEXT_PUBLIC_DRIZZLE_DB_URL=your-database-url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-api
   NEXT_PUBLIC_GEMINI_API_KEY=your-google-gemini-api-key
   NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=10
   NEXT_PUBLIC_INFORMATION=Sample information for interviews
   NEXT_PUBLIC_QUESTION_NOTE=Sample note for questions
   ```

4. Push the database schema using Drizzle ORM:
   ```
   npm run db:push
   ```

5. Start the development server:
   ```
   npm run dev
   # or if you are using Yarn
   yarn dev
   ```

The application should now be running on `http://localhost:3000`.

## Environment Variables

Make sure to set up your environment variables in the `.env` file:

- `NEXT_PUBLIC_DRIZZLE_DB_URL`
- `NEXT_PUBLIC_CLERK_FRONTEND_API`
- `NEXT_PUBLIC_GEMINI_API_KEY`
- `NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT`
- `NEXT_PUBLIC_INFORMATION`
- `NEXT_PUBLIC_QUESTION_NOTE`

## Scripts

Here are the available scripts for this project:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code for errors.
- `npm run db:push`: Pushes the database schema to the server.
- `npm run db:studio`: Opens the database management studio provided by Drizzle ORM.

## Deployment

This app is ready for deployment on Vercel. To deploy, follow these steps:

1. Push the code to a GitHub repository.
2. Link the repository to Vercel by following [this guide](https://vercel.com/docs/concepts/git/vercel-for-github).
3. Add the environment variables to your Vercel project settings.
4. Deploy your app with a single click.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.
