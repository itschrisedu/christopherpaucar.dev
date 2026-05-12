import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  email: string;
  rating: number;
  src: string;
  createdAt: string;
}

function getGravatarUrl(email: string): string {
  const trimmedEmail = email.trim().toLowerCase();
  const hash = crypto.createHash('md5').update(trimmedEmail).digest('hex');
  return `https://gravatar.com/avatar/${hash}?d=identicon&s=200`;
}

export async function GET() {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("testimonials")
    .select("id, quote, name, designation, email, rating, src, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }

  const testimonials = (data ?? []).map((testimonial) => ({
    id: testimonial.id,
    quote: testimonial.quote,
    name: testimonial.name,
    designation: testimonial.designation,
    email: testimonial.email,
    rating: testimonial.rating,
    src: testimonial.src,
    createdAt: testimonial.created_at,
  }));

  return NextResponse.json({ testimonials });
}

export async function POST(request: NextRequest) {
  try {
    const supabaseAdmin = getSupabaseAdmin();

    const body = await request.json();
    const { quote, name, designation, email, rating } = body;

    if (!quote || !name || !email || !rating) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const newTestimonial: Testimonial = {
      id: crypto.randomUUID(),
      quote,
      name,
      designation: designation || 'User',
      email,
      rating,
      src: getGravatarUrl(email),
      createdAt: new Date().toISOString(),
    };

    const { error } = await supabaseAdmin.from("testimonials").insert({
      id: newTestimonial.id,
      quote: newTestimonial.quote,
      name: newTestimonial.name,
      designation: newTestimonial.designation,
      email: newTestimonial.email,
      rating: newTestimonial.rating,
      src: newTestimonial.src,
      created_at: newTestimonial.createdAt,
    });

    if (error) {
      console.error("Error saving testimonial:", error);
      return NextResponse.json(
        { error: "Failed to save testimonial" },
        { status: 500 }
      );
    }

    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error('Error processing testimonial:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
