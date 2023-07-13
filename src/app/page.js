import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-my-blue">
      <h1 className="text-5xl font-bold font-serif text-my-pink mb-12">Algo Test</h1>
      <div className="phases flex flex-wrap gap-4 mx-auto justify-center text-center text-my-pink italic text-2xl">
        <div className="phase-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="/phase1">
            <div className="phase-image relative">
              <Image src="/phase1.png"  height={400} width={400} objectFit="cover" />
            </div>
            <h2 className="phase-heading py-4">Phase 1</h2>
          </Link>
        </div>
        <div className="phase-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="/phase2">
            <div className="phase-image relative">
              <Image src="/phase2.png"  height={400} width={400} objectFit="cover" />
            </div>
            <h2 className="phase-heading py-4">Phase 2</h2>
          </Link>
        </div>
        <div className="phase-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="/phase3">
            <div className="phase-image relative">
              <Image src="/phase3.png"  height={400} width={400} objectFit="cover" />
            </div>
            <h2 className="phase-heading py-4">Phase 3</h2>
          </Link>
        </div>
        <div className="phase-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="/phase4">
            <div className="phase-image relative">
              <Image src="/phase4.png"  height={400} width={400} objectFit="cover" />
            </div>
            <h2 className="phase-heading py-4">Phase 4</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
