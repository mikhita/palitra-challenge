import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
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
    <div className=' bg-amber-300 text-center flex flex-col justify-center align-middle'>
      <ul className=' bg-amber-300 text-cyan-900 w-3/4 self-center gap-3'>
        <li>
            <h1 className=' text-xl rounded-3xl'>{"post title: "}{post.title}</h1>
            <p className=' text-sm'>{"post content: "}{post.body}</p>
        </li>
        <li>
        <Link to={`/users/${post.userId}`}>
            <h1 className=' self-start text-fuchsia-900'>{"user name and last name: "}{user.name} </h1>
        </Link>
            <h2>{"user email: "}{user.email}</h2>
        </li>
        <li>
        {loading ?  <p>Loading...</p> : (
          comments.map((comment: any) => (
            <p className={` text-pink-${Math.floor(Math.random() * 9)*100} p-4 bg-`} key={comment.id}>{`comment: ${comment.id} `}{comment.body}</p>
            ))
        )}
        </li>
      </ul>
    </div>
     )  ;
  
}

export default PostPage