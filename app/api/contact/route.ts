import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Replace with your email service or API
    // Example options:
    // 1. SendGrid
    // 2. Resend
    // 3. Nodemailer
    // 4. Formspree
    // 5. EmailJS

    // Example: Send email using a service (replace with your implementation)
    // const emailService = new EmailService();
    // await emailService.send({
    //   to: "ravendrakumar010@gmail.com",
    //   from: email,
    //   subject: subject,
    //   text: message,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    // });

    // For now, just log the data (replace this with actual email sending)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        message: "Message sent successfully!",
        data: {
          name,
          email,
          subject,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

