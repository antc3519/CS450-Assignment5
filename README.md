# CS450 - Assignment 5
# Website can be viewed here: https://antc3519.github.io/CS450-Assignment5/

Classwork for CS450 - Introduction to Data Visualization

The goal of this assignment is to build a React component that integrates D3.js to visualize stock price data, specifically for companies like Apple, Microsoft, Amazon, Google, and Meta. The visualization will display the opening and closing prices over time, filtered by the selected company and month.
Requirements:
1. React Component:
    * Use the provided React class component Child1 that receives CSV data from user upload containing stock prices for different companies. The component should display an interactive chart with the following features:
    * Plot two lines: one for the "Open" price and another for the "Close" price.
    * The user should be able to select a company and a month from a dropdown and radio buttons, and the chart should update accordingly.
2. State Management and Interactivity (40 points):
    * The component should have the following states:
      * company: String storing the selected company (the default should be "Apple").
      * selectedMonth: String representing the selected month (the default should be "November").
    * Company Selector: Provide radio buttons to select a company. The chart should update when a different company is selected.
    * Month Selector: Provide a dropdown menu to select a month. The chart should display data only for the selected month.
    * The chart should dynamically update through state when the user selects a new company or month.
3. Chart Rendering (100 points):
    * Use scaleTime for the x-axis to represent time, and scaleLinear for the y-axis to represent prices. The domain of the y-axis should be set to the minimum and maximum values of both the "Open" and "Close" prices.
    * Create a circle for each data pair and display tooltips showing details (date, open/close prices, and the difference) when hovering over the data points.
    * Add a legend to differentiate the "Open" and "Close" lines with appropriate colors.
    * Use D3.js to render the chart for "Open" and "Close" prices.
4. Layout and Styling (10 points):
    * The layout should closely resemble the layout shown in the video.
    * Use the colors { "Open": "#b2df8a", "Close": "#e41a1c" };
    * Create Child1.css and put all your css styles inside it.
5. Submission: Submit the following on Canvas:
    * The Child1.js component and Child1.css
    * A link to your deployed webpage on GitHub Pages.

