import * as functions from 'firebase-functions';
import * as admin  from 'firebase-admin';
// import { functions } from 'firebase-functions';
//import { admin } from 'firebase-admin';

admin.initializeApp();
exports.createProfile = functions.auth.user()
    .onCreate( (userRecord, context) => {
        const date = new Date();
        return admin.firestore().collection('userProfile').doc(userRecord.uid).set({
            email: userRecord.email,
            authorityLevel: 0,
            created: date
        });
    });
