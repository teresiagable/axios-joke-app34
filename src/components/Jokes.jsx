import React, { Component } from 'react';
import jokeAPIService from '../api/jokeAPIService';

export default class Jokes extends Component {
	state = {
		joke: 'Getting joke',
		loading: true,
	};

	refreshJoke = async () => {
		console.log('knapps');
		const theJoke = await jokeAPIService.getJoke();
		this.setState({ joke: theJoke, loading: false });
	};

	async componentDidMount() {
		console.log('state before api request', this.state.joke);

		// let theJoke = await jokeAPIService.getJoke();  <--------- moved to its own function (refreshJoke) after adding new joke button
		// this.setState({ joke: theJoke, loading: false });  <----- moded

		this.refreshJoke(); //<---- instead of API call here where it will only be run once (on component mount and no more)

		console.log('state after api request', this.state.joke);
	}

	render() {
		return this.state.loading ? (
			<div>
				<h1>Loading</h1>
			</div>
		) : (
			<div>
				<h1>{this.state.joke.setup}</h1>
				<h3>{this.state.joke.punchline}</h3>
				<button type='button' onClick={() => this.refreshPage()}>
					Show me a new joke
				</button>
			</div>
		);
	}
}
