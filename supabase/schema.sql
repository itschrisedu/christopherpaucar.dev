-- Ejecutar en Supabase → SQL Editor → Run
-- Tabla para testimonios enviados desde el sitio

create table if not exists public.testimonials (
  id uuid primary key,
  quote text not null,
  name text not null,
  designation text not null default 'User',
  email text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  src text,
  created_at timestamptz not null default now()
);

create index if not exists testimonials_created_at_idx
  on public.testimonials (created_at desc);

-- La app usa SUPABASE_SERVICE_ROLE_KEY solo en el servidor (API routes).
-- No expongas esa clave en el frontend.
