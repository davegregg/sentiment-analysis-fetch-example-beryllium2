The JavaScript in this project is NOT meant to be run by the browser. This is meant to be run by Node.js on your terminal! So we will do a few things differently. Here is how we do it!

1. After cloning this project to your computer, in this project directory on your terminal, run the command `npm install` in order to install this project's dependencies. In this case, the only external tool we require is a version of fetch() for making HTTP requests. (This is because fetch() is a browser feature and doesn't come built-in to Node.js.)
        
2. Then, also in this project directory on your terminal, run the command `node main.js`, which will run this JavaScript file on the command-line.