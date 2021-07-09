/* import Image from 'next/image' */
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext"
import Head from 'next/head'
import Link from 'next/link'
import { Globe, TwitterLogo, GithubLogo } from "phosphor-react"
import * as htmlToImage from 'html-to-image'

export default function Card(user) {
    
    /* const [theme, setTheme] = useState(""); */
    const theme = useContext(ThemeContext);
    const mode = theme.state.theme;

    const {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers
    } = user;

    var website = blog;

    if(!blog.includes("http")) {
        website = "//" + blog;
    }

    /* function filter (node) {
        return (node.id !== 'nxt-img');
    } */

    /* useEffect(() => {
        setTheme(localStorage.theme ? localStorage.theme : 'light');
    }, [theme]) */

    const downloadSVG = (e) => {
        e.preventDefault();

        htmlToImage.toSvg(document.getElementById('card'), {
            backgroundColor: "#FFFFFF",
            style: {
                backgroundColor: mode == "light" ? "#FFFFFF" : "#1F2937"
            }
        })
        .then(function (dataUrl) {
            var link = document.createElement('a');
                link.download = `${login}-card.svg`;
                link.href = dataUrl;
                link.click();
        });
    }

    const downloadPNG = (e) => {
        e.preventDefault();

        htmlToImage.toPng(document.getElementById('card'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
                link.download = `${login}-card.png`;
                link.href = dataUrl;
                link.click();
        });
    }

    const downloadJPEG = (e) => {
        e.preventDefault();

        htmlToImage.toJpeg(document.getElementById('card'), {
            backgroundColor: "#FFFFFF",
            style: {
                backgroundColor: mode == "light" ? "#FFFFFF" : "#1F2937"
            }
        })
        .then(function (dataUrl) {
            var link = document.createElement('a');
                link.download = `${login}-card.jpeg`;
                link.href = dataUrl;
                link.click();
        });
    }

    return (
        <div>

            <Head>
                <title>@{login} — Octocard</title>
                <meta name="description" content={bio} />
            </Head>
            
            <div className="flex justify-between items-center mb-2">
                <Link href="/">
                    <a className="text-sm text-gray-500 hover:text-gray-600">
                        &#8592; Back
                    </a>
                </Link>

                <div className="dropdown inline-block relative">
                    <p className="text-sm text-gray-500 hover:text-gray-600 cursor-pointer">
                        Download
                    </p>
                    <ul className="dropdown-menu absolute hidden text-gray-700 z-10 shadow-lg">
                        <li><a className="text-sm rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700" href="!#" onClick={downloadPNG}>.png</a></li>
                        <li><a className="text-sm bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700" href="!#" onClick={downloadJPEG}>.jpeg</a></li>
                        <li><a className="text-sm rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700" href="!#" onClick={downloadSVG}>.svg</a></li>
                    </ul>
                </div>
            </div>
            
            <div id="card" className="w-96 shadow-xl bg-white rounded-lg border-gray-100 border text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">

                {/* <div className="relative p-6 mt-4 w-11/12 mx-auto" style={{ height: 350 }} id="nxt-img">
                    <Image
                        src={avatar_url}
                        alt={login}
                        layout="fill"
                        className="rounded-lg"
                    />
                </div> */}

                <div className="relative mt-4 w-11/12 mx-auto">
                    <img src={avatar_url} className="rounded-lg object-fill" alt={login} />
                </div>

                <div className="relative rounded-t-none p-6">
                    {
                        hireable ? (
                            <div className="flex items-center">
                                {/* <div style={{ width: 8, height: 8 }} className="bg-green-300 rounded-full mr-2"></div> */}
                                <span className="flex h-2 w-2 relative mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Available for hire</p>
                            </div>
                        ) : <></>
                    }

                    <h1 className="text-2xl font-semibold mt-1 mb-3">
                        <a href={html_url} target="_blank" rel="noreferrer">
                            @{login}
                        </a>
                    </h1>

                    <div id="info" className="flex mb-4">
                        {
                            location ? <div className="text-xs px-3 bg-gray-100 rounded-full mr-3 dark:bg-gray-700">
                            <p className="text-sm">{location}</p>
                        </div> : <></>
                        }

                        {
                            company ? <div className="text-xs px-3 bg-gray-100 rounded-full dark:bg-gray-700">
                            <p className="text-sm">{company}</p>
                        </div> : <></>
                        }
                    </div>

                    <div className="mb-4">
                        <p className="text-sm">
                            {bio}
                        </p>
                    </div>

                    <div id="stats" className="flex justify-between mb-5 bg-gray-100 p-2 rounded-lg shadow-md dark:bg-gray-700">
                        <div className="mr-2">
                            <p className="text-xs">Repos</p>
                            <span className="font-medium text-xl">
                                <a href={`${html_url}?tab=repositories`} target="_blank" rel="noreferrer">
                                    {public_repos}
                                </a>
                            </span>
                        </div>
                        <div className="mr-2">
                            <p className="text-xs">Followers</p>
                            <span className="font-medium text-xl">
                                <a href={`${html_url}?tab=followers`} target="_blank" rel="noreferrer">
                                    {followers}
                                </a>
                            </span>
                        </div>
                        <div className="mr-2">
                            <p className="text-xs">Gists</p>
                            <span className="font-medium text-xl">
                                <a href={`https://gist.github.com/${login}`} target="_blank" rel="noreferrer">
                                    {public_gists}
                                </a>
                            </span>
                        </div>
                    </div>

                    <div id="social" className="flex">
                        <a href={html_url} target="_blank" rel="noreferrer">
                            <GithubLogo size={28} color={mode == "light" ? "#6B7280" : "#9CA3AF"} className="mr-3" />
                        </a>
                        {
                            blog ? <a href={website} target="_blank" rel="noreferrer">
                            <Globe size={28} color={mode == "light" ? "#6B7280" : "#9CA3AF"} className="mr-3" />
                        </a> : null
                        }
                        {
                            twitter_username ? <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
                            <TwitterLogo size={28} color={mode == "light" ? "#6B7280" : "#9CA3AF"} className="mr-3" />
                        </a> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
