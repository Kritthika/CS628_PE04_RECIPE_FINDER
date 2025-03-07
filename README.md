# CS628_PE04_RECIPE_FINDER
## Recipe Finder
## Input
The input consists of:
User Input: Users can add new recipes by providing details such as the recipe name, ingredients, cooking instructions, and other relevant information via a form.
Recipe Selection: Users can select a recipe from a list of existing recipes to view detailed information, update, or delete it.
## Process
The application is a full-stack web app that uses the following technologies:

Frontend: Built with React, it uses React Router for navigation. The application fetches and displays data (recipes) from a backend API. It allows users to:
View a list of recipes
Add new recipes
View detailed information for each recipe
Edit or delete recipes
Backend: Developed using Node.js and Express, it handles HTTP requests and interacts with MongoDB Atlas to store and manage recipes in a database.
Add Recipe: The backend accepts POST requests and stores the recipe data in MongoDB.
View Recipe List: The backend retrieves all recipes and sends them as a response to the frontend.
View Recipe Details: For a specific recipe, the backend fetches and returns details based on the unique recipe ID.
Update and Delete: PUT and DELETE requests are handled by the backend to allow recipe updates or deletions.

## Output
The output of the program consists of:

Recipe List Page: Displays a list of all available recipes. Each recipe is clickable, leading to its detailed page.
Recipe Details Page: Displays detailed information for a selected recipe, including ingredients, instructions, and other data.
Recipe Add/Edit Forms: Allows users to input new recipes or edit existing ones. This form includes fields for recipe name, ingredients, and instructions.
Recipe Delete Option: Provides the ability to delete a recipe from the database.
# SCREENSHOT
<img width="1430" alt="Screenshot 2025-03-07 at 2 33 13 PM" src="https://github.com/user-attachments/assets/6a625e37-29e8-4697-8782-e256a2d47925" />
<img width="1440" alt="Screenshot 2025-03-07 at 2 34 57 PM" src="https://github.com/user-attachments/assets/462f38c4-c76c-4646-a30a-1f986f6bf7ac" />
<img width="1438" alt="Screenshot 2025-03-07 at 2 33 05 PM" src="https://github.com/user-attachments/assets/ebb30c52-7029-4b00-8573-24dcde05338f" />

<img width="1413" alt="Screenshot 2025-03-07 at 2 32 10 PM" src="https://github.com/user-attachments/assets/e48e0d4b-c0a3-49a1-ab22-a395101c4389" />
<img width="1440" alt="Screenshot 2025-03-07 at 2 34 22 PM" src="https://github.com/user-attachments/assets/cf11fa9e-6d5a-4c1f-ac2f-abeccb384a28" />
<img width="1437" alt="Screenshot 2025-03-07 at 2 30 20 PM" src="https://github.com/user-attachments/assets/833c2545-ca35-45dc-b877-be5748ffb437" />

<img width="1426" alt="Screenshot 2025-03-07 at 2 30 29 PM" src="https://github.com/user-attachments/assets/09763390-cf8b-4a66-a88e-66117aa40298" />

