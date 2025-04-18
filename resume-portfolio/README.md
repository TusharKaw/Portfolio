# Tushar Kaw's Interactive Resume

An interactive and animated resume portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Interactive UI with animations using Framer Motion
- Responsive design that works on all devices
- Contact form with validation
- Smooth page transitions
- Professional sections for Experience, Projects, Skills, Education, and Achievements
- Backend API for serving resume data

## Technologies Used

- **Frontend**:
  - React.js
  - React Router for navigation
  - Framer Motion for animations
  - React Icons
  - CSS for styling

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (optional setup, currently using mock data)
  - Mongoose for database modeling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (optional, for persistent data storage)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/resume-portfolio.git
cd resume-portfolio
```

2. Install frontend dependencies:
```
npm install
```

3. Install backend dependencies:
```
cd server
npm install
```

### Running the Application

#### Development Mode (with Concurrently)

Run both the frontend and backend with a single command:
```
npm run dev
```

#### Running Frontend and Backend Separately

1. Start the frontend:
```
npm start
```

2. Start the backend in a different terminal:
```
npm run server
```

### Environment Variables

Create a `.env` file in the server directory:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/resume-portfolio
```

## Customization

1. Update the resume data in `server/server.js` or connect to MongoDB and create a schema.
2. Modify the components in the `src/components` directory.
3. Update styles in the respective CSS files.

## Deployment

1. Build the React app:
```
npm run build
```

2. Deploy the backend to a server like Heroku or Vercel.
3. Deploy the frontend (the build folder) to services like Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
