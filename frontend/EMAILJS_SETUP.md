# EmailJS Setup Guide for Satis-Fact Engineering

This guide will walk you through setting up EmailJS to handle contact form submissions for your frontend-only deployment.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (e.g., Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider:
   - **For Gmail**: You'll need to enable 2-factor authentication and create an App Password
   - **For Outlook**: Use your regular login credentials
   - **For Other providers**: Follow the specific instructions

## Step 3: Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: 📥 New Project Inquiry from {{from_name}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}

Project Details:
{{message}}

---
This email was sent automatically from your website contact form.
```

4. Make note of your Template ID (e.g., `template_abc123`)

## Step 4: Get Your Configuration Details

You'll need these three pieces of information:

1. **Service ID**: Found in Email Services (e.g., `service_xyz789`)
2. **Template ID**: Found in Email Templates (e.g., `template_abc123`)  
3. **Public Key**: Found in Account → API Keys (e.g., `user_DEFghiJKLmno`)

## Step 5: Update Your Configuration

1. Open the file: `src/services/emailService.js`
2. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id', // Replace with your actual service ID
  TEMPLATE_ID: 'your_template_id', // Replace with your actual template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your actual public key
};
```

Example with real values:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xyz789',
  TEMPLATE_ID: 'template_abc123', 
  PUBLIC_KEY: 'user_DEFghiJKLmno',
};
```

## Step 6: Test Your Setup

1. Save your changes
2. Start your development server: `npm run dev`
3. Go to your website and test the contact form
4. Check that you receive the email at your configured address

## Step 7: Deploy to Production

Your frontend is now ready for deployment to any static hosting platform:

- **Netlify**: Just drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Surge.sh**: Simple command-line deployment

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 1 email template
- Basic support

This should be sufficient for most small to medium websites.

## Troubleshooting

### Common Issues:

1. **403 Forbidden**: Check your public key
2. **404 Not Found**: Verify service ID and template ID
3. **Invalid Template**: Make sure template variables match your form fields
4. **Emails not received**: Check spam folder and verify email service configuration

### Testing Locally:

You can test EmailJS functionality locally since it works entirely in the browser.

### Security Note:

EmailJS public keys are safe to expose in frontend code - they're designed to be public and have built-in rate limiting.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/