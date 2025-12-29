import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface RegistrationData {
    type: 'waitlist' | 'contact' | 'company_lead' | 'newsletter' | 'demo_booking';
    sourcePage: string;
    email?: string;
    name?: string;
    phone?: string;
    companyName?: string;
    fleetSize?: string;
    userType?: string; // For waitlist (Customer/Provider/Company)
    message?: string;
    subject?: string;
    earlyAccess?: boolean;
    metadata?: any;
}

export const saveRegistration = async (data: RegistrationData) => {
    try {
        const docRef = await addDoc(collection(db, 'registrations'), {
            ...data,
            createdAt: serverTimestamp(),
            userAgent: window.navigator.userAgent,
            language: window.navigator.language,
        });
        console.log("Document written with ID: ", docRef.id);
        return { success: true, id: docRef.id };
    } catch (e) {
        console.error("Error adding document: ", e);
        return { success: false, error: e };
    }
};
