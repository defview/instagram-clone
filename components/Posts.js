import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'

/*const  posts = [
    {
        id: '123',
        username: 'N Scott',
        userImg: 'http://cdn.onlinewebfonts.com/svg/img_312847.png',
        img: 'https://i.pinimg.com/236x/cd/9a/a8/cd9aa888e484f7d5f613434946a25904.jpg',
        caption: "What's Good",
    },
    {
        id: '123',
        username: 'N Scott',
        userImg: 'http://cdn.onlinewebfonts.com/svg/img_312847.png',
        img: 'https://i.pinimg.com/236x/f3/71/c3/f371c31d0a9d5fc19627a23aa6fb113b.jpg',
        caption: "What's Good",
    },
    {
        id: '123',
        username: 'N Scott',
        userImg: 'http://cdn.onlinewebfonts.com/svg/img_312847.png',
        img: 'https://i.pinimg.com/236x/d5/1a/57/d51a57e4c46b58d9a0baabc5a8c5accb.jpg',
        caption: "What's Good",
    },
];*/

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
     );


  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            />
        ))}
    </div>
  )
}

export default Posts