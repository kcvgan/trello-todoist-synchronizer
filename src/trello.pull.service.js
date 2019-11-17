const axios = require('axios');
import TrelloBoard from './models/TrelloBoard.model';

const trelloBaseUrl = 'https://api.trello.com/1/';

const trelloApi = axios.create({
    baseURL: trelloBaseUrl,
    timeout: 1000
});

export async function pullTrelloBoards(trelloApiKey, trelloApiToken) {
    try {
        const resp = await trelloApi.get(
            `members/kcygan/boards?key=${trelloApiKey}&token=${trelloApiToken}`
        );
        const boards = resp.data;
        return boards.map(
            ({ id, name }) =>
                new TrelloBoard({
                    id,
                    name
                })
        );
    } catch (e) {
        console.log(e);
        return [];
    }
}
