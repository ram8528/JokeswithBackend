// import express from 'express';  // in package.json we have to declare  "type": "module", which means we want to use express as module type
// import require from 'express';

// const app = express();
// const path = require('path');


// app.use(express.static(path.join(dist, 'public')));
// // app.use(express.static('dist'))

// // app.get('/', (req,res)=>{
// //     res.send('Server is ready');
// // });

// // get a list of 5 jokes

// app.get('/api/jokes', (req,res) => {
//     const jokes  = [
//         {
//           "id": 1,
//           "title": "Invisible Man",
//           "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
//         },
//         {
//           "id": 2,
//           "title": "Broken Pencil",
//           "content": "I got a pencil that can't be sharpened. It's pointless!"
//         },
//         {
//           "id": 3,
//           "title": "Math Teacher",
//           "content": "Why was the math book sad? It had too many problems."
//         },
//         {
//           "id": 4,
//           "title": "Library Joke",
//           "content": "I’m reading a book on anti-gravity. It’s impossible to put down!"
//         },
//         {
//           "id": 5,
//           "title": "Broke Down Car",
//           "content": "My car broke down, so I called a tow truck. It’s going downhill!"
//         }
//       ];
//       res.send(jokes);
// }
// );


// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Serve at http://localhost:${port}`);
// });



import express from 'express';  // Use 'import' for express
import path from 'path';        // Use 'import' for path

const app = express();

// Correct the static file serving path (ensure 'dist' is the right path)
app.use(express.static(path.join(process.cwd(), 'dist')));  // Serve static from 'dist' folder  // The process.cwd() will ensure that the server correctly resolves the path to the dist folder from your project’s root directory.
// This setup assumes that your dist folder (generated by your frontend build process) is in the root of the project.

// Route for getting jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    { "id": 1, "title": "Invisible Man", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
    { "id": 2, "title": "Broken Pencil", "content": "I got a pencil that can't be sharpened. It's pointless!" },
    { "id": 3, "title": "Math Teacher", "content": "Why was the math book sad? It had too many problems." },
    { "id": 4, "title": "Library Joke", "content": "I’m reading a book on anti-gravity. It’s impossible to put down!" },
    { "id": 5, "title": "Broke Down Car", "content": "My car broke down, so I called a tow truck. It’s going downhill!" }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




















// import { createServer } from 'http';
// import express from 'express';
// import path from 'path';

// const app = express();

// // Serve static files from 'dist' directory
// app.use(express.static(path.join(process.cwd(), 'dist')));

// // API route for jokes
// app.get('/api/jokes', (req, res) => {
//   const jokes = [
//     { "id": 1, "title": "Invisible Man", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
//     { "id": 2, "title": "Broken Pencil", "content": "I got a pencil that can't be sharpened. It's pointless!" },
//     { "id": 3, "title": "Math Teacher", "content": "Why was the math book sad? It had too many problems." },
//     { "id": 4, "title": "Library Joke", "content": "I’m reading a book on anti-gravity. It’s impossible to put down!" },
//     { "id": 5, "title": "Broke Down Car", "content": "My car broke down, so I called a tow truck. It’s going downhill!" }
//   ];
//   res.send(jokes);
// });

// export default function handler(req, res) {
//   createServer(app).listen(3000, () => {
//     console.log(`Server listening on http://localhost:3000`);
//   });
// }
