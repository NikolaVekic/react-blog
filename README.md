# React Blog

This project is a full-stack web application with a React frontend and an Express backend, utilizing MongoDB for data storage. The frontend is styled with Tailwind CSS for a modern and responsive design.

## Journey Masters - Outdoorsman Blog
<img width="661" alt="Screenshot 2024-02-24 224004" src="https://github.com/NikolaVekic/react-blog/assets/55920607/6197cffa-f8ba-43ad-b450-0ea60d617870">


## Project Structure

### Frontend

- **React**: The core of the frontend, structured within the `src` directory.
- **Tailwind CSS**: Styling is managed using Tailwind CSS, configured in `tailwind.config.js`.
- **Static Files**: Located in the `public` directory.

### Backend

- **Express**: The backend server is built with Express, with the entry point being `index.js`.
- **MongoDB Models**: Data models are defined in the `models` directory, leveraging Mongoose for schema definition.
- **File Uploads**: Support for file uploading is indicated by the `uploads` directory.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Running the Backend

1. Navigate to the `backend` directory.
2. Install dependencies with `npm install`.
3. Configure your `.env` file with your MongoDB URI and other environment variables.
4. Start the server with `nodemon index.js`.
5. The application should now be running on `localhost:3000`.

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies with `npm install`.
3. Start the React app with `npm start`.
4. The application should now be running on `localhost:3001`.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
