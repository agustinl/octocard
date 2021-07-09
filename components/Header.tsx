import { useEffect, useContext, useState } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { GithubLogo, Moon, Sun } from "phosphor-react"

export default function Header() {

    const theme = useContext(ThemeContext);
    const mode = theme.state.theme;
    /* const [theme, setTheme] = useState('light'); */

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark');
        }

        /* setTheme(localStorage.theme); */

    }, [theme]);

    /* const themeMode = () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
        setTheme(localStorage.theme);
    } */

    const themeMode = () => {
        if (mode == "dark") {
            theme.dispatch({ type: "light" });
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            theme.dispatch({ type: "dark" });
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <header className="flex justify-between flex-grow-0 flex-shrink pt-4 px-4">
            <a onClick={themeMode} className="cursor-pointer">
                {
                    mode == "light" ? <Moon size={28} color="#374151" />
                    : <Sun size={28} color="#9CA3AF" />
                }
            </a>

            <a href="https://github.com/agustinl/octocard" target="_blank" rel="noreferrer">
                <GithubLogo size={28} color={mode == "light" ? "#374151" : "#9CA3AF"} />
            </a>
        </header>
    )
}
