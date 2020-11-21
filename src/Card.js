import React from 'react'

function Card({data}) {
    return (
        <a href={data.html_url} className="card">
            <img src={data.avatar_url} alt={data.name}></img>
            <div className="card__description">
                <h2> {data?.login}</h2>
                <p>{data.name}</p>
            </div>
            <div className="card__footer">
                <button> <i class="fas fa-users"></i> <span className="icon-text">  {data?.followers} Followers </span></button>
                <button> <i class="fas fa-user-friends"></i> <span className="icon-text">  {data?.following} Following </span></button>
                <button> <i class="fas fa-code-branch"></i> <span className="icon-text"> {data?.public_repos} Repositories </span></button>
            </div>
        </a>
    )
}

export default Card
