import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

import NotFound from '../ui/NotFound.vue';

const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
});

/* Only need to add one route here */
RouterFactory.configure(factory => {
    factory.addRoute({
        path: '*',
        component: NotFound
    });
});

export default routerFactory;