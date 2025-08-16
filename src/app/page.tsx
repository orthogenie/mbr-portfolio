import Link from "next/link";

export default function Home() {
  return (
    <div className="columns-auto flex h-screen items-center justify-center gap-40">
      <Link href="/ortho-dev">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          ORTHO.DEV
        </button>
      </Link>
      <Link href="/ortho-mp3">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          ORTHO.MP3
        </button>
      </Link>
    </div>
  );
}
