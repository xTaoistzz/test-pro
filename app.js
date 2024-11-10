const express = require('express');
const app = express();
const port = 3000;

// Route for the Landing Page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Landing Page</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background-color: #f3f4f6; display: flex; align-items: center; justify-content: center; height: 100vh; color: #333; }
        .container { text-align: center; max-width: 600px; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        h1 { color: #4CAF50; margin-bottom: 20px; }
        p { font-size: 18px; line-height: 1.6; margin-bottom: 20px; }
        .button { display: inline-block; padding: 10px 20px; color: #fff; background-color: #4CAF50; text-decoration: none; border-radius: 5px; transition: background-color 0.3s ease; }
        .button:hover { background-color: #45a049; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Our Landing Page!</h1>
        <p>We’re glad you’re here. Click the button below to go to the login page.</p>
        <a href="/login" class="button">Go to Login</a>
      </div>
    </body>
    </html>
  `);
});

// Route for the Login Page
app.get('/login', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Page</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background-color: #f3f4f6; display: flex; align-items: center; justify-content: center; height: 100vh; color: #333; }
        .login-container { width: 100%; max-width: 400px; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; }
        h2 { margin-bottom: 20px; color: #4CAF50; }
        .form-group { margin-bottom: 15px; text-align: left; }
        label { display: block; margin-bottom: 5px; font-size: 14px; }
        input[type="text"], input[type="password"] { width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px; }
        .login-button { width: 100%; padding: 10px; background-color: #4CAF50; color: #fff; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; transition: background-color 0.3s ease; }
        .login-button:hover { background-color: #45a049; }
        .forgot-password { margin-top: 10px; font-size: 14px; color: #555; }
        .forgot-password a { color: #4CAF50; text-decoration: none; }
        .forgot-password a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="login-container">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
        <p class="forgot-password">Forgot your password? <a href="#">Click here</a></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
