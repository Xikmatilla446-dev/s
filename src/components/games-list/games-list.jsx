import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'
import error from '../../static/perhatian-png-9.png'
import './games-list-styles.css'
import ModalBasicExample from "../modal-basic/ModalBasic";

const GamesList = ({games, openModal,modalOpen}) => {

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
                                src={item.cover} alt="true"
                                />
                                <div className="card-title">{item.title}</div>
                                <div className="delete-button">
                                    <button onClick={() => openModal(item.id)}>
                                        <Icon disabled name='edit outline'/></button>

                                    <button
                                        onClick={() => openModal(item.id)}>
                                        <Icon disabled name='trash alternate'/>
                                    </button>
                                </div>

                            </div>

                        )))


            }

            {
                modalOpen ?
                    <ModalBasicExample modalOpen={modalOpen}
                                       openModal={openModal}/>
                    : null
            }
        </div>    );

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
