import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


  
  const PostPage = () => {
    const [post, setPost] = useState<any>({});
    const params = useParams();
    

    useEffect(() => {
      // fetch the post with the user id
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [params.id])
    console.log(post)


  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
     )  ;
  
}

export default PostPage