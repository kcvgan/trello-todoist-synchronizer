import mongoose from 'mongoose';

const trelloBoardSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  }
});

const TrelloBoard = mongoose.model('TrelloBoard', trelloBoardSchema);

export default TrelloBoard;
