import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import {Layout} from "components/Templates";

export default function Home() {
    return (
        <Layout title={'Home'}>
            안녕하세요
            <div>오늘도 코딩을 해보세요</div>
        </Layout>
    )
}