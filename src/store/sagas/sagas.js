import { takeEvery, put, call, select } from 'redux-saga/effects';
import { REGISTRATION_SEND_USER_DATA, setUsernameIsUnique } from '../actions/registrationActions';
import { getFirestore } from 'redux-firestore';

export const getRegistration = state => state.registration;

/*
 * Username uniqueness verification
 */
const checkUserData = data => {
    const firestore = getFirestore();

    return firestore.collection('users')
                    .where('username', '==', data.body.user.username)
                    .get()
                    .then(snapshot => snapshot.docs.length);
}

/*
 * Add user data to Firestore
 */
const setUserData = data => {
    const firestore = getFirestore();
 
    return firestore.collection('users')
                    .add({ ...data.body.user })
                    .then(resp => resp);
}

function* workerSendUserData() {
    const userData = yield select(getRegistration);

    const length = yield call(checkUserData, {body: userData});

    /*
     * Uniqueness check returns a match length. If length > 0, then the username is not unique
     */
    if (length === 0) {
        yield call(setUserData, {body: userData});
        
        yield put(setUsernameIsUnique(true));
    } else {
        yield put(setUsernameIsUnique(false));
    }
}

export function* watchSendUserData() {
    yield takeEvery(REGISTRATION_SEND_USER_DATA, workerSendUserData);
}