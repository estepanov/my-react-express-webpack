# Building This Boilerplate From Scratch

I hope you find this useful. If you find any problems, errors, or just have a comment feel free to post an issue in this repository.

---

Table of Contents

1) [General Setup](#general-setup)

   a) [File/Folder Structure](#file-structure)
   b) [Initialize package.json](#initialize-packagejson)

2) Front End Setup
3) Back End Setup

---

## **General Setup**

### **File Structure**

Lets start by building out the file structure for the project. First we need to make a folder that will hold the repository (this project that we are remaking).

```sh
mkdir my-react-express-webpack && cd my-react-express-webpack
```

This created a folder called `my-react-express-webpack` and opened that directory. Now the following commands will all run inside of our repository directory.

Lets create a `src` folder that will hold the source code for both the client and the server:

```sh
mkdir src src/server src/client src/client/containers src/client/components src/client/store
```

This command creates a `src` folder and then two folders inside of the `src` folder called `client` and `server`.

### **Initialize package.json**

Next lets initialize our main folder so that we can install packages.

> **_Note:_** I am going to use [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) in this guide instead of npm. You do not have to use it, I just like it.

```sh
yarn init -y
```

After we have a `package.json` file we need to add the appropreiate scripts to the `package.json` JSON object:

```JSON
"scripts": {
    "build": "NODE_ENV=production webpack --mode production",
    "start": "webpack-dev-server --inline --hot"
  },
```

Now that we have created a `package.json` file inside of our `my-react-express-webpack` folder we can proceed with the installation of packages (or dependencies).

> **_Note:_** You can see I put a `-y` flag in the `yarn init` command, this just simplifies the initialization of package.json file. You can omit the `-y` flag if you want. Then you will have to manually enter some more information.

### **Initialize git**

Well we now have stuff and a structure that we want to keep safe and committed with source control. Lets run the following command to tell git to track this folder.

```sh
git init
```

If you want to push this to a remote git control you will need to add remote points. Go ahead and create a git repo on github or bitbucket if you want. Once you create the repo you should be given a .git file you can push to that looks like `https://github.com/estepanov/my-react-express-webpack.git` or `git@github.com:estepanov/my-react-express-webpack.git`. Either one of these will work.

To add this endpoint to your newly initiialized local git repos _(meaning on your machine)_ you will need to run the following command. Make sure to replace my github repo address with yours.

```sh
git remote add origin git@github.com:estepanov/my-react-express-webpack.git
```

Next, while still in the root of our project folder, lets create a `.gitignore` file using the following command:

```sh
touch .gitignore
```

This will tell git which files we want it to ignore _(thus not track its changes)_.

Go ahead and open the `.gitignore` file in your favorite editor and we will be adding the following text to it:

```text
# Compiled Distribution
dist/

# Dependencies
node_modules/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editors and IDEs
.idea
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# Mac folder details
.DS_STORE
```

**What does this code do?** It tells git which files to ignore.

**What is the `#` and why is it in there?** This is a comment, for your convenience.

At this point I think we are ready for our first commit and to push it to our remote repo. Start by adding all the files to git in your terminal:

```sh
git add -A
```

You can check everything has been added by running:

```sh
git status
```

and you should see something like this:

>     new file:   .gitignore
>     new file:   package.json

Now its time to make our commit:

```sh
git commit -m "Initial Commit"
```

And finally lets push it to or remote link.

```sh
git push origin master
```

Pack up your stuff, you are all done! Just Kidding of course.

## Adding ESLint

To install the package run:

```Sh
yarn add --dev eslint eslint-plugin-standard eslint-plugin-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-config-standard-react eslint-config-standard
```

Create the ESLint configuration file `.eslintrc` by running the following command in the root directory:

```Sh
touch .eslintrc
```

Now add the following JSON object to `.eslintrc` file:

```JSON

```

Now we will add linting script to our `package.json` scripts object:

```JSON

```

---

## **Running Two Enviroments**

While we are building the front and backend of the application it would be nice for the right part of the application to update when a change is made.

lets install `concurrently` which lets us run multiple commands at one time.

```sh
yarn add --dev concurrently
```

---
## **Front End**

Here we will begin setting up the front end of our application.

### **Setting Up Webpack**

Lets add webpack 4 (and all the associated plugins we will be using) to our projects development dependencies by running the following yarn command:

```sh
yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

In the root repo directory lets create a `webpack.config.js` file by running the following the command:

```sh
touch webpack.config.js
```

Now open this file in a code editor. And lets place the following text into the `webpack.config.js` file:

```JavaScript

```

If you want to know whats going on read the comments in the text file above.

We need to make an `index.html` template for webpack to add the built/compiled JavaScript. Lets create the `index.html` file in the root of teh project by running:

```Sh
touch index.html
```

Now paste the following HTML into `index.html`:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>my-react-express-webpack boilerplate</title>
</head>

<body>
  <div id="app-root">
    This website requires JavaScript.
  </div>
</body>

</html>
```

### **Adding React 16**

Lets add the React dependencies

```sh
yarn add react react-dom react-router-dom
```

Now navigate to the `src/client` folder and create an `index.jsx` file. Both of these steps can be done by using the command:

```sh
cd src/client && touch index.js
```

Place the following code inside of the index.js

```JavaScript

```

### **Adding Babel**

Install the following Babel related dependencies

```sh
yarn add --dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader@^8.0.0-beta
```

Go ahead and create a `.babelrc` in the root directory.

```sh
touch .babelrc
```

Now insert the following code into `.babelrc`:

```JSON
{
  "presets": [
    "@babel/env",
    "@babel/preset-react",
    [
      "@babel/preset-stage-2",
      {
        "decoratorsLegacy": true
      }
    ]
  ]
}
```

---

## **Back end**

Now on to setting up the back end of our application.

### **Add Nodemon**

Nodemon is a great tool for listening/watching to file changes and then relauching a node process. We will be using this exclusively for our backend development. We will use webpack-dev-server to serve and update the front end application when it changes. For our back end we will use nodemon to update our backend application when it changes.

```sh
yarn add --dev nodemon
```

### **Add Express**

Express will help simplify the development of our server/API.

```sh
yarn add express
```

Now go to `src/server/` and create an `index.js` file which will be the root of our server.

In the `index.js` file place the following code:

```JavaScript

```

