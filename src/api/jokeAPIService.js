import axios from 'axios';

class jokeAPIService {
	async getJoke() {
		let url = 'https://official-joke-api.appspot.com/jokes/random';
		let joke = await axios.get(url);
		/// we want to return the joke when it is updated with the reply from the api
		///	return joke;  <---- this will return the Promise from axios even if it isn't resolved. the data in the Promise might still be undefined

		return joke.data; //when the Promise is resolved or rejected joke.data will have a value and it is returned.
	}

	async getJokeWithErrorHandling() {
		// add .then and .catch if you want to catch errors

		let url = 'https://official-joke-api.appspot.com/jokes/random';
		let joke = '';
		await axios
			.get(url)
			.then((response) => {
				joke = response.data;
			})
			.catch((response) => {
				console.log(response);
			});
		console.log(joke);

		return joke;
	}

	async getJokeWithRequest() {
		const options = {
			method: 'GET',
			url: 'https://official-joke-api.appspot.com/jokes/random',
		};

		let joke = '';
		await axios
			.request(options)
			.then((response) => {
				joke = response.data;
			})
			.catch((response) => {
				console.log(response);
			});
		console.log(joke);

		return joke;
	}
}
export default new jokeAPIService();
