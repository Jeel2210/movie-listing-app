## README: Frontend - Movie Review App (React)

This is the frontend part of a Movie Review application built using React and TypeScript.

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (version 16 or higher)
- npm or yarn (to install dependencies)


## Frontend Setup

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <repository-url>
cd movie-listing-app
```

---

### 2. Install Frontend Dependencies

In the project directory, run the following command to install all the necessary dependencies:

```bash
npm install
```

---

### 3. Configure API URL

Ensure that the frontend can communicate with the backend API. The frontend uses the following base URL to fetch and post data:

- `http://localhost:3000` (Backend API URL)

If the backend is hosted on a different URL, make sure to update it in the API calls within your code.

Example:
In your `MovieDetailsPage.tsx` or other components, make sure to use the correct backend URL:

```tsx
axios.get(`http://localhost:3000/movies/${movieId}`)
```

---

### 4. Run the Frontend Development Server

To run the React development server, use the following command:

```bash
npm start
```

This will start the frontend application at `http://localhost:3001` (or another available port if 3001 is occupied).

---

##  Frontend API Endpoints

The frontend interacts with the following backend endpoints:

### 1. `GET /movies`
- Fetch a list of all movies.

### 2. `GET /movies/:_id`
- Fetch movie details by ID (including reviews).

### 3. `POST /movies/:_id/reviews`
- Add a new review to a movie.


## Project Structure

Here is the basic folder structure for the frontend:

```
movie-listing-app/
│
├── src/
│   ├── components/         # React Components
│   ├── types/              # TypeScript types
│   └── App.tsx             # Main React App
│
├── package.json
└── tsconfig.json

---

## 🧑‍💻 Contributions

Feel free to open issues or pull requests to improve the project! Contributions are welcome.

