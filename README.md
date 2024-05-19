This React application provides a comprehensive platform for managing and viewing articles, author profiles, categories, and user profiles. The application uses react-router-dom for client-side routing, allowing users to navigate between different sections seamlessly.


Home Page: The root route ("/") serves as the landing page of the application, wrapped in the Root component.

About Page: The "about" route displays information about the application or organization.

User Sign-Up: The "sign-up" route allows new users to register for an account.

Articles Section:

"articles" route lists all the articles.
"articles/:title" route displays a specific article based on its title.
Authors Section:

"authors/:name" route shows the profile and articles of a specific author.
Categories Section:

"categories" route lists all article categories.
":name" route displays articles within a specific category.
"categories/:name" route provides another way to access specific categories.
User Profile:

"profile" route displays the user's profile information.
"profile/edit" route provides a form for editing the user's profile.
Navigation and User Experience:
React Router: The app uses react-router-dom to create a multi-page experience in a single-page application (SPA), ensuring quick navigation without full page reloads.
Dynamic Routing: Routes with parameters (e.g., :title, :name) allow for dynamic content rendering based on the URL, providing a more personalized and interactive user experience.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

