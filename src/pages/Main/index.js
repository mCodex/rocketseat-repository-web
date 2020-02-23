import React, { memo, useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

const Main = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = e => setNewRepo(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        };

        setRepositories(prevState => [...prevState, data]);
        setNewRepo('');
        return setLoading(false);
    };

    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>
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
                        <a href="">Detalhes</a>
                    </li>
                ))}
            </List>
        </Container>
    );
};

export default memo(Main);
