import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data with more posts and enhanced comment structure
    const demoData = [
      {
        id: 1,
        username: "sarah_design",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        content: "Just finished this new design project! 🎨",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
        likes: 234,
        comments: [
          { id: 1, text: "Looks amazing!", likes: 5, userId: "user1" },
          { id: 2, text: "Great work! 🔥", likes: 3, userId: "user2" }
        ],
        timeAgo: "2h ago"
      },
      {
        id: 2,
        username: "travel_mike",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        content: "Beautiful sunset at the beach today 🌅",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        likes: 456,
        comments: [
          { id: 1, text: "Paradise! 🏖️", likes: 8, userId: "user3" },
          { id: 2, text: "Take me there!", likes: 4, userId: "user1" }
        ],
        timeAgo: "5h ago"
      },
      {
        id: 3,
        username: "foodie_adventures",
        userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        content: "Made this amazing pasta from scratch! 🍝",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        likes: 789,
        comments: [
          { id: 1, text: "Recipe please! 😍", likes: 12, userId: "user4" },
          { id: 2, text: "Looks delicious!", likes: 6, userId: "user5" }
        ],
        timeAgo: "6h ago"
      },
      {
        id: 4,
        username: "tech_enthusiast",
        userAvatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
        content: "Just got my hands on the latest gadget! 📱",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece",
        likes: 567,
        comments: [
          { id: 1, text: "How's the battery life?", likes: 3, userId: "user6" },
          { id: 2, text: "Great choice!", likes: 2, userId: "user7" }
        ],
        timeAgo: "8h ago"
      },
      {
        id: 5,
        username: "fitness_guru",
        userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        content: "Morning workout complete! 💪",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        likes: 890,
        comments: [
          { id: 1, text: "You're inspiring!", likes: 15, userId: "user8" },
          { id: 2, text: "Share your routine!", likes: 7, userId: "user9" }
        ],
        timeAgo: "10h ago"
      },
      {
        id: 6,
        username: "art_lover",
        userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        content: "Latest painting finished! 🎨",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
        likes: 345,
        comments: [
          { id: 1, text: "Beautiful colors!", likes: 9, userId: "user10" },
          { id: 2, text: "Masterpiece! 👏", likes: 5, userId: "user11" }
        ],
        timeAgo: "12h ago"
      },
      {
        id: 7,
        username: "bookworm",
        userAvatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
        content: "Current read 📚",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        likes: 234,
        comments: [
          { id: 1, text: "Love this book!", likes: 6, userId: "user12" },
          { id: 2, text: "Let me know your thoughts!", likes: 4, userId: "user13" }
        ],
        timeAgo: "14h ago"
      },
      {
        id: 8,
        username: "music_vibes",
        userAvatar: "https://images.unsplash.com/photo-1592621385612-4d7129426394",
        content: "New song drop! 🎵",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        likes: 678,
        comments: [
          { id: 1, text: "On repeat! 🔥", likes: 11, userId: "user14" },
          { id: 2, text: "Amazing production!", likes: 8, userId: "user15" }
        ],
        timeAgo: "16h ago"
      },
      {
        id: 9,
        username: "nature_explorer",
        userAvatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        content: "Found this hidden waterfall! 🏞️",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9",
        likes: 901,
        comments: [
          { id: 1, text: "Location please!", likes: 14, userId: "user16" },
          { id: 2, text: "Breathtaking view!", likes: 9, userId: "user17" }
        ],
        timeAgo: "18h ago"
      },
      {
        id: 10,
        username: "pet_lover",
        userAvatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
        content: "Meet my new furry friend! 🐶",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
        likes: 1234,
        comments: [
          { id: 1, text: "So adorable! ❤️", likes: 20, userId: "user18" },
          { id: 2, text: "What's their name?", likes: 12, userId: "user19" }
        ],
        timeAgo: "20h ago"
      },
      {
        id: 11,
        username: "coffee_addict",
        userAvatar: "https://images.unsplash.com/photo-1558898479-33c0057a5d12",
        content: "Perfect morning brew ☕",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        likes: 445,
        comments: [
          { id: 1, text: "Coffee goals!", likes: 7, userId: "user20" },
          { id: 2, text: "Which beans?", likes: 5, userId: "user21" }
        ],
        timeAgo: "22h ago"
      },
      {
        id: 12,
        username: "gardening_tips",
        userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        content: "Spring garden in full bloom! 🌸",
        image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b",
        likes: 567,
        comments: [
          { id: 1, text: "Gorgeous flowers!", likes: 10, userId: "user22" },
          { id: 2, text: "Any tips for beginners?", likes: 6, userId: "user23" }
        ],
        timeAgo: "23h ago"
      }
    ];
    setPosts(demoData);
    setLoading(false);
  }, []);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentLike = (postId, commentId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: post.comments.map((comment) =>
              comment.id === commentId
                ? { ...comment, likes: comment.likes + 1 }
                : comment
            ),
          }
          : post
      )
    );
  };

  const handleCommentDelete = (postId, commentId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: post.comments.filter((comment) => comment.id !== commentId),
          }
          : post
      )
    );
  };

  const handleComment = (postId, commentText) => {
    const newComment = {
      id: Date.now(),
      text: commentText,
      likes: 0,
      userId: "currentUser", // In a real app, this would be the logged-in user's ID
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Social Feed</h1>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={post.userAvatar}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-sm">{post.username}</h2>
                  <p className="text-xs text-gray-500">{post.timeAgo}</p>
                </div>
              </div>
            </div>

            <img
              src={post.image}
              alt="Post content"
              className="w-full h-96 object-cover"
            />

            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-600">{post.content}</p>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <span>👍</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>💬</span>
                  <span>{post.comments.length}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>↗️</span>
                </button>
              </div>

              <div className="space-y-2">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{comment.text}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleCommentLike(post.id, comment.id)}
                          className="text-xs text-gray-500 hover:text-rose-600 transition-colors"
                        >
                          ❤️ {comment.likes}
                        </button>
                        <button
                          onClick={() => handleCommentDelete(post.id, comment.id)}
                          className="text-xs text-gray-500 hover:text-red-600 transition-colors"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const comment = e.target.elements.comment.value;
                    if (comment.trim()) {
                      handleComment(post.id, comment);
                      e.target.reset();
                    }
                  }}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;