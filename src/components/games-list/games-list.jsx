import React from 'react';
import PropTypes from 'prop-types';

import './games-list-styles.css'

const GamesList = ({games, openModal}) => {

    const emtyMessage = (
        <p>There are not yetin your collection.</p>
    );

    const gamesList = (
        <div className="list-carts">

            {
                        (games.map((item, index) => (
                            <div
                                className="card-list"
                                key={index}>
                                <img className="card-img"
                                src={item.cover} alt="not yet"
                                />
                                <div className="card-title">{item.title}</div>
                                <button
                                    className="delete-button"
                                    onClick={() => openModal(item.id)}>delete</button>

                            </div>

                        )))


            }


            <div class="gcse-searchbox" data-resultsUrl="http://www.example.com"
                 data-newWindow="true" data-queryParameterName="search" />`
        </div>
    );

    return (
        <div>
            {
                games.length === 0 ? emtyMessage : gamesList
            }

        </div>
    );


};

GamesList.propTypes = {
    games: PropTypes.array.isRequired
};

export default GamesList;
