
class Newspaper {
  constructor(issueNumber) {
    this.issueNumber = issueNumber;
  }
}

class BroadSheet extends Newspaper {
  constructor(issueNumber) {
    super(issueNumber);
    this._type = 'broadsheet';
  }
}

class Tabloid extends Newspaper {
  constructor(issueNumber) {
    super(issueNumber);
    this._type = 'tabloid';
  }
}

class Publisher {
  constructor() {
    this._currentBroadSheet = new BroadSheet(0);
    this._currentTabloid = new Tabloid(0);

    this._broadSheetSubscribers = [];
    this._tabloidSubscribers = [];
  }

  subscribeToBroadSheet(subscriber) {
    this._broadSheetSubscribers.push(subscriber);
  }

  subscribeToTabloid(subscriber) {
    this._tabloidSubscribers.push(subscriber);
  }

  publishNewBroadSheet() {
    const currentIssueNumber = this._currentBroadSheet.issueNumber;
    this._currentBroadSheet = new BroadSheet(currentIssueNumber + 1)
    this._broadSheetSubscribers.forEach((subscriber) => {
      subscriber.notify(this._currentBroadSheet);
    });
  }

  publishNewTabloid() {
    const currentIssueNumber = this._currentTabloid.issueNumber;
    this._currentTabloid = new Tabloid(currentIssueNumber)
    this._tabloidSubscribers.forEach((subscriber) => {
      subscriber.notify(this._currentTabloid);
    });
  }
}

class NewspaperReader {
  constructor() {
    this._newspapersRead = [];
  }

  notify(newspaper) {
    this._newspapersRead.push(newspaper);
  }

  getReadList() {
    return this._newspapersRead;
  }
}

module.exports = {
  Publisher,
  NewspaperReader,
}