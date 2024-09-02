## Getting Started

Clone the repository:

git clone [repository URL]
cd [project directory]

First, run the development server:

```bash
npm install
```

Install project's modules.

```bash
npm run dev
```

Runs the app in the development mode

```bash
npm run build
```

Builds the app for production

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries and Tools

Next.js - https://nextjs.org/
React - https://react.dev/
Tailwind CSS - https://tailwindcss.com/
TypeScript - https://www.typescriptlang.org/

React feather - https://feathericons.com/
Description - Is a collection of simply beautiful open source icons for React.js

## Definition

This is a simplified structure of a simple chat.
Implementation of adding messages and commands, popups for each type of commands.
Types of Commands - USERS, SERVICES, EMOTES.

The architecture uses the Feature-Slice-Design (https://feature-sliced.design/).
So here are missing such important nodes as API, WEBSockets, State Management.

## What would I use for the real project

API - axios (https://axios-http.com/docs/intro).
API management with React-Query (https://tanstack.com/query/latest/docs/framework/react/overview).
Depends on the project I would thought about using the material (https://mui.com/).
Tailwind is lightweight what is its advantage.
For forms always use React-Hook-Form (https://react-hook-form.com/).
As state management - Zustand (https://zustand.docs.pmnd.rs/getting-started/introduction/).
Also used Redux, but Zustand is easier to use and performs the same function.
