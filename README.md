# Movie Management Platform

    This is a simple movie management platform built with Next.js. The platform allows users to view, add, delete, and search for movies. It also includes API endpoints for interacting with the movies data, stored in memory. The app is Dockerized, making it easy to run in any environment.

# Features

    View Movies: See the list of available movies, with titles and descriptions.
    Add Movies: Add new movies using a simple form (title and description required).
    Delete Movies: Remove a movie from the list by clicking the delete button.
    Search Movies: Search for movies by title using a real-time search filter.

# Getting Started

    Prerequisites
    Ensure that you have the following installed:

    Node.js v18 or higher
    Docker (for Dockerized usage)
    Installation
    Clone the repository:

# bash

    Copy code
        -- git clone <YOUR_REPOSITORY_URL>
        -- cd movie-platform
    Install dependencies:
        -- npm install
        -- npm run dev

# API Endpoints

    The app includes several API endpoints for managing movie data:

    GET /api/movies: Retrieves a list of all movies.
    POST /api/movies: Adds a new movie. Expects a title and description in the request body.
    DELETE /api/movies/[id]: Deletes a movie by its unique id.
    You can interact with these APIs via the frontend, or by making direct HTTP requests using tools like Postman or curl.

# Docker

    You can run the application inside a Docker container. This approach helps to ensure consistency across different environments.

# Steps to Run with Docker

# Start your Docker Desktop.

# Build the Docker image:

    bash
        -- docker build -t movie-platform .
    Run the Docker container:

    bash
        -- docker run -p 3000:3000 movie-platform
    Now, the app will be running in production mode, accessible at http://localhost:3000.

# Docker Notes

    The Dockerfile is configured to:
    Install the necessary dependencies.
    Build the Next.js project for production.
    Serve the application using a production-ready server (next start).
    No need to worry about setting up Node.js locally if using Docker!

# Project Structure

    The project follows a simple structure:

    /pages: Contains the Next.js pages and API routes.

        /api/movies: Contains API routes for handling movie data (GET, POST, DELETE).
        index.js: The main page where movies are listed, added, deleted, and searched.
        /components: (If needed) Add reusable components here.
    /lib/
        /constants/movies.js:   deafult movies list
    Dockerfile: Configuration for building the Docker image.

# Testing (Bonus)

    This project includes basic testing setup using Jest.

    To run the tests:
        -- npm run test
    You can write additional tests for components, API endpoints, or integrations. Refer to the __tests__ folder for examples.
