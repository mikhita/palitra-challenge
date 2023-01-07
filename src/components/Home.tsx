import React, { useEffect, useState } from 'react';
import Paginate from 'react-paginate';
import { getPosts } from '../API/posts'; 
import { Post } from '../types';


const Home = () => {
    const [page, setPage] = useState({
        offset: 0,
        limit: 20,
      });
    
      const [posts, setPosts] = useState<Post[]>([]);
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
        {paginatedItems.map((item: Post) => (
          <li key={item.id}>{item.id} - {item.title}</li>
        ))}
      </ul>
      <Paginate
        pageCount={Math.ceil(totalItems / page.limit)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
      />     
  </div> )  ;
}
export default Home;