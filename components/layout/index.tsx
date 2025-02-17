import Head from "next/head"
import { INDEX_LayoutWrapper } from "./styles/index-wrapper"

export const INDEX_Layout = ({ children, title = "Juan Pastén Castillo - Portfolio" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/ying-yang0000.png'
        />
      </Head>

      <INDEX_LayoutWrapper>
        <main>{children}</main>
      </INDEX_LayoutWrapper>
    </>
  )
}
