# BMI Calculator Application

This application is a Body Mass Index (BMI) calculator built with Node.js and Express.js. It provides a simple web interface for users to calculate their BMI based on their height and weight.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- Basic understanding of Node.js and Express.js.
#### Install Dependencies:

#### Features: 
- Responsive design using Bootstrap.
- Input validation with JavaScript.
- Calculation of BMI with additional parameters like age and gender.
- Selection between Imperial and Metric units.
- Interpretation of the BMI result.

#### File Structure

public/: Contains static files (HTML).
routes/: Handles the routing of the application.

NPM Packages

express: Web framework for Node.js.
path: Handling file paths

#### Routes

/: Serves the home page.
/bmicalculator: Handles BMI calculation. GET request renders the form, and POST request calculates and returns the BMI.

#### Usage
Visit the home page at http://localhost:3000/.
Enter your height, weight, age, and gender.
Select the unit (Imperial or Metric).
Click "Calculate" to see your BMI and its interpretation.

##### Bonus Feature

History feature: Records past BMI calculations with timestamps.

