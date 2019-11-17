import cron from 'node-cron';
import TrelloBoard from '../models/TrelloBoard.model';
import { pullTrelloBoards } from '../trello.pull.service';
import { diffCollections } from '../utils/collectionUtils';

export default (trelloApiKey, trelloApiToken) =>
    cron.schedule('* * * * *', function() {
        console.log('starting job');
        pullTrelloBoards(trelloApiKey, trelloApiToken).then(boardsFromApi => {
            TrelloBoard.find().then(boardsFromDb => {
                const { diff, first: apiBoards } = diffCollections(
                    boardsFromApi,
                    boardsFromDb
                );
                if (diff) {
                    console.log('diff detected!');
                    apiBoards.has.forEach(b => b.save());
                    apiBoards.doesNotHave.forEach(b =>
                        TrelloBoard.deleteOne({ id: b.id }).exec()
                    );
                }
            });
        });
    });
