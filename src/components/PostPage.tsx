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
    <div className='container mx-auto p-8'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-4'>Post Title: {post.title}</h1>
        <p className='text-xl mb-8'>Post Content: {post.body}</p>
        <Link to={`/users/${post.userId}`} className='bg-teal-500 text-white p-4 rounded-lg hover:bg-teal-600'>
            View User Profile
        </Link>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>User Information</h2>
        <div className='flex flex-col items-center'>
            <p className='text-lg mb-4'>User Name and Last Name: {user.name}</p>
            <p className='text-lg mb-4'>User Email: {user.email}</p>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Comments</h2>
        {loading ?  <p>Loading...</p> : (
          comments.map((comment: any) => (
            <div className='flex flex-col items-center mt-4' key={comment.id}>
              <p className='text-lg'>Comment: {comment.body}</p>
            </div>
            ))
        )}
      </div>
    </div>
     )  ;
  
}

export default PostPage