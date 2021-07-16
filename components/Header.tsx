import { useEffect, useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { DirectionContext } from "../contexts/DirectionContext";
import { GithubLogo, Moon, Sun, ArrowClockwise } from "phosphor-react"

export default function Header({ iconDirection }) {

    const theme = useContext(ThemeContext);
    const mode = theme.state.theme;

    const position = useContext(DirectionContext);
    const direction = position.state.position;

    useEffect(() => {
        if (localStorage.octocardTheme === 'dark' || (!('octocardTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            theme.dispatch({ type: "dark" });
        } else {
            document.documentElement.classList.remove('dark');
        }

        if ('octocardDirection' in localStorage) {
            position.dispatch({ type: localStorage.octocardDirection });
        }

    }, []);

    const themeMode = () => {
        if (mode == "dark") {
            theme.dispatch({ type: "light" });
            localStorage.octocardTheme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            theme.dispatch({ type: "dark" });
            localStorage.octocardTheme = 'dark';
            document.documentElement.classList.add('dark');
        }
    }

    const positionMode = () => {
        if (direction == "vertical") {
            position.dispatch({ type: "horizontal" });
            localStorage.octocardDirection = 'horizontal';
        } else {
            position.dispatch({ type: "vertical" });
            localStorage.octocardDirection = 'vertical';
        }
    }

    return (
        <header className="flex justify-between flex-grow-0 flex-shrink pt-4 px-4">
            <div className="flex flex-grow-1">
                <a onClick={themeMode} className="cursor-pointer mr-4" aria-label="Switch Theme">
                    {
                        mode == "light" ? <Moon size={28} color="#374151" />
                        : <Sun size={28} color="#9CA3AF" />
                    }
                </a>

                {
                    iconDirection ? <a onClick={positionMode} className="svg-position cursor-pointer" aria-label="Rotate Card">
                        <ArrowClockwise size={28} color={mode == "light" ? "#374151" : "#9CA3AF"} />
                    </a> : null
                }
            </div>

            <a href="https://github.com/agustinl/octocard" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                <GithubLogo size={28} color={mode == "light" ? "#374151" : "#9CA3AF"} />
            </a>
        </header>
    )
}
