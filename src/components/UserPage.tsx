import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Post, User } from '../types';




function UserPage() {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [showMore, setShowMore] = useState(false);
    const [postsToDisplay, setPostsToDisplay] = useState(5);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => setUserPosts(data.filter((post: any) => post.userId === Number(userId))));
      }, [userId])
    if (!user) {
        return <div>Loading...</div>;
    }

    const handleButtonClick = () => {
        setShowMore(!showMore);
        setPostsToDisplay(showMore ? 5 : userPosts.length);
    };

  return (
    <div className=' bg-yellow-500 text-center flex flex-col justify-center align-middle'>
    <ul className=' bg-gray-800 text-yellow-50 w-3/4 self-center gap-3'>
        <li>
           {"Name: "} {user.name}
        </li>
        <li>
           {"Username: "} {user.username}
        </li>
        <li>
           {"email: "} {user.email}
        </li>
        <li>
            {"city: "}{user.address.city}
        </li>
        <li>
            {"Zipcode: "} {user.address.zipcode}
        </li>
        <li>
            {"phone: "} {user.phone}
        </li>
        <li>
            {"website: "} {user.website}
        </li>
        <li>
            {"company name: "} {user.company.name}
        </li>
    </ul>
    <h1>{"user post list: "}</h1>
    <ul className=' w-3/4 self-center gap-3'>
        {userPosts.slice(0, postsToDisplay).map((post: any) => (
            <li className=' p-6' key={post.id}>
                <div className=' flex flex-col'>
                    <h2 className=' flex flex-row '>{post.id}{"  "}{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </li>
        ))}
    </ul>
    <button className=' text-red-600' onClick={handleButtonClick}>{showMore ? ' Show Less' : ' Show More'}</button>
</div>


  )
}

export default UserPage