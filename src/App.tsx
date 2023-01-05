import React, { useState, useEffect } from 'react';
import { getComments } from './API/comments';
import { getPosts } from './API/posts';
import { getUsers } from './API/users';
import { Comment, Post, User } from './types';
import ReactPaginate from "react-paginate";



function App(): JSX.Element {
  const [comments, setComments] = useState<Comment[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]); 


  function Items({ currentItems }: any) {
    return (
      <>
        {currentItems &&
          currentItems.map((post: any) => (
            <div>
              <h3>User #{post.id}</h3>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }: any) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % posts.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        />
      </>
    );
  }

    useEffect(() => {
      const getData = async () => {
          const  commentsData  = await getComments();
          if(Array.isArray(commentsData)){
            setComments(commentsData);
          }
        const  postsData  = await getPosts();
        if(Array.isArray(postsData)){
          setPosts(postsData);
        }
        const  usersData  = await getUsers();
        if(Array.isArray(usersData)){
          setUsers(usersData);
        }
      };
  getData();
}, []);

  return (
    <div>
      <PaginatedItems itemsPerPage={20} />
    </div>
  );
}

export default App;
