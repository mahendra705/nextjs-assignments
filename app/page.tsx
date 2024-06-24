import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="text-center">Home Page</h3>
      <Image
        src={'https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg'}
        alt={'Home Page'}
        width={600}
        height={400}
        priority
      />
    </main>
  );
}
