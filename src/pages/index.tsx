import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      안녕
        <Link href={'/editor/tui'}><a>에디터</a></Link>
    </div>
  )
}
