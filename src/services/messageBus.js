import CastReceiverManager from './castReceiver';

export default class MessageBus {
  constructor({ manager, namespace }) {
    this.managerService = manager || new CastReceiverManager();
    this.manager = this.managerService.manager;
    this.messageBus = this.manager.getCastMessageBus(namespace);
  }

  setOnMessage(handler) {
    this.messageBus.onMessage = handler;
  }
}
