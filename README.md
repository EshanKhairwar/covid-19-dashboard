# COVID-19 Dashboard

This is a COVID-19 Dashboard application built with React, utilizing the disease.sh API to display various COVID-19 statistics such as total cases, total recovered, total deaths, active cases, new cases, new recovered, and new deaths. The dashboard includes interactive features like a world map and line graphs to visualize the data.

## Live Demo

Check out the live demo of the application [here](https://vercel.com/eshankhairwars-projects/covid-19-dashboard).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Libraries and Tools](#libraries-and-tools)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)

## Features

- **Global and Country-Specific Data**: View COVID-19 statistics for the entire world or select a specific country from the dropdown.
- **Interactive Map**: Visualize the spread of COVID-19 cases globally with an interactive map.
- **Line Graphs**: Display historical data of daily new cases, recoveries, and deaths.
- **Real-time Data**: Fetch and display the latest data using the disease.sh API.
- **Responsive Design**: The dashboard is responsive and works well on different screen sizes.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/covid-19-dashboard.git
    cd covid-19-dashboard
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Libraries and Tools

- **React**: A JavaScript library for building user interfaces.
- **@mui/material**: Material-UI components for a consistent design.
- **leaflet**: For creating interactive maps.
- **chart.js**: For rendering the line graphs.
- **numeral**: For formatting numbers.
- **disease.sh API**: Provides COVID-19 data.

### Justification

- **React**: Chosen for its component-based architecture, making it easier to manage the UI and state.
- **Material-UI**: Provides pre-styled components, speeding up the development process.
- **Leaflet**: Offers a powerful and flexible mapping solution.
- **Chart.js**: Simple yet versatile for creating various types of charts.
- **Numeral**: Simplifies number formatting.

## Challenges

### Data Fetching and Handling

- **Challenge**: Ensuring accurate and up-to-date data fetching from the disease.sh API.
- **Solution**: Implemented `useEffect` hooks for fetching data on component mount and when dependencies change. Added error handling to manage API failures gracefully.

### Responsive Design

- **Challenge**: Making the dashboard look good on different screen sizes.
- **Solution**: Utilized CSS Flexbox and responsive design principles to create a layout that adjusts to various screen sizes. Tested on multiple devices to ensure a consistent experience.

## Future Improvements

- **User Authentication**: Allow users to save their preferences and view personalized data.
- **Data Export**: Enable users to download the data in CSV or Excel format.
- **More Visualizations**: Add additional charts and graphs to provide more insights.
- **Dark Mode**: Implement a dark mode toggle for better accessibility and user preference.
- **Improved Error Handling**: Enhance error handling to provide more user-friendly messages and retry mechanisms.

## Deployment

The application is deployed on [Vercel](https://vercel.com) and can be accessed via the following URL: [https://vercel.com/eshankhairwars-projects/covid-19-dashboard](https://vercel.com/eshankhairwars-projects/covid-19-dashboard).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
