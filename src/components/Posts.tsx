import React, { useEffect, useState } from 'react';
import Paginate from 'react-paginate';
import { getPosts } from '../API/posts'; 
import { Post, User } from '../types';
import { getUsers } from '../API/users';
import { Link } from 'react-router-dom';



const Posts = () => {
    const [page, setPage] = useState({
        offset: 0,
        limit: 20,
      });
    
      const [posts, setPosts] = useState<Post[]>([]);
      const [users, setUsers] = useState<{ [key: number]: User }>({});

      const totalItems = posts.length;
    
    
      useEffect(() => {
        const getData = async () => {
          // const  commentsData  = await getComments();
          // if(Array.isArray(commentsData)){
          //   setComments(commentsData);
          // }
        const  postsData  = await getPosts();
        if(Array.isArray(postsData)){
          setPosts(postsData);
        }
        // const  usersData  = await getUsers();
        // if(Array.isArray(usersData)){
        //   setUsers(usersData);
        // }
      };
    getData();
      }, []);

      useEffect(() => {
        async function fetchUsers() {
          const requests = posts.map((post) =>
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => res.json())
          );
    
          const users = await Promise.all(requests);
          const usersById = users.reduce<{ [key: number]: User }>((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {});
    
          setUsers(usersById);
        }
    
        if (posts.length > 0) {
          fetchUsers();
        }
      }, [posts]);
    
    
      const handlePageClick = (data: any) => {
        setPage({
          offset: data.selected * page.limit,
          limit: page.limit,
        });
      };
    
      const paginatedItems = posts.slice(page.offset, page.offset + page.limit);
    return(
     <div> 
        <ul>
        {paginatedItems.map((post) => (
          <Link to={`/users/${post.id}`}>
            <li key={post.id}>
              {users[post.userId]?.name}{" "}
            </li>
        </Link>
        ))}
      </ul>
      <Paginate className=' flex flex-row gap-4 mt-8 text-lime-800'
        pageCount={Math.ceil(totalItems / page.limit)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
      />    
  </div> )  ;
}
export default Posts;