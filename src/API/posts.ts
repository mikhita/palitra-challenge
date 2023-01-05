import axios from 'axios'

type Params = {
   
  };

type GetPostsResponse = {
  data: Params[];
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
  