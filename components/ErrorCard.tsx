import Head from 'next/head'
import Link from 'next/link'
import { Globe } from "phosphor-react"

export default function ErrorCard(username) {
    return (
        <div>
            <Head>
                <title>@404 — Octocard</title>
            </Head>

            <div className="flex justify-between items-center w-11/12 sm:w-full m-auto mb-2">
                <Link href="/">
                    <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500">
                        &#8592; Back
                    </a>
                </Link>
            </div>

            <div id="card" className="shadow-xl bg-white rounded-lg border-gray-100 text-gray-800 border mt-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 w-11/12 sm:w-96 m-auto">

                <div className="skeleton-img relative p-6 mt-4 w-11/12 mx-auto rounded-lg bg-gray-200 dark:bg-gray-700"></div>

                <div className="relative rounded-t-none p-6">

                    <h1 className="text-2xl font-semibold mt-1 mb-3">
                        @404
                    </h1>

                    <div id="info" className="flex mb-4">
                        <div className="text-xs px-3 bg-gray-100 rounded-full mr-3 dark:bg-gray-700">
                            <p className="text-sm">Not Found</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm">
                        User {username.id} was not found
                        </p>
                    </div>

                    <div id="stats" className="flex justify-between mb-5 bg-gray-100 p-2 rounded-lg shadow-md dark:bg-gray-700">
                        <div className="mr-2">
                            <p className="text-xs">Repos</p>
                            <span className="font-medium text-xl">
                                -
                            </span>
                        </div>
                        <div className="mr-2">
                            <p className="text-xs">Followers</p>
                            <span className="font-medium text-xl">
                                -
                            </span>
                        </div>
                        <div className="mr-2">
                            <p className="text-xs">Gists</p>
                            <span className="font-medium text-xl">
                                -
                            </span>
                        </div>
                    </div>

                    <div id="social" className="flex">
                        <Link href="/">
                            <a aria-label="Back to Octocard">
                                <Globe size={28} color="#6B7280" className="mr-3" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
