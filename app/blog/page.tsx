import React from "react";
import axios from "axios";
import Card from "../components/Card";
import Link from "next/link";
import dynamic from "next/dynamic";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
}

const LazyLoadedComponent = dynamic(() => import('../components/LazyLoadedComponent'), {
  loading: () => <p>Loading...</p>,
});

const getPosts = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading posts: ", error);
  }
};

const Blog = async() => {
  const  blogPosts  = await getPosts();
  return (
    <>
    <div>
       <Link href="/blog/new">
        <p>Create New Blog Post</p>
      </Link>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts && blogPosts.data.map((post:any) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <LazyLoadedComponent />
    </>
  );
};

export default Blog;
