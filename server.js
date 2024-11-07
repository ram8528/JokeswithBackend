import express from 'express';  // in package.json we have to declare  "type": "module", which means we want to use express as module type

const app = express();

app.use(express.static('dist'))

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req,res) => {
    const jokes  = [
        {
          "id": 1,
          "title": "Invisible Man",
          "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
          "id": 2,
          "title": "Broken Pencil",
          "content": "I got a pencil that can't be sharpened. It's pointless!"
        },
        {
          "id": 3,
          "title": "Math Teacher",
          "content": "Why was the math book sad? It had too many problems."
        },
        {
          "id": 4,
          "title": "Library Joke",
          "content": "I’m reading a book on anti-gravity. It’s impossible to put down!"
        },
        {
          "id": 5,
          "title": "Broke Down Car",
          "content": "My car broke down, so I called a tow truck. It’s going downhill!"
        }
      ];
      res.send(jokes);
}
);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});