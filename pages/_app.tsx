/* import { useContext, useEffect } from "react"; */
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { DirectionProvider } from "../contexts/DirectionContext";
import Layout from "../components/Layout"

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <DirectionProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DirectionProvider>
        </ThemeProvider>
    );
}

export default App;
