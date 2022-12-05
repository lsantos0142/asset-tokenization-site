import { useState } from "react";

function Navbar() {
    const [hidden, setHidden] = useState<boolean>(true);

    const toggleHidden = () => {
        setHidden(!hidden);
    };

    const navItems = [
        { title: "Sobre o Projeto", href: "#about" },
        { title: "Motivação", href: "#motivation" },
        { title: "Objetivo", href: "#objective" },
        { title: "Resultados", href: "#results" },
        {
            title: "Documentação",
            href: "#documentation",
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <button
                    onClick={toggleHidden}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse"
                    aria-controls="collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div
                    className={
                        "navbar-collapse justify-content-end" +
                        (hidden ? " collapse" : "")
                    }
                    id="colapse"
                >
                    <ul className="navbar-nav">
                        {navItems.map((obj) => {
                            return (
                                <li className="nav-item">
                                    <a
                                        href={obj.href}
                                        className="nav-link text-light"
                                    >
                                        {obj.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
