### Installation

1. **Clone the Repository:**
   ```sh
   git clone git@github.com:PrincessKikary/Backend.git
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
   
7. **Api route:**
```sh
Base: http://localhost:3033/api
Login: http://localhost:3033/api/auth/login
Register: http://localhost:3033/api/auth/register
AuthUser: Login: http://localhost:3033/api/authenticated/user
   ```

8. **Technology Used:**
```sh
Nodejs ^18
Express ^4.16.1
Mysql database,
Sequelize ORM

