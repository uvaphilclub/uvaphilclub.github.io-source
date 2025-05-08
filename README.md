<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.uvaphilclub.github.io">
    <img alt="UVA Phil Club Logo" src="src/images/Phil Club Full Logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  The Philosophy Club at UVA
</h1>

The source code for the website of The Philosophy Club at UVA. The deployment build is at https://github.com/uvaphilclub/uvaphilclub.github.io. Read this and then the wiki for more information.

##  Quick start

1.  **Prerequisites**

    [Node.js](https://nodejs.org/en/) installed on your machine 
    
    [Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) installed on your machine 

1.  **Clone this repository somewhere convenient**
    
    https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
    

1.  **Install dependencies**

    ```
    npm install 
    ```
1. **Start the development server**

    ```
    npx gatsby develop 
    ```
    View your site at `http://localhost:8000`

    Changes you make will be visible without reloading the page 

## Workflow 

All your work is done on this repository. Edit files and push them to https://github.com/uvaphilclub/uvaphilclub.github.io-source (which is where you cloned this repository from)

When you want to deploy your changes run
```
npm run deploy 
```
to push the production files to https://github.com/uvaphilclub/uvaphilclub.github.io where they will be served as a Github pages page.

Preview the build with 
```
npx gatsby build
npx gatsby serve 
```
## Structure

Most of the descriptions here are leftover from the default readme

    .
    ├── node_modules
    ├── public 
    ├── src
        ├── components - react components 
        ├── images - images
        ├── pages - all of the pages of the site 
        ├── styles - some css, most is inline with Tailwind
        ├── templates - page templates 
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── postcss.config.js 
    ├── README.md
    ├── tailwind.config.js 
    └──

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1. **`/public`**: This directory contains the production files compiled when you run npx gatsby build. Do not modify them directly, they are recompiled every time you run the build command. When you run npm run deploy, these files will be pushed to https://github.com/uvaphilclub/uvaphilclub.github.io where they will be served as a github pages.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

1. **`postcss.config.js`**: A file containing the plugins used by postcss.

1. **`tailwind.config.js`**: Tailwind config information including some animations and theme configurations.


<!-- AUTO-GENERATED-CONTENT:END -->
