/* import { useContext, useEffect } from "react"; */
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { DirectionProvider } from "../contexts/DirectionContext";
import { MoveProvider } from "../contexts/MoveContext";
import Layout from "../components/Layout"

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <DirectionProvider>
                <MoveProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MoveProvider>
            </DirectionProvider>
        </ThemeProvider>
    );
}

export default App;
