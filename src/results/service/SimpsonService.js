import config from '../../config'

class SimpsonService {
	baseUrl = config.baseUrl;

	async getQuotesForCharacter(character, limit = 200) {
		const characterDownCase = character.toLowerCase();
		const url = `${this.baseUrl}?count=${limit}&character=${characterDownCase}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`SimpsonService.getQuotesForCharacter failed, HTTP status ${response.status}`);
		}

		const quotes = await response.json();
		return quotes;
	}
}

export default SimpsonService;