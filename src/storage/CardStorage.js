import { StorageScope, StorageVisibility } from '../TrelloConstants';
import Storage from './Storage';

class CardStorage extends Storage {
  static DISCUSSION_STATUS = 'leancoffeeDiscussionStatus';
  static DISCUSSION_ELAPSED = 'leancoffeeDiscussionElapsed';
  static DISCUSSION_THUMBS = 'leancoffeeDiscussionThumbs';
  static VOTES = 'leancoffeeVotes';

  constructor() {
    super(StorageScope.CARD, StorageVisibility.SHARED);
  }

  getDiscussionStatus(t) {
    return this.read(t, CardStorage.DISCUSSION_STATUS);
  }

  getDiscussionElapsed(t) {
    return this.read(t, CardStorage.DISCUSSION_ELAPSED);
  }

  getDiscussionThumbs(t) {
    return this.read(t, CardStorage.DISCUSSION_THUMBS);
  }

  saveDiscussionStatus(t, newStatus) {
    return this.write(t, CardStorage.DISCUSSION_STATUS, newStatus);
  }

  saveDiscussionElapsed(t, newElapsed) {
    return this.write(t, CardStorage.DISCUSSION_ELAPSED, newElapsed);
  }

  saveDiscussionThumbs(t, newThumbs) {
    return this.write(t, CardStorage.DISCUSSION_THUMBS, newThumbs);
  }

  saveVotes(t, newVotes) {
    return this.write(t, CardStorage.VOTES, newVotes);
  }

  deleteDiscussionThumbs(t) {
    return this.delete(t, CardStorage.DISCUSSION_THUMBS);
  }
}

export default CardStorage;
