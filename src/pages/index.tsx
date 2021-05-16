import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      안녕
        <nav>
            <Link href={'/editor/tui'}><a>에디터</a></Link>
            <Link href={'/dev/codemirror'}><a>코드미러</a></Link>
            <Link href={'/dev/markdown'}><a>마크다운</a></Link>
        </nav>

    </div>
  )
}
