import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({
    status: "API is running. Use POST to submit the contact form.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phoneCode,
      phone,
      subject,
      budget,
      timeline,
      message,
      _gotcha,
    } = body;

    // 1. Honeypot: if bots fill this hidden field, reject silently
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 2. Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const fullPhone = phone ? phoneCode + " " + phone : "Not provided";

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4. Build email
    const htmlBody = [
      '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #eaeaea;border-radius:8px;overflow:hidden">',
      '  <div style="background-color:#111;padding:20px;text-align:center">',
      '    <h2 style="color:#fff;margin:0">New Project Lead</h2>',
      "  </div>",
      '  <div style="padding:24px;background-color:#fafafa">',
      "    <p><strong>Name:</strong> " + name + "</p>",
      '    <p><strong>Email:</strong> <a href="mailto:' + email + '">' + email + "</a></p>",
      "    <p><strong>Phone:</strong> " + fullPhone + "</p>",
      "    <p><strong>Subject:</strong> " + (subject || "N/A") + "</p>",
      '    <p><strong>Budget:</strong> <span style="background:#e2e8f0;padding:4px 8px;border-radius:4px">' + (budget || "N/A") + "</span></p>",
      '    <p><strong>Timeline:</strong> <span style="background:#e2e8f0;padding:4px 8px;border-radius:4px">' + (timeline || "N/A") + "</span></p>",
      '    <hr style="border:0;border-top:1px solid #eaeaea;margin:24px 0" />',
      '    <h3 style="margin-top:0">Message:</h3>',
      '    <p style="white-space:pre-wrap;color:#333;line-height:1.6">' + message + "</p>",
      "  </div>",
      '  <div style="background-color:#f1f1f1;padding:16px;text-align:center;font-size:12px;color:#666">',
      "    Sent from christopherpaucar.dev contact form.",
      "  </div>",
      "</div>",
    ].join("\n");

    const mailOptions = {
      from: '"' + name + '" <' + (process.env.MAIL_FROM || process.env.SMTP_USER) + ">",
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject: "New Portfolio Lead: " + (subject || "Project Inquiry"),
      replyTo: email,
      text:
        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + fullPhone +
        "\nBudget: " + (budget || "N/A") +
        "\nTimeline: " + (timeline || "N/A") +
        "\n\nMessage:\n" + message,
      html: htmlBody,
    };

    // 5. Send email
    await transporter.sendMail(mailOptions);

    // 6. Optional WhatsApp notification via CallMeBot
    if (process.env.WHATSAPP_PHONE && process.env.WHATSAPP_APIKEY) {
      try {
        const msg = encodeURIComponent(
          "New Lead: " + name + " | Email: " + email + " | Phone: " + fullPhone
        );
        const url =
          "https://api.callmebot.com/whatsapp.php?phone=" +
          process.env.WHATSAPP_PHONE +
          "&text=" + msg +
          "&apikey=" + process.env.WHATSAPP_APIKEY;
        await fetch(url);
      } catch (waErr) {
        console.error("WhatsApp notification failed:", waErr);
      }
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to send message. " +
          (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 }
    );
  }
}
