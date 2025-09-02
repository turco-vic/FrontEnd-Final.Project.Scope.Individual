"use client"

import Link from "next/link";
import {useEffect, useState } from "react";

export default function Lista() {
    const [colecoes, setColecoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/collections`
            );
            const data = await response.json();
            setColecoes(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Itens</h1>
            <ul>
                {colecoes.map((colecao) => (
                    <Link key={colecao.id} href={`/lista/${colecao.id}`}>
                        <li>{colecao.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
