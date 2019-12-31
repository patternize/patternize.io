![Patternize.io](https://patternize.github.io/img/logo.png)

# Patternize.io

- View the website now: [Patternize.io](http://patternize.github.io/)

- This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. Thanks to Facebook OSS Community.

### Set up the project on your local environment
- Pre-requisit: make sure you have yarn installed on your local environment
- Then run:

```
// Find a directory on your local machine
$ git clone https://github.com/patternize/patternize.io.git

// cd into your project folder
$ cd patternize.io

// run yarn
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
- You can either use the Docusaurus official command -- If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

- Or, you can create a new repo on Github, and after running `yarn build`, in your project root folder:

```
$ cp -a build/ <your-repo-dir>/

// or you could figure out a better way to do this, because cp command will not delete deprecated files. Once in a while, you will have to wipe the repo and regenerate, then deploy a fresh build
```
