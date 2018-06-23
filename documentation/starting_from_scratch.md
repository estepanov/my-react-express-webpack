# Building This Boilerplate From Scratch

I hope you find this useful. If you find any problems, errors, or just have a comment feel free to post an issue in this repository.

## File Structure

Lets start by building out the file structure for the project. First we need to make a folder that will hold the repository (this project that we are remaking).

```shell
mkdir my-react-express-webpack && cd my-react-express-webpack
```

This created a folder called `my-react-express-webpack` and opened that directory. Now the following commands will all run inside of our repository directory.

Lets create a `src` folder that will hold the source code for both the client and the server:

```shell
mkdir src src/client src/server
```

This command creates a `src` folder and then two folders inside of the `src` folder called `client` and `server`.

## Initialize package.json

Next lets initialize our main folder so that we can install packages.

> **_Note:_** I am going to use [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) in this guide instead of npm. You do not have to use it, I just like it.

```shell
yarn init -y
```

Now that we have created a `package.json` file inside of our `my-react-express-webpack` folder we can proceed with the installation of packages (or dependencies).

> **_Note:_** You can see I put a `-y` flag in the `yarn init` command, this just simplifies the initialization of package.json file. You can omit the `-y` flag if you want. Then you will have to manually enter some more information.

## Initialize git

Well we now have stuff and a structure that we want to keep safe and committed with source control. Lets run the following command to tell git to track this folder.

```shell
git init
```

If you want to push this to a remote git control you will need to add remote points. Go ahead and create a git repo on github or bitbucket if you want. Once you create the repo you should be given a .git file you can push to that looks like `https://github.com/estepanov/my-react-express-webpack.git` or `git@github.com:estepanov/my-react-express-webpack.git`. Either one of these will work.

To add this endpoint to your newly initiialized local git repos _(meaning on your machine)_ you will need to run the following command. Make sure to replace my github repo address with yours.

```shell
git remote add origin git@github.com:estepanov/my-react-express-webpack.git
```

Next, while still in the root of our project folder, lets create a `.gitignore` file using the following command:

```shell
touch .gitignore
```

This will tell git which files we want it to ignore _(thus not track its changes)_.

Go ahead and open the `.gitignore` file in your favorite editor and we will be adding the following text to it:

```text
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

**What does this text do?** It tells git which files to ignore.

**What is the `#` and why is it in there?** This is mark a comment, for your convenience.

At this point I think we are ready for our first commit and to push it to our remote repo. Start by adding all the files to git in your terminal:

```shell
git add -A
```

You can check everything has been added by running:

```shell
git status
```

and you should see something like this:

>     new file:   .gitignore
>
>     new file:   package.json
>
>     new file:   yarn.lock

Now its time to make our commit:

```shell
git commit -m "Initial Commit"
```

And finally lets push it to or remote link.

```shell
git push origin master
```

Pack up your stuff, you are all done! Just Kidding of course.
