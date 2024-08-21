# Backend Project

A robust Node.js-Express backend solution inspired by Laravel 10 architecture, featuring a full-featured authentication system using JWT tokens.

[![Star This Project](https://img.shields.io/github/stars/developer006tz/NodejsStartUpTemplate.svg?style=social)](https://github.com/developer006tz/NodejsStartUpTemplate.git)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Full-featured authentication system using JWT tokens
- Protected API routes (except those with `/auth` prefix)
- Laravel 10 inspired architecture

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/developer006tz/NodejsStartUpTemplate.git
   cd Backend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Create Environment File:**
   ```sh
   touch .env
   ```
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=3033
   DB_USERNAME=root
   DB_PASSWORD="your_db_password"
   DB_DATABASE=family
   DB_HOST=127.0.0.1
   DB_PORT=3306
   SECRET_KEY=afc7cd7fb95a4fd4b14bc624a7458643
   ```

4. **Run Sequelize Migrations:**
   ```sh
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

5. **Admin Credentials:**
   ```
   username: admin
   password: admin
   ```

6. **Start the Development Server:**
   ```sh
   npm run dev
   ```

7. **Initial Routes:**
   ```
   Base URL: http://localhost:3033/api
   Login: http://localhost:3033/api/auth/login
   Register: http://localhost:3033/api/auth/register
   Authenticated User: http://localhost:3033/api/authenticated/user
   ```

## Project Structure

Our project structure is inspired by Laravel 10, providing a clean and organized codebase:

```
├── ProjectFolder/
│   ├── controllers/
│   ├── database/
│   │   ├── config/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── middleware/
│   │   └── validators/
│   ├── node_modules/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── views/
│   ├── .gitignore
│   ├── .sequelizerc
│   ├── app.js
│   ├── package.json
│   └── server.js
```

- `controllers/`: Handle incoming requests and return responses
- `database/`: Contains database-related files (migrations, seeders, and configuration)
- `middleware/`: Custom middleware functions
- `routes/`: Define API routes
- `services/`: Business logic and data processing
- `utils/`: Utility functions and helpers
- `views/`: Template files (if applicable)

## Usage

The API provides the following main routes:

- `/api/auth/login`: User login
- `/api/auth/register`: User registration
- `/api/auth/forget-password`: Password reset functionality

All other routes are protected and require authentication. To access protected routes, include the JWT token in the Authorization header of your requests.

For detailed API documentation, please refer to [API Documentation](link-to-your-api-docs).

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

[Specify your license here]

---

Don't forget to give this project a star ⭐️ if you find it helpful!
