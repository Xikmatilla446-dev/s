import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchGames} from '../store/reducers/actions/actions'
import ModalBasicExample from '../components/modal-basic/ModalBasic'

import GamesList from '../components/games-list/games-list'


import './games-page-styles.css'

class GamesPage extends Component {
    constructor() {
        super();

        this.state = {
            modalOpen: false
        }

    }


    componentDidMount() {
        // debugger
        this.props.fetchGames();
    }


    openModalHandler = (id) => {

        this.setState({
            modalOpen: !this.state.modalOpen
        });

        console.log(id);

    };

    render() {

        const {modalOpen} = this.state;


        return (
            <div>
                <h1>Games page component</h1>
                <GamesList games={this.props.games}
                openModal={this.openModalHandler}
                           modalOpen={modalOpen}

                />
            </div>
        );
    }
}


GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {

    return {
        games: state.games.items
    }
};


export default connect(mapStateToProps, {fetchGames})(GamesPage);

