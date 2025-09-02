"use client"

import { useEffect, useState } from "react";

export default function Detalhes ({params}) {
    const [id, setId] = useState(null); 
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const getParams = async () => {
            const resolcedParams = await params;
            setId(resolcedParams.id);
        };

        getParams();
    }, [params]);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/collections/${id}`
            );
            const data = await response.json();
            setCollection(data);
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <h1>Detalhes da Coleção {id}</h1>
            {collection && (
                <div>
                    <h2>{collection.name}</h2>
                    <p>{collection.description}</p>
                </div>
            )}
        </div>
    )
}