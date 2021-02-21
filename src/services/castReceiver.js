const CastReceiver = window.cast.receiver;

export default class CastReceiverManager {
  constructor() {
    CastReceiver.logger.setLevelValue(CastReceiver.LoggerLevel.INFO);
    this.manager = CastReceiver.CastReceiverManager.getInstance();

    this.manager.onReady = (event) => {
      console.log(`Received Ready event: ${JSON.stringify(event.data)}`);
      this.manager.setApplicationState('Application status is ready...');
    };

    this.manager.onSenderConnected = (event) => {
      console.log(`Received Sender Connected event: ${event.data}`);
      console.log(this.manager.getSender(event.data).userAgent);
    };
    this.manager.onSenderDisconnected = (event) => {
      if (this.manager.getSenders().length === 0
        && event.reason === CastReceiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
        window.close();
      }
    };
    this.manager.onSystemVolumeChanged = (event) => {
      console.log(`Received System Volume Changed event: ${event.data.level} ${event.data.muted}`);
    };
  }

  start() {
    this.manager.start({
      statusTest: 'Application is starting...',
    });
  }
}
