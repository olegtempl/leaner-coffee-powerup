import { StorageScope, StorageVisibility } from '../TrelloConstants';
import Storage from './Storage';

class BoardStorage extends Storage {
    static DISCUSSION_STATUS = 'leancoffeeDiscussionStatus';
    static DISCUSSION_CARD_ID = 'leancoffeeDiscussionCardId';
    static DISCUSSION_STARTED_AT = 'leancoffeeDiscussionStartedAt';
    static DISCUSSION_PREVIOUS_ELAPSED = 'leancoffeeDiscussionPreviousElapsed';
    static DISCUSSION_INTERVAL_ID = 'leancoffeeDiscussionIntervalId';

    constructor() {
      super(StorageScope.BOARD, StorageVisibility.SHARED);
    }

    getDiscussionStatus(t) {
      return this.read(t, BoardStorage.DISCUSSION_STATUS);
    }

    getDiscussionCardId(t) {
      return this.read(t, BoardStorage.DISCUSSION_CARD_ID);
    }

    getDiscussionStartedAt(t) {
      return this.read(t, BoardStorage.DISCUSSION_STARTED_AT);
    }

    getDiscussionPreviousElapsed(t) {
      return this.read(t, BoardStorage.DISCUSSION_PREVIOUS_ELAPSED);
    }

    getDiscussionIntervalId(t) {
      return this.read(t, BoardStorage.DISCUSSION_INTERVAL_ID);
    }
}

export default BoardStorage;

