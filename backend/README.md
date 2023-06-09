
# Email Subscriber App

This is a simple Express.js application that should provide RESTful APIs for managing email subscribers.
 
The app for now doesn't send emails but allows you to create, read, update, and delete email subscribers.


## Setup

To set up and run this Express.js app, follow the steps below:

1. Clone the repository or download the source code files.

2. Navigate to "project base directory/backend" in your terminal.

3. Install the dependencies by running the following command:

`npm install`
## Running the App

To start the Express.js server and run the app, use the following command:

`npm run dev`


## API Endpoints

The following API endpoints are available:

* **POST /subscribers**: Creates a new email subscriber. The request body should contain the `email` field.

* **GET /subscribers**: Retrieves all `email` subscribers.

* **GET /subscribers/:id**: Retrieves a specific email subscriber based on the provided `id` parameter.

* **PUT /subscribers/:id**: Updates an email subscriber with the provided `id` parameter. The request body should contain the updated `email` field.

* **DELETE /subscribers/:id**: Deletes an email subscriber with the provided `id` parameter.
## Response Format

The API endpoints respond with JSON data in the following format.

Endpoint:

 GET `/subscribers/1`

Successful responses:

```json
{
  "id": 1,
  "email": "example@example.com",
  "createdAt": "2023-06-09T12:34:56.000Z",
  "updatedAt": "2023-06-09T12:34:56.000Z"
}
```

Error responses:

```json
{
  "error": "Email not found"
}
```
