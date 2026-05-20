import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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

    // simple sanitize helper
    const sanitize = (s: any) => (typeof s === "string" ? s.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim() : s);

    // validate email helper
    const isValidEmail = (email: string) => {
      if (!email) return false;
      const normalized = email.trim().toLowerCase();
      if ((normalized.match(/@/g) || []).length !== 1) return false;
      const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      return re.test(normalized);
    };

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

    // server-side email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
    }

    let fullPhone = "Not provided";
    if (phone) {
      const phoneNumber = parsePhoneNumberFromString(`${phoneCode}${phone}`);
      if (!phoneNumber || !phoneNumber.isValid()) {
        return NextResponse.json({ success: false, error: "Invalid phone number." }, { status: 400 });
      }
      fullPhone = phoneNumber.number; // E.164 normalized
    }

    // sanitize inputs for use in email body
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeSubject = sanitize(subject || "");

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

    // In local development, if SMTP credentials are not configured, skip sending
    // actual emails to avoid failures while validating input. The request will
    // still be validated and normalized.
    const hasSmtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);
    if (!hasSmtp && process.env.NODE_ENV !== "production") {
      console.log("SMTP not configured — skipping email send in dev. Returning success for testing.");
      return NextResponse.json({ success: true, message: "Validation passed (dev mode: email not sent)." });
    }

    // 4. Build email
    const htmlBody = [
      '<div style="font-family:Inter, system-ui, -apple-system, Roboto, Arial, sans-serif;max-width:680px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e8e8ef">',
      '  <div style="background:linear-gradient(90deg,#0b1724,#09203a);padding:20px 24px;color:#fff;text-align:left;display:flex;align-items:center;gap:12px">',
      `    <div style="flex:0 0 auto"><img src="https://christopherpaucar.dev/assets/icons/logo-64.png" alt="Christopher" width="48" height="48" style="border-radius:8px;display:block"/></div>`,
      `    <div style="font-size:16px;font-weight:700">New Project Lead from ${safeName}</div>`,
      '  </div>',
      '  <div style="padding:22px;background:#ffffff;color:#0b1220;line-height:1.5">',
      `    <p style="margin:0 0 8px"><strong>Name:</strong> ${safeName}</p>`,
      `    <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>`,
      `    <p style="margin:0 0 8px"><strong>Phone:</strong> ${fullPhone}</p>`,
      `    <p style="margin:0 0 8px"><strong>Subject:</strong> ${safeSubject || 'N/A'}</p>`,
      `    <p style="margin:0 0 8px"><strong>Budget:</strong> <span style="background:#f3f6ff;padding:4px 8px;border-radius:6px">${sanitize(budget || 'N/A')}</span></p>`,
      `    <p style="margin:0 0 18px"><strong>Timeline:</strong> <span style="background:#f3f6ff;padding:4px 8px;border-radius:6px">${sanitize(timeline || 'N/A')}</span></p>`,
      '    <hr style="border:0;border-top:1px solid #f1f3f6;margin:18px 0" />',
      '    <h3 style="margin:0 0 10px;font-size:16px">Message</h3>',
      `    <p style="white-space:pre-wrap;margin:0;color:#24303b">${sanitize(message)}</p>`,
      '  </div>',
      '  <div style="padding:18px;background:#fbfdff;text-align:center">',
      '    <p style="margin:0 0 10px;color:#596a7b;font-size:13px">Se recibió una nueva solicitud desde el formulario de contacto.</p>',
      `    <a href="https://christopherpaucar.dev" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0b72ff;color:#fff;text-decoration:none;font-weight:600">Ver portafolio</a>`,
      '  </div>',
      '</div>',
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

    // 6. Send auto-reply to the sender to acknowledge receipt (brand-friendly)
    try {
      const replySubject = "Gracias — recibí tu mensaje";
      const replyText = `Hi ${safeName || "there"},\n\nThanks for contacting me. I received your message and will respond within 24 hours. In the meantime you can review my recent work at https://christopherpaucar.dev\n\nBest regards,\nChristopher`;

      const calendly = process.env.CALENDAR_URL || "https://calendly.com/";
      const replyHtml = [
        '<div style="font-family:Inter, system-ui, -apple-system, Roboto, Arial, sans-serif;max-width:680px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #eef2f7">',
        '  <div style="background:linear-gradient(90deg,#0b1724,#09203a);padding:18px 22px;color:#fff;display:flex;gap:12px;align-items:center">',
        `    <img src="https://christopherpaucar.dev/assets/icons/logo-64.png" alt="logo" width="44" height="44" style="border-radius:8px;display:block"/>`,
        '    <div style="font-size:15px;font-weight:700">Thanks for reaching out — I got your message</div>',
        '  </div>',
        '  <div style="padding:20px;background:#fff;color:#0b1220;line-height:1.5">',
        `    <p style="margin:0 0 10px">Hi ${safeName || "there"},</p>`,
        '    <p style="margin:0 0 10px">Thanks for getting in touch — I appreciate the opportunity. I typically respond within 24 hours. If your request is urgent, you can book a short call directly to discuss scope and next steps.</p>',
        `    <p style="margin:14px 0 0"><a href="${calendly}" style="display:inline-block;padding:10px 14px;background:#0b72ff;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">Schedule a quick call</a></p>`,
        '    <p style="margin:16px 0 0;color:#616e7b;font-size:13px">Also feel free to browse my recent projects at <a href="https://christopherpaucar.dev">christopherpaucar.dev</a>.</p>',
        '    <hr style="border:0;border-top:1px solid #f2f5f8;margin:18px 0">',
        '    <p style="font-size:13px;color:#6b7785;margin:0">This is an automated confirmation — no reply needed. I will follow up personally soon.</p>',
        '  </div>',
        '  <div style="background:#fbfdff;padding:12px 16px;text-align:center;color:#556270;font-size:13px">',
        '    Christopher Paucar — Full Stack Developer • <a href="https://christopherpaucar.dev">christopherpaucar.dev</a>',
        '  </div>',
        '</div>',
      ].join('\n');

      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: safeEmail,
        subject: replySubject,
        text: replyText,
        html: replyHtml,
      });
    } catch (autoErr) {
      console.error("Auto-reply failed:", autoErr);
      // don't fail the main response if auto-reply fails
    }

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
