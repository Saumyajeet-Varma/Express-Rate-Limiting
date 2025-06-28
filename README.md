# Express Rate Limiting

This is a simple Node.js and Express app demonstrating how to implement basic rate limiting using the express-rate-limit middleware.

# How it works

- Limits each IP to 10 requests per minute (by default).
- Returns a custom error message when the limit is exceeded.
- All configuration can be managed via a `.env` file.

## Environment Variables

Create a `.env` file in the project root with these values:

```ini
PORT=3000

RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=10
RATE_LIMIT_MESSAGE=Request limit exceeded

```

> RATE_LIMIT_WINDOW_MS - Time in milliseconds <br> RATE_LIMIT_MAX - Maximum request <br> RATE_LIMIT_MESSAGE - Message after exceeding the limit

## Installation

#### Clone the repository

```bash
git clone https://github.com/Saumyajeet-Varma/Express-Rate-Limiting

```

#### Move into the project directory

```bash
cd Express-Rate-Limiting

```

#### Install Dependencies

```bash
npm install

```

#### Configure your environment

- Create a `.env` file as shown above.
- Ensure your MySQL server is running and the database exists.

#### Start the server

```bash
node server.js

```

## Contributing

Contributions, issues, and feature requests are welcome! <br> 
Feel free to fork this repo and submit a pull request.

## Author

[Saumyajeet Varma](https://github.com/Saumyajeet-Varma)