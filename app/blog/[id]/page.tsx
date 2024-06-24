import Link from "next/link";
import React from "react";
import axios from "axios";

export default async function BlogDetail({ params }: { params: { id: string } }) {
    const id = params.id;
    const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
    const post: any = res.data.data;
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-2">
                Author: <span className="font-semibold">{post.author}</span>
            </p>
            <p className="text-gray-600 mb-4">
                Published Date: <span className="font-semibold">{post.datePublished}</span>
            </p>
            <div className="prose">
                {post.content.split("\n").map((paragraph: any, index: any) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="mt-8">
                <Link href="/blog">
                    <p className="text-blue-500 hover:underline">← Back to Blog</p>
                </Link>
            </div>
        </div>
    );
}

