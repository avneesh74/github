import React from 'react';
import RepoItem from './repoItem';

const Repo = ({repos}) => {
    return repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
}

export default Repo