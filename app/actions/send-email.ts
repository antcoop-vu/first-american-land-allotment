'use server'

import { createTransport } from 'nodemailer'
import { z } from 'zod'

// Define schema for form validation
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    
    // Validate form data
    const result = contactFormSchema.safeParse({
      firstName,
      lastName,
      email,
      subject,
      message
    })
    
    if (!result.success) {
      return { success: false, error: 'Invalid form data' }
    }
    
    // Process file attachments
    const files = formData.getAll('files') as File[]
    const attachments = []
    
    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({
          filename: file.name,
          content: buffer
        })
      }
    }
    
    const transporter = createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password'
      }
    })
    
    await transporter.sendMail({
      from: `"First American Land Project" <${process.env.SMTP_USER || 'noreply@example.com'}>`,
      to: 'abdallah.safa@vanderbilt.edu',
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      attachments
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
} 