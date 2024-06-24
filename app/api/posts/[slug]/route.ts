import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/app/models/BlogPost';
import dbConnect from '@/app/lib/dbConnect';

export async function GET(req: NextRequest, { params }: { params: { slug: number } }) {
  const id = params.slug 
  await dbConnect();

try {
  const post = await BlogPost.findById(id);
  return new NextResponse(
    JSON.stringify({ success: true, data: post }),
    { status: 200 }
  );
} catch (error) {
  return new NextResponse(
    JSON.stringify({ success: false }),
    { status: 400 }
  );
}
}

