import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { PostDetails } from "../Home/PostDetails/PostDetails";
const maxPostPage = 10;

const fetchPosts = async (pageNum) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit-10&_page=${pageNum}`
  );
  const data = await response.json();
  return data;
};
export const Posts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage === maxPostPage) {
      const nextpage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextpage], () =>
        fetchPosts(nextpage)
      );
    }
  }, [currentPage, queryClient]);

  const { isLoading, error, data } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
  return (
    <Box>
      <Container>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>{error.message}</Typography>
        ) : (
          data?.map((post) => (
            <Box key={post.id}>
              <Typography onClick={() => setSelectedPost(post)}>
                {post.title}
              </Typography>
            </Box>
          ))
        )}
        <Box sx={{ display: "flex", gap: "10px", my: 2 }}>
          <button
            disabled={currentPage <= 0 ? true : false}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
          >
            Previous page
          </button>
          <span>Page {currentPage + 1}</span>
          <button
            disabled={currentPage == maxPostPage ? true : false}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
          >
            Next page
          </button>
        </Box>
        <Divider />
        {selectedPost && <PostDetails post={selectedPost} />}
      </Container>
    </Box>
  );
};
