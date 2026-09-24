export const whatsappConfig = () => ({
  apiUrl: process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v19.0',
  token: process.env.WHATSAPP_ACCESS_TOKEN || '',
  phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || '',
});
