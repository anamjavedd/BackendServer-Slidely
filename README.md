# BackendServer

## Description

This project is a simple submission management system. It allows users to submit data, view, edit, and delete submissions. The backend is built with Node.js and Express, and the frontend is a Windows Forms application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager).
- You have installed Visual Studio with .NET support for the Windows Forms application.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Navigate to the `backend` directory:**
    ```sh
    cd backend
    ```

3. **Install the dependencies:**
    ```sh
    npm install
    ```

## Running the Server

1. **Start the server:**
    ```sh
    npm start
    ```

    This will start the server on `http://localhost:3000`.

2. **Server Endpoints:**

    - **POST /submit**: To submit new data.
    - **GET /read?index={index}**: To read a submission by index.
    - **PUT /update?index={index}**: To update a submission by index.
    - **DELETE /delete?index={index}**: To delete a submission by index.

## Using the Windows Forms Application

1. **Open the project in Visual Studio.**

2. **Build the project:**
    - Go to `Build > Build Solution`.

3. **Run the application:**
    - Press `F5` or click the `Start` button.

4. **Interacting with the Application:**
    - Use the `Previous` and `Next` buttons to navigate through submissions.
    - Use the `Edit` button to modify a submission, then click `Save` to save changes.
    - Use the `Delete` button to delete a submission.

## Troubleshooting

- Ensure that the backend server is running before starting the Windows Forms application.
- Verify that the server URL (`http://localhost:3000`) is accessible.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Thanks to all the open-source contributors for their amazing work.
- Special thanks to the Node.js and .NET communities for their support and resources.

---

Feel free to customize this `README.md` as per your project's requirements.
