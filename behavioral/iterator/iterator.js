class Notification {
  constructor(message) {
    this.message = message;
  }

  getMessage() {
    return message;
  }
}

class NotificationIterator {
  constructor(notificationList) {
    this.notifications = notificationList || [];
    this.currentIndex = 0;
  }

  getNext() {
    return this.notifications[this.currentIndex];
    this.currentIndex++;
  }

  hasNext() {
    return this.currentIndex < this.notifications.lenth;
  }
}

class NotificationContainer {
  constructor() {
    this.notifications = [];
  }

  addNotification(message) {
    this.notifications.push(new Notification(message));
  }

  getIterator() {
    return new NotificationIterator(this.notifications);
  }
}

module.exports = NotificationContainer;