import axios from 'axios'

type Params = {
   
  };

type GetCommentsResponse = {
  data: Params[];
};

export async function getComments() {
    try {
      // 👇️ const data: GetCommentsResponse
      const { data, status } = await axios.get<GetCommentsResponse>(
        `https://jsonplaceholder.typicode.com/comments`,
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
  