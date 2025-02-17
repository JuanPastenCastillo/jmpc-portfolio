import { INDEX_Layout } from "@/components/layout"
import { globalCSS } from "@/styles/global"
import { Global } from "@emotion/react"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <INDEX_Layout>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </INDEX_Layout>
  )
}
