'use client';

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface BlogPost {
  _id: string;
  title: string;
  author: string;
  datePublished: string;
  content: string;
}

interface CardProps {
  post: BlogPost;
}

const Card: React.FC<CardProps> = ({ post }) => {

  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts?id=${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">
          {post.content.length > 20
            ? post.content.substring(0, 20) + "..."
            : post.content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {post.author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {post.datePublished}
        </span>
        <Link href={`/blog/${post._id}`}>
          <p className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-2">
            Read More
          </p>
        </Link>
        <Button className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-2" onClick={() => handleDelete(post._id)}>Delete</Button>

      </div>
    </div>
  );
};

export default Card;
