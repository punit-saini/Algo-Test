<<<<<<< HEAD
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
# Algo Test 📈

👋 Hi Sandeep!

## Phase I: Lightweight charts (Single Instrument) 🌱

🔹 In this phase, I converted the time into a Unix timestamp since the Lightweight Charts library only accepts Unix timestamps. Here's what I accomplished:

1️⃣ Converted the time in the dataset into Unix timestamps to align with the chart's requirements.
2️⃣ Utilized the area chart provided by the Lightweight Charts library to visualize the dataset.
   
## Phase II: Live Price ⏰

🔹Create a function to simulate a WebSocket and provide live updates. Here's what I did:

1️⃣ Created a function that simulates a WebSocket connection.
2️⃣ Configured the function to send updated data every 2 seconds, mimicking real-time market updates.
3️⃣ Implemented the necessary components to display the live data on the chart.
   
## Phase III: OHLC 🕯️

🔹 To address the overwhelming amount of per-second data, introduced the OHLC (Open High Low Close) format and provided added the option to select different time intervals. Here's what I achieved:

1️⃣ Replaced the area chart with a candlestick chart, enabling the visualization of OHLC data.
2️⃣ Developed a function that takes the raw dataset and converts it into OHLC format based on the user-selected time interval.

## Phase IV: Multiple Instruments 📊

🔹 In this phase, addressed the user's desire to compare multiple instruments in a single chart. Here's what I implemented:

1️⃣ Added a feature that allows users to select one, two, or three instruments from the provided dataset.
2️⃣ Developed a function that combines the selected instruments' data and generates a combined OHLC array.
3️⃣ Updated the chart to reflect the selected instruments and their respective data.

🎉 It was an amazing journey working on these phases. I successfully converted timestamps, implemented live price updates, and enabled OHLC visualization.

>>>>>>> 7cd6449acc49da4f9e0f11d9c97d90b407f609c7
