const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let posts = [
  {
    id: 1,
    username: "john_doe",
    content: "Had an amazing day at the park! 🌳",
    likes: 10,
    comments: ["Looks like fun!", "Glad you enjoyed it!"],
  },
  {
    id: 2,
    username: "jane_smith",
    content: "Trying out some new recipes today 🍳",
    likes: 20,
    comments: ["Can't wait to see the result!"],
  },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts/:id/like', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.likes += 1;
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.post('/api/posts/:id/comment', (req, res) => {
  const postId = parseInt(req.params.id);
  const { comment } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.comments.push(comment);
    res.status(201).json({ comment });
  } else {
    res.status(404).send();
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
