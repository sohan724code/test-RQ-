import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

const fetchComments = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const data = await response.json();
  return data;
};

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export const PostDetails = ({ post }) => {
  const { isLoading, isError, error, data } = useQuery(
    ["comment", post.id],
    () => fetchComments(post.id)
  );
  return (
    <Box>
      <Typography style={{ color: "blue" }}>{post.title}</Typography>
      <button>Delete</button> <button>Update title</button>
      <Typography>{post.body}</Typography>
      <Typography>Comments</Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>{error.message}</Typography>
      ) : (
        data.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))
      )}
    </Box>
  );
};
