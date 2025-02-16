import { INDEX_Home } from "@/components/home"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Pastén Castillo - Portfolio</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/ying-yang0000.png'
        />
      </Head>

      <INDEX_Home />
    </>
  )
}
