import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


  
  const PostPage = () => {
    const [post, setPost] = useState<any>({});
    const [user, setUser] = useState<any>({});
    const [comment, setComment] = useState<any>({});

    const params = useParams();
    const paramsUser = useParams();

    console.log(paramsUser)

    

    useEffect(() => {
      // fetch the post with the user id
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [params.id])
    
    useEffect(() => {
        // fetch the post with the user id
        fetch(`https://jsonplaceholder.typicode.com/users/${paramsUser.userId}`)
          .then(response => response.json())
          .then(data => setUser(data))
      }, [paramsUser.userId])
    //   console.log(post.userId)
      


  return (
    <div>
      <ul>
        <li>
            <h1>{"post title: "}{post.title}</h1>
            <p>{"post content: "}{post.body}</p>
        </li>
        <li>
            <h1>{"user name and last name: "}{user.name} </h1>
            <h2>{"user email: "}{user.email}</h2>
        </li>
        <li>
            <h1>{"comments: "}</h1>

        </li>
      </ul>
    </div>
     )  ;
  
}

export default PostPage