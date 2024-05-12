webpack.config.js: webpack bundles everything and makes one exceutable javascript file that can be run 
                    The entry for webpack is in src/index.js 
                        index.js calls App.js which will render all the divs in react based on when they are called
                    The ouput will be a main.js file placed in static/frontend


babel.config.json: babel is a tool that allows for this code which is ES6 code to be compatible with older versions and older browsers
                    included => "@babel/plugin-transform-class-properties"
                    babel includes package.json
                    babel included package-lock.json

material-ui: React components prebuilt that makes it easier to build functional web interfaces 
                downloaded most recent material-ui with 
                    npm install @mui/material @emotion/react @emotion/styled
                    npm install @mui/icons-material

npm: npm (Node Package Manager) is the default package manager for the JavaScript runtime environment Node.js. 
     It is used to install, share, and manage software packages in Node.js projects.




index.html: In your specific code, the div with id="main" contains another div with id="app". This suggests that it might be used as a  main container for a JavaScript application (perhaps a React or Vue app) that mounts to the #app div.