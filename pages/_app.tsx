import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import { Header } from '../components/common'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      desiredChainId={activeChainId}
      chainRpc={{ [ChainId.Mainnet]: "https://restless-lingering-slug.quiknode.pro/5ad1193ba51bb094965a623646748316062962f7/" }} >

      <Header />
      <Head>
        <title>OBYC Labs™</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The OBYC Hazmat Division consists of 10,000 Lab Items with 7,777 L1 🧪 🐟 items being airdropped to all Okay Bear Yacht Club Bears. Choose your path wisely with L2 🧪🐟 items mint. The official snapshot was taken on 9/19/2022 at 9:19 PM EST. Instructions to follow..."
        />
        <meta
          name="keywords"
          content="OBYC Labs, Hazmat Division Edition drop"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
