import React from 'react';

const GamesList = ({games}) =>  {

    const emtyMessage  = (
        <p>There are not yetin your collection.</p>
    );

    const gamesList = (
        <p>games list</p>
    );

        return (
            <div>
                {
                    games.length === 0 ? emtyMessage : gamesList
                }

            </div>
        );


};

GamesList.protType= {
    games: React.PropType.array.isRequired
};

export default GamesList;
