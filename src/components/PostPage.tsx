import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


  
  const PostPage = () => {
    const [post, setPost] = useState<any>({});
    const [user, setUser] = useState<any>({});
    const [comments, setComments] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
   

    

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [params.id])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then(response => response.json())
          .then(data => setUser(data))
      }, [post.userId])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`);
                setComments(result.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [params.id]);
     
      


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
        {loading ?  <p>Loading...</p> : (
          comments.map((comment: any) => (
            <p key={comment.id}>{"comment:  "}{comment.body}</p>
            ))
        )}
        </li>
      </ul>
    </div>
     )  ;
  
}

export default PostPage