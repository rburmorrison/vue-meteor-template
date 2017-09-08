import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import App from '../imports/App.vue';
import routerFactory from '../imports/routes/routes';

Meteor.startup(() => {
    const router = routerFactory.create();

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app');
});