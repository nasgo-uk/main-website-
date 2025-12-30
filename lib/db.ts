import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface RegistrationData {
    type: 'waitlist' | 'contact' | 'company_lead' | 'newsletter' | 'demo_booking' | 'service_request';
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
    website?: string; // Real website for companies
    serviceName?: string; // For service requests
    city?: string; // For service requests
    bot_check?: string; // Honeypot field
}

export const saveRegistration = async (data: RegistrationData, csrfToken?: string) => {
    try {
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken || ''
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Submission failed');
        }

        console.log("Document written with ID: ", result.id);
        return { success: true, id: result.id };
    } catch (e: any) {
        console.error("Error adding document: ", e);
        return { success: false, error: e.message || e };
    }
};
