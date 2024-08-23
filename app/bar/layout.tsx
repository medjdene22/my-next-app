import Link from "next/link";
import Image from "next/image";
export default function BarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="hero min-h-full bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row ">
          <Image 
            width={1024} height={576}
            src="https://media.timeout.com/images/103426100/1024/576/image.webp" 
            className="max-w-full mb-6 lg:max-w-md shadow-2xl rounded-lg" 
            alt={""} />
          <div>
            <h1 className="text-5xl font-bold">Welcome to our Bar</h1>
            <p className="py-6">  feel free to order as many drink as you want. </p>
            <Link href={`/bar/11000`} className="btn btn-secondary">Let's get some</Link>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
    
  );
}
