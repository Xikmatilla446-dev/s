import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from "react-redux";
import { saveGame } from '../../store/reducers/actions/actions';


class GamesForm extends Component {

    state = {
        title: '',
        cover: '',
        errors:{},
        loading:false
    };


    handleChange = (event) => {

        if (!!this.state.errors[event.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[event.target.name];

            const { value, name } = event.target;
            this.setState({
                [name]: value,
                errors

            })

        }else {
            this.setState({[event.target.name]: event.target.value});
        }


    };


    handlerSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.state.title === '') errors.title ="Can't be empty";
        if (this.state.cover === '') errors.cover ="Can't be empty";
        this.setState({errors});

        const isValid = Object.keys(errors).length ===0;
        if (isValid){
            this.setState({loading: true});
            const {title, cover} = this.state;
            this.props.saveGame({title, cover});
            setTimeout( () => {

                this.setState({loading: false});
                this.setState({title: ''});
                this.setState({cover: ''});
                // this.props.history.push('/games')

            },3000)
        }





    };

    render() {
        return (
            <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handlerSubmit}>
                <h1>Add new game</h1>

                <div className={classnames('field', {error: !!this.state.errors.title})} >
                    <label htmlFor="title">Title</label>
                    <input id="title"
                           name="title"
                           value={this.state.title}
                           onChange={this.handleChange}

                    />
                    <span>{this.state.errors.title}</span>
                </div>


                <div className={classnames('field', {error: !!this.state.errors.cover})}>
                    <label htmlFor="cover">Cover Url</label>
                    <input id="cover"
                           name="cover"
                           value={this.state.cover}
                           onChange={this.handleChange}

                    />
                    <span>{this.state.errors.cover}</span>
                </div>

                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>


            </form>
        );
    }
}

export default connect(null, {saveGame})(GamesForm);
