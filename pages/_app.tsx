/* import { useContext, useEffect } from "react"; */
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { DirectionProvider } from "../contexts/DirectionContext";

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <DirectionProvider>
                <Component {...pageProps} />
            </DirectionProvider>
        </ThemeProvider>
    );
}

export default App;
