// pages/api/posts.ts

import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/app/models/BlogPost';
import dbConnect from '@/app/lib/dbConnect';


export async function POST(req: NextRequest) {

  await dbConnect();
    const { title, content, author } = await req.json();

    if (!title || !content || !author) {
      return new NextResponse(
        JSON.stringify({ message: 'Title, Author and content are required' }),
        { status: 400 }
      );
    }

    try {
      const post = await BlogPost.create({ title, content, author });
      return new NextResponse(
        JSON.stringify({ success: true, data: post }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ success: false, error }),
        { status: 400 }
      );
    }

}

export async function GET(req: NextRequest) {
  await dbConnect();

try {
  const posts = await BlogPost.find({});
  return new NextResponse(
    JSON.stringify({ success: true, data: posts }),
    { status: 200 }
  );
} catch (error) {
  return new NextResponse(
    JSON.stringify({ success: false }),
    { status: 400 }
  );
}
}

export async function DELETE(request: NextRequest) {

  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
   await BlogPost.findByIdAndDelete(id);
  return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}

