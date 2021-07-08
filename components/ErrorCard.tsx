import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Globe } from "phosphor-react"

export default function ErrorCard() {
    return (
        <div>
            <Head>
                <title>@404 — Octocard</title>
            </Head>

            <Link href="/">
                <a className="text-sm text-gray-500">
                    &#8592; Back
                </a>
            </Link>
            <div className="w-96 shadow-xl bg-white rounded-lg border-gray-100 text-gray-800 border mt-2">

                <div className="relative p-6 mt-4 w-11/12 mx-auto" style={{ height: 350 }}>
                    <Image
                        src="/images/lo-fi.jpg"
                        alt="user"
                        layout="fill"
                        className="rounded-lg"
                    />
                </div>

                <div className="relative rounded-t-none p-6">

                    <h1 className="text-2xl font-semibold mt-1 mb-3">
                        @404
                    </h1>

                    <div id="info" className="flex mb-4">
                        <div className="text-xs px-3 bg-gray-100 rounded-full mr-3">
                            <p className="text-sm">Not Found</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm">
                            The user you are looking for was not found
                        </p>
                    </div>

                    <div id="stats" className="flex justify-between mb-5 bg-gray-100 p-2 rounded-lg shadow-md">
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
                            <a>
                                <Globe size={28} color="#6B7280" className="mr-3" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
