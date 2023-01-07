import axios from 'axios'
import {Post} from '../types';

type GetPostsResponse = {
  data: Post[];
};

export async function getPosts() {
    try {
      // 👇️ const data: GetPostsResponse
      const { data, status } = await axios.get<GetPostsResponse>(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      // console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
      // console.log("Data from axios: ", data, " type of ", typeof data);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  