import React, { memo, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '~/components/Container';

import api from '~/services/api';

import { Loading, Owner, IssueList } from './styles';

const Repositories = ({ match }) => {
    const [repository, setRepository] = useState({ data: {}, issues: [] });
    const [loading, setIsLoading] = useState(true);

    const repoName = decodeURIComponent(match.params.repository);

    const loadDataFromAPI = useCallback(async () => {
        const [repositoryData, issuesData] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5,
                },
            }),
        ]);
        setRepository({ data: repositoryData.data, issues: issuesData.data });
        return setIsLoading(false);
    }, [repoName]);

    useEffect(() => {
        loadDataFromAPI();
    }, [loadDataFromAPI]);

    if (loading) {
        return <Loading>Carregando...</Loading>;
    }

    return (
        <Container>
            <Owner>
                <Link to="/">Voltar aos repositórios</Link>
                <img
                    src={repository.data.owner.avatar_url}
                    alt={repository.data.owner.login}
                />
                <h1>{repository.data.name}</h1>
                <p>{repository.data.description}</p>
            </Owner>

            <IssueList>
                {repository.issues.map(issue => (
                    <li key={issue.id.toString()}>
                        <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login}
                        />
                        <div>
                            <strong>
                                <a
                                    href={issue.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {issue.title}
                                </a>
                                {issue.labels.map(label => (
                                    <span key={label.id.toString()}>
                                        {label.name}
                                    </span>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssueList>
        </Container>
    );
};

Repositories.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            repository: PropTypes.string,
        }),
    }).isRequired,
};

export default memo(Repositories);
