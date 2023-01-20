# JSONPlaceholder API Challenge

### This API allows users to access and manipulate the data from the JSONPlaceholder website, which includes information about posts, comments, and users.

## Features

- Every post has a unique link that leads to a new page displaying the post's details
- Pagination is available for viewing multiple posts at a time
- Users can also access a separate page displaying all of a specific user's posts

## Endpoints

- /posts: retrieves a list of all posts, with the option to paginate through them.

- /posts/:id: retrieves the details of a specific post, where :id is the unique identifier of the post.

- /users/:id: retrieves a list of all posts made by a specific user, where :id is the unique identifier of the user.

## Pagination

### To paginate through the list of posts, include the page number in the query string of the /posts endpoint. For example, to view the second page of posts, make a request to /posts?page=2.

## Example Use

### To retrieve the details of the post with an ID of 1, make a GET request to /posts/1.

### To view the third page of posts, make a GET request to /posts?page=3.

### To view all posts made by the user with an ID of 2, make a GET request to /users/2.
