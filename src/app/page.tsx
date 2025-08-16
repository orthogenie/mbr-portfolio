import Link from "next/link";

export default function Home() {
  return (
    <div className="columns-auto flex h-screen items-center justify-center gap-40">
      <Link href="/ortho-dev">ORTHO.DEV</Link>
      <Link href="/ortho-mp3">ORTHO.MP3</Link>
    </div>
  );
}
