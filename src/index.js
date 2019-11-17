import dotenv from 'dotenv';
dotenv.config();

import connectDb from './connection';
import pullTrelloBoardsJob from './jobs/pullTrelloBoards.job';

const trelloApiKey = process.env.TRELLO_API_KEY;
const trelloApiToken = process.env.TRELLO_API_TOKEN;

function startApp(trelloApiKey, trelloApiToken) {
    connectDb().then(() => {
        pullTrelloBoardsJob(trelloApiKey, trelloApiToken);
    });
}

startApp(trelloApiKey, trelloApiToken);
