# PantryToPlate

PantryToPlate is a web application that helps users create recipes based on the ingredients they have in their pantry. Simply input what you have, and PantryToPlate will suggest delicious recipes you can make!

## Features
- Input ingredients to find matching recipes.
- Exclude specific ingredients from recipes.
- Select dietary preferences (Vegan, Vegetarian, Gluten-Free).
- Specify maximum cooking time.
- Save favorite recipes.

## Prerequisites
- **Node.js** and **npm** installed on your machine.
- **Firebase CLI** installed.

## Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
Navigate to the project directory:

bash
cd PantryToPlate
Install dependencies:

bash
npm install
Firebase Setup
Login to Firebase:

bash
firebase login
Initialize Firebase:

bash
firebase init
Select Hosting

Choose your Firebase project pantrytoplate-f153b

Specify your public directory (typically public)

Configure as a single-page app (if applicable)

Do not overwrite index.html if it already exists

Usage
Start the application:

bash
npm start
Open in your browser: Navigate to http://localhost:5000.

Find Recipes:

Input ingredients into the provided field.

Optionally, exclude specific ingredients.

Select dietary preferences (Vegan, Vegetarian, Gluten-Free).

Specify maximum cooking time.

Click "Find Recipes" to get recipe suggestions.

Deployment
Deploy the application:

bash
npm run deploy
Contributing
We welcome contributions! To get started:

Fork the repository.

Create a new branch:

bash
git checkout -b feature/your-feature-name
Commit your changes:

bash
git commit -m "Add your commit message"
Push to the branch:

bash
git push origin feature/your-feature-name
Open a pull request.
