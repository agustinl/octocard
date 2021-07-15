import Head from 'next/head'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Layout({ children }) {
    
    const theme = useContext(ThemeContext);

    return (
        <>
        <Head>
			<title>Octocard</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content="Get your Github information in card format" />
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content="Octocard" />
			<meta name="og:description" property="og:description" content="Get your Github information in card format" />
			<meta property="og:site_name" content="Octocard" />
			<meta property="og:url" content="https://octocard.vercel.app" />  
			<meta name="twitter:card" content="summary_large_image" /> 
			<meta name="twitter:title" content="Octocard" />
			<meta name="twitter:description" content="Get your Github information in card format" />
			<meta name="twitter:site" content="https://octocard.vercel.app" />
			<meta name="twitter:creator" content="@agustinl" />
			<link rel="icon" type="image/png" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
			<meta property="og:image" content={`https://og-image.vercel.app/**Octocard**.png?theme=${theme.state.theme}&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-${theme.state.theme == "dark" ? "white" : "black"}.svg&images=https%3A%2F%2Foctocard.vercel.app%2Fcard.png&widths=undefined&widths=200&heights=undefined&heights=200`} />
			<meta name="twitter:image" content={`https://og-image.vercel.app/**Octocard**.png?theme=${theme.state.theme}&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-${theme.state.theme == "dark" ? "white" : "black"}.svg&images=https%3A%2F%2Foctocard.vercel.app%2Fcard.png&widths=undefined&widths=200&heights=undefined&heights=200`} />
			<link rel="canonical" href="https://octocard.vercel.app/" />
		</Head>
                
        <main className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 font-sans overflow-auto">
            { children }
        </main>
        </>
    )
}
