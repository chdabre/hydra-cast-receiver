import Vue from 'vue';
import CastReceiverManager from '@/services/castReceiver';
import MessageBus from '@/services/messageBus';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const castReceiverManager = new CastReceiverManager();
const messageBus = new MessageBus({
  manager: castReceiverManager,
  namespace: 'urn:x-cast:ch.imakethings.hydra-receiver',
});

messageBus.setOnMessage((message) => {
  const payload = JSON.parse(message.data);

  console.log(message.data);

  if (payload.command === 'synth') {
    store.commit('setModel', payload.model);
  }
});

castReceiverManager.start();

Vue.prototype.$messageBus = messageBus;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
