Продвинутый Redux. Redux Toolkit, RTK query, TypeScript.
https://www.youtube.com/watch?v=Od5H_CiU2vM

#[Getting Started with Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

##Using Create React App​

# Redux + Plain JS template

npx create-react-app my-app --template redux

# Redux + TypeScript template

npx create-react-app my-app --template redux-typescript

##Using RTK Query
[Polling](https://redux-toolkit.js.org/rtk-query/usage/polling)

#[JSON Server](https://www.npmjs.com/package/json-server)

###Get a full fake REST API with zero coding in less than 30 seconds (seriously)
###Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.

##Getting started

###Install JSON Server
npm install -g json-server

###Create a db.json file with some data
{
"posts": [
{ "id": 1, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}

###Start JSON Server
json-server --watch db.json --port 5000
