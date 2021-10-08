/* INSTRUCTIONS *************************************************************************
   This JavaScript is NOT meant to be run by the browser. This is meant to be run by Node.js on your terminal! So we will do a few things differently. Here is how we do it!

        1. In this project directory on your terminal, run the command `npm install` in order to install this project's dependencies. In this case, the only external tool we require is a version of fetch() for making HTTP requests. (This is because fetch() is a browser feature and doesn't come built-in to Node.js.)
        
        2. Then, also in this project directory on your terminal, run the command `node main.js`, which will run this JavaScript file on the command-line.
******************************************************************************************/

const fetch = require("cross-fetch") // Here is how we are getting a version of fetch() in our code. We can do this here because I ran `npm install cross-fetch` within this project when I created it. Because I did that already, you won't have to. All you will have to do on your computer is run `npm install` in the project directory, as I said in Step 1 above.

const paragraph = `The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web. The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser.

During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.`

const url = "https://sentim-api.herokuapp.com/api/v1/"
const options = {
    method: "POST", // "POST" requests are for SENDING data
    body: JSON.stringify({ text: paragraph }), // The Sentim API requested that we send our text within a object with the property of "text". So we are creating that object, containing our paragraph from above and turning it into a JSON string to be "posted" (or sent) to their server.
    headers: { // They also required us to set these two "headers":
        "Accept":       "application/json",
        "Content-Type": "application/json",
    },
}

fetch(url, options) // Now we tell fetch() the URL for the API and our request options.
    .then(response => response.json()) // Then we assert that we expect the RESPONSE to contain JSON data, which will attempt to convert that data from JSON into a real JavaScript object, so that we can work with it.
    .then(sentimentAnalyisData => console.log(sentimentAnalyisData)) // Then we receive that data and do whatever we want with it.