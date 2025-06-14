'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname=usePathname();
    const isActive=(path) => path===pathname;

    const Colores={"/":"gold","/nosotros":"crimson","/novedades":"orangered","/contacto":"purple"};

    return (
        <nav>
            <ul className="holder">
                <li><Link className={isActive("/")?"activo":""} href="/" style={{ "--clr": Colores["/"] }}
                        data-text="Home">Home</Link></li>
                <li><Link className={isActive("/nosotros")?"activo":""} href="/nosotros" style={{ "--clr": Colores["/nosotros"] }}
                        data-text="Nosotros">Nosotros</Link></li>
                <li><Link className={isActive("/novedades")?"activo":""} href="/novedades" style={{ "--clr": Colores["/novedades"] }}
                        data-text="Novedades">Novedades</Link></li>
                <li><Link className={isActive("/contacto")?"activo":""} href="/contacto" style={{ "--clr": Colores["/contacto"] }}
                        data-text="Contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}