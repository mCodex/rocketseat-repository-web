import React, { memo, useState, useEffect } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import Container from '~/components/Container';

import api from '~/services/api';

import { Form, SubmitButton, List, Header } from './styles';

const Main = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const repositoriesFromLS = localStorage.getItem('repositories');

        if (repositoriesFromLS) {
            setRepositories(JSON.parse(repositoriesFromLS));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories));
    }, [repositories]);

    const handleInputChange = e => setNewRepo(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            setRepositories(prevState => [...prevState, data]);
            setNewRepo('');

            toast.success('Repositório adicionado com sucesso 🎉');
        } catch (ex) {
            return toast.error(
                'Verifique os dados inseridos e tente novamente 😉'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>

            <Header>
                Adicione um novo repositório utilizando o formato{' '}
                <code>github_user/repo_name</code> (por exemplo,{' '}
                <code>facebook/react</code>)
            </Header>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicionar Repositório"
                    value={newRepo}
                    onChange={handleInputChange}
                />
                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <FaPlus color="#fff" size={14} />
                    )}
                </SubmitButton>
            </Form>

            <List>
                {repositories.map(repository => (
                    <li key={repository.name}>
                        <span>{repository.name}</span>
                        <Link
                            to={`/repository/${encodeURIComponent(
                                repository.name
                            )}`}
                        >
                            <span>Detalhes</span>
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
};

export default memo(Main);
