import { GithubLogo } from "phosphor-react"

export default function Header() {
    return (
        <header className="flex justify-end flex-grow-0 flex-shrink pt-4 pr-4">
            <a href="https://github.com/agustinl/octocard" target="_blank" rel="noreferrer">
                <GithubLogo size={28} color="#374151" className="" />
            </a>
        </header>
    )
}
