import React from 'react';

import './style.css';

function DevItem({dev}){
    return(
        <li className="dev-item" >
        <header>
          <img src={dev.avatar_url} alt="User avatar"/>
          <div className="user-info">
            <strong>{dev.name ?? dev.github_username}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>
          {dev.bio ?? '...'}
        </p>
        <a href={`https://github.com/${dev.github_username}`} target="_blank">Acessar perfil no Github</a>
      </li>
    );
}

export default DevItem;