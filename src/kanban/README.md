Features
.js files process by babel - JavaScript compiler
configured webpack-dev-server
HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
.svg,.png, .jpg files processed by file-loader
.css files processed by style-loader and css-loader, has css modules support
to use css as module, it should be named as *.module.css, f.e.:
import css from "./header.module.css";

<header style="${css.header}"></header>;
you can also import your .html file (processed by html-loader):
import "./component.css";
import html from "./board.html";

component.innerHTML = html;
Installation
Clone project to your folder and then install dependencies:

npm install
How to run WebPack dev server:

npm start
How to build project:

npm run build
