import React from "react";
import axios from "axios";
import Card from "../components/Card";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
}

const Blog = async() => {
  const res = await axios.get("https://dummyapi.online/api/blogposts");
  const blogPosts: BlogPost[] = res.data.slice(0, 10);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
