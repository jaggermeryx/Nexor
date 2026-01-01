import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc, 
  query, 
  orderBy,
  serverTimestamp,
  onSnapshot 
} from 'firebase/firestore';

// Simple inline styles to replace Tailwind
const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #1f2937; color: #e5e7eb; }
  .container { max-width: 768px; margin: 0 auto; }
  .btn { padding: 8px 16px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; transition: all 0.2s; }
  .btn-primary { background: #2563eb; color: white; }
  .btn-primary:hover { background: #1d4ed8; }
  .btn-secondary { background: #374151; color: #e5e7eb; }
  .btn-secondary:hover { background: #4b5563; }
  .card { background: #111827; border: 1px solid #374151; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
  .header { background: #111827; border-bottom: 1px solid #374151; padding: 12px 16px; position: sticky; top: 0; z-index: 50; }
  .input { width: 100%; background: #374151; border: 1px solid #4b5563; border-radius: 8px; padding: 8px 12px; color: #e5e7eb; }
  .input:focus { outline: none; border-color: #2563eb; }
  .textarea { resize: none; }
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .gap-2 { gap: 8px; }
  .gap-3 { gap: 12px; }
  .mt-2 { margin-top: 8px; }
  .mt-4 { margin-top: 16px; }
  .mb-2 { margin-bottom: 8px; }
  .mb-4 { margin-bottom: 16px; }
  .p-4 { padding: 16px; }
  .text-sm { font-size: 14px; }
  .text-xs { font-size: 12px; }
  .font-bold { font-weight: 700; }
  .text-gray-400 { color: #9ca3af; }
  .text-gray-500 { color: #6b7280; }
  .text-blue-400 { color: #60a5fa; }
  .text-red-500 { color: #ef4444; }
  .rounded-full { border-radius: 9999px; }
  .w-full { width: 100%; }
  .hidden { display: none; }
`;

const App = () => {
  const ADMIN_IDS = ['5905345933', '7282835498', '7515768859'];
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('threads');
  const [postType, setPostType] = useState('thread');
  const [isPremiumOnly, setIsPremiumOnly] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(null);
  const [commentText, setCommentText] = useState('');

  // Initialize Telegram WebApp
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      
      const user = tg.initDataUnsafe?.user;
      if (user) {
        setCurrentUser({
          id: String(user.id),
          username: user.username || user.first_name,
          firstName: user.first_name,
          photoUrl: user.photo_url,
          isPremium: false,
          gifts: []
        });
        setIsLoggedIn(true);
      }
    }
    
    // For testing without Telegram
    if (!window.Telegram?.WebApp) {
      setTimeout(() => {
        setCurrentUser({
          id: '123456789',
          username: 'TestUser',
          firstName: 'Test',
          photoUrl: null,
          isPremium: false,
          gifts: []
        });
        setIsLoggedIn(true);
      }, 1000);
    }
  }, []);

  // Load posts from Firebase
  useEffect(() => {
    if (!isLoggedIn) return;
    
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isLoggedIn]);

  // Create post
  

  // Like post
  const handleLike = async (postId, likedBy) => {
    if (!currentUser) return;

    const postRef = doc(db, 'posts', postId);
    const hasLiked = likedBy?.includes(currentUser.id);
    
    const newLikedBy = hasLiked
      ? likedBy.filter(id => id !== currentUser.id)
      : [...(likedBy || []), currentUser.id];

    try {
      await updateDoc(postRef, {
        likedBy: newLikedBy,
        likes: newLikedBy.length
      });
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Add comment
  const handleComment = async (postId, cconst handlePost = async () => {
    if (!newPost.trim() || !currentUser) {
      alert('Please write something first!');
      return;
    }

    try {
      console.log('Attempting to create post...');
      console.log('User:', currentUser);
      console.log('Post content:', newPost);
      
      await addDoc(collection(db, 'posts'), {
        userId: currentUser.id,
        user: currentUser.username,
        avatar: currentUser.photoUrl || '👤',
        isPremium: currentUser.isPremium || false,
        customBadge: currentUser.customBadge || null,
        userGifts: currentUser.gifts || [],
        isAdmin: ADMIN_IDS.includes(currentUser.id),
        postType: postType,
        premiumOnly: isPremiumOnly,
        content: newPost,
        likes: 0,
        likedBy: [],
        comments: 0,
        commentList: [],
        createdAt: serverTimestamp()
      });
      
      console.log('Post created successfully!');
      setNewPost('');
      setPostType('thread');
      setIsPremiumOnly(false);
    } catch (error) {
      console.error('Detailed error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      alert('Error details: ' + error.message + ' (Code: ' + error.code + ')');
    }
  };
                               
                               const handleComment = async (postId, currentCommentList) =>
    if (!commentText.trim() || !currentUser) return;

    const newComment = {
      id: Date.now(),
      user: currentUser.username,
      userId: currentUser.id,
      avatar: currentUser.photoUrl || '👤',
      content: commentText,
      timestamp: new Date().toISOString(),
      isPremium: currentUser.isPremium,
      userGifts: currentUser.gifts || [],
      isAdmin: ADMIN_IDS.includes(currentUser.id)
    };

    try {
      const postRef = doc(db, 'posts', postId);
      const updatedCommentList = [...(currentCommentList || []), newComment];
      
      await updateDoc(postRef, {
        commentList: updatedCommentList,
        comments: updatedCommentList.length
      });
      
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Filter posts
  const getFilteredPosts = () => {
    let filtered = posts;
    
    if (currentUser && !currentUser.isPremium && !ADMIN_IDS.includes(currentUser.id)) {
      filtered = filtered.filter(p => !p.premiumOnly);
    }
    
    if (activeTab === 'threads') {
      filtered = filtered.filter(p => p.postType === 'thread');
    } else if (activeTab === 'admin') {
      filtered = filtered.filter(p => p.postType === 'admin');
    } else if (activeTab === 'discussion') {
      filtered = filtered.filter(p => p.postType === 'discussion');
    }
    
    return filtered;
  };

  const filteredPosts = getFilteredPosts();

  if (!isLoggedIn || loading) {
    return (
      <>
        <style>{styles}</style>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
            <p style={{ color: '#9ca3af' }}>Loading Nexor...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div style={{ minHeight: '100vh', background: '#1f2937' }}>
        {/* Header */}
        <div className="header">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div style={{ width: '32px', height: '32px', background: '#374151', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🛡️
              </div>
              <h1 className="font-bold">Nexor</h1>
            </div>
            <div style={{ padding: '4px 12px', background: '#374151', borderRadius: '8px', fontSize: '14px' }}>
              @{currentUser.username}
            </div>
          </div>
        </div>

        <div className="container">
          {/* Tabs */}
          <div className="flex gap-2 p-4">
            <button
              onClick={() => setActiveTab('threads')}
              className={`btn ${activeTab === 'threads' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Threads
            </button>
            <button
              onClick={() => setActiveTab('discussion')}
              className={`btn ${activeTab === 'discussion' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Discussions
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`btn ${activeTab === 'admin' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Admin Posts
            </button>
          </div>

          {/* Create Post */}
          <div className="card">
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setPostType('thread')}
                className={`btn text-sm ${postType === 'thread' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Thread
              </button>
              <button
                onClick={() => setPostType('discussion')}
                className={`btn text-sm ${postType === 'discussion' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Discussion
              </button>
              {ADMIN_IDS.includes(currentUser.id) && (
                <button
                  onClick={() => setPostType('admin')}
                  className={`btn text-sm ${postType === 'admin' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Admin
                </button>
              )}
            </div>
            
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              className="input textarea"
              rows="3"
            />
            
            <button
              onClick={handlePost}
              disabled={!newPost.trim()}
              className="btn btn-primary mt-2 w-full"
              style={{ opacity: !newPost.trim() ? 0.5 : 1 }}
            >
              Post
            </button>
          </div>

          {/* Posts Feed */}
          <div className="p-4">
            {filteredPosts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '64px 16px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
                <p className="text-gray-400">No posts yet. Be the first!</p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <div key={post.id} className="card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div style={{ width: '40px', height: '40px', background: '#374151', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {post.avatar}
                      </div>
                      <div>
                        <div className="font-bold">@{post.user}</div>
                        <div className="text-xs text-gray-500">
                          {post.createdAt?.toDate?.()?.toLocaleString() || 'Just now'}
                        </div>
                      </div>
                    </div>
                    {post.isAdmin && (
                      <span style={{ padding: '2px 8px', background: '#dc2626', color: 'white', fontSize: '10px', fontWeight: 'bold', borderRadius: '4px' }}>
                        ADMIN
                      </span>
                    )}
                  </div>

                  <p style={{ marginBottom: '16px', whiteSpace: 'pre-wrap' }}>{post.content}</p>

                  <div className="flex gap-3" style={{ paddingTop: '12px', borderTop: '1px solid #374151' }}>
                    <button
                      onClick={() => handleLike(post.id, post.likedBy)}
                      className="flex items-center gap-2"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: post.likedBy?.includes(currentUser.id) ? '#ef4444' : '#9ca3af' }}
                    >
                      ❤️ {post.likes || 0}
                    </button>
                    <button
                      onClick={() => setShowComments(post)}
                      className="flex items-center gap-2"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
                    >
                      💬 {post.comments || 0}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Comments Modal */}
        {showComments && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setShowComments(null)}>
            <div style={{ background: '#111827', border: '1px solid #374151', borderRadius: '12px', maxWidth: '768px', width: '100%', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4" style={{ borderBottom: '1px solid #374151' }}>
                <h3 className="font-bold">Comments</h3>
                <button onClick={() => setShowComments(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#9ca3af' }}>✕</button>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                {showComments.commentList && showComments.commentList.length > 0 ? (
                  showComments.commentList.map(comment => (
                    <div key={comment.id} className="flex gap-2 mb-3">
                      <div style={{ width: '32px', height: '32px', background: '#374151', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                        {comment.avatar}
                      </div>
                      <div style={{ flex: 1, background: '#1f2937', padding: '12px', borderRadius: '8px' }}>
                        <div className="font-bold text-sm mb-1">@{comment.user}</div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: 'center', padding: '32px' }}>
                    <p className="text-gray-400">No comments yet</p>
                  </div>
                )}
              </div>

              <div className="p-4" style={{ borderTop: '1px solid #374151' }}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleComment(showComments.id, showComments.commentList)}
                    placeholder="Write a comment..."
                    className="input"
                    style={{ flex: 1 }}
                  />
                  <button
                    onClick={() => handleComment(showComments.id, showComments.commentList)}
                    disabled={!commentText.trim()}
                    className="btn btn-primary"
                    style={{ opacity: !commentText.trim() ? 0.5 : 1 }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
