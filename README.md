
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
