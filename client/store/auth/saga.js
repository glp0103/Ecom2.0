import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';

import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
} from './action';
import axios from '../../axios/axios.js';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

function* loginSaga() {
    try {
        yield put(loginSuccess());
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* VendorRegisterSaga({payload}) {
    try {
        console.log(payload);
        const response = yield axios.post('/auth/vendor-regst');
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([
        takeEvery(actionTypes.VENDOR_REGISTERATION, VendorRegisterSaga),
    ]);
}
