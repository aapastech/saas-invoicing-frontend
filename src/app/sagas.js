import createTaleMiddleware from 'redux-tale/es/';

import loginSagas from 'modules/login/saga';
import overlaysSagas from 'modules/overlays/saga';
import linksSagas from 'modules/links/saga';
import dashboardSagas from 'modules/dashboard/saga';
import profileSagas from 'modules/userprofile/saga';
import adminSagas from 'modules/admin/saga';
import imageSagas from 'modules/image/saga';
import modelSagas from 'models/saga';
// import routerSagas from 'modules/router/saga';

let sagaMiddleware;

const sagas = [
    ...loginSagas,
    ...overlaysSagas,
    ...linksSagas,
    ...dashboardSagas,
    ...profileSagas,
    ...adminSagas,
    ...imageSagas,
    ...modelSagas,
];

export function createSagaMiddleWare() {
    sagaMiddleware = createTaleMiddleware();
    return sagaMiddleware;
}

export function runSagas() {
    sagas.map(saga => sagaMiddleware.run(saga));
}