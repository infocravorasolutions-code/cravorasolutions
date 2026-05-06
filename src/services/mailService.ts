import emailjs from '@emailjs/browser';

// These IDs will be provided by the user in the .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_placeholder';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_placeholder';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

export const mailService = {
  /**
   * Initializes EmailJS with the public key.
   */
  init: () => {
    if (PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(PUBLIC_KEY);
    }
  },

  /**
   * Sends a requirement inquiry email to the specified address.
   * Also sends a notification to the admin.
   * 
   * @param email The user's email address
   * @returns Promise<EmailJSResponseStatus>
   */
  sendInquiry: async (email: string) => {
    const templateParams = {
      user_email: email,
      admin_email: 'info@cravorasolutions.com',
      reply_to: 'info@cravorasolutions.com',
      message: 'A new user has expressed interest in our services. Please follow up regarding their requirements.',
    };

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  },
};
