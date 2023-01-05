import axios from 'axios'

type Params = {
   
  };

type GetUsersResponse = {
  data: Params[];
};

export async function getUsers() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        `https://jsonplaceholder.typicode.com/users`,
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
  