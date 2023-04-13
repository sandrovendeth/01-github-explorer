import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import fotoPerfil from "../img/fotoPerfil2.jpg";






import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/sandrovendeth/repos').then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    console.log('repositories', repositories);

    return (
        <section className="repository-list">
            <img id="fotoPerfil"src={fotoPerfil} alt="Foto Perfil" />
            <h1>&#x1F4DA; Lista de Repositórios &#x1F4DA;</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>                    
        </section>
    )
}