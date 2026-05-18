# Despliegue — christopherpaucar.dev

Orden correcto: **1. Supabase → 2. Gmail (SMTP) → 3. Vercel**

Cursor no se conecta solo al repo: importas el proyecto en Vercel desde GitHub.

---

## 1. Supabase (primero — 10 min)

1. [supabase.com](https://supabase.com) → **Start your project** → **New project**
2. Nombre: `christopherpaucar` (o el que quieras), región cercana (ej. South America), contraseña de DB (guárdala).
3. Cuando termine de crearse: **SQL Editor** → **New query**
4. Copia y ejecuta todo el archivo `supabase/schema.sql` de este repo → **Run**
5. **Project Settings** (engranaje) → **API**:
   - **Project URL** → copia (será `SUPABASE_URL`)
   - **service_role** (Reveal) → copia (será `SUPABASE_SERVICE_ROLE_KEY`)

Guarda esas dos claves en un bloc de notas. No las subas a GitHub.

---

## 2. Gmail / SMTP (segundo — 10 min)

1. Google Account → **Seguridad** → activa **Verificación en 2 pasos**
2. **Contraseñas de aplicaciones** → crea una para “Correo”
3. Anota:

| Variable | Valor |
|----------|--------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | tu correo Gmail |
| `SMTP_PASS` | contraseña de aplicación (16 caracteres) |
| `MAIL_FROM` | mismo correo |
| `MAIL_TO` | correo donde quieres recibir contactos |

---

## 3. Vercel (tercero — 15 min)

1. [vercel.com](https://vercel.com) → login con **GitHub**
2. **Add New…** → **Project**
3. **Import** el repo `christopherpaucar.dev` (si no aparece, **Adjust GitHub App Permissions** y da acceso al repo)
4. **Environment Variables** → añade todas (Production + Preview + Development):

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
MAIL_FROM=
MAIL_TO=
```

Opcional:

```
WHATSAPP_PHONE=
WHATSAPP_APIKEY=
```

5. **Deploy** (no cambies el framework; debe detectar Next.js)
6. Prueba la URL `https://tu-proyecto.vercel.app`

### Dominio propio

1. Vercel → proyecto → **Settings** → **Domains**
2. Añade `christopherpaucar.dev` y `www.christopherpaucar.dev`
3. En tu registrador del dominio, pon los DNS que Vercel indique
4. Espera propagación (5–60 min)

---

## 4. Comprobar que todo funciona

- [ ] Sitio carga: terminal → hero → scroll
- [ ] Formulario **Contacto** → enviar → llega email a `MAIL_TO`
- [ ] **Testimonios** → enviar uno → Supabase → **Table Editor** → `testimonials` → nueva fila

### Si el contacto falla

- Revisa variables SMTP en Vercel
- Vercel → **Deployments** → último deploy → **Functions** → logs de `/api/contact`

### Si testimonios fallan

- ¿Ejecutaste `supabase/schema.sql`?
- ¿`SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` correctas en Vercel?
- **Redeploy** después de cambiar variables: Deployments → ⋮ → Redeploy

---

## Build local (antes de cada deploy importante)

```bash
npm install
npm run build
```

Si `npm run build` falla, corrige antes de hacer push a GitHub.

---

## Actualizar el sitio después

1. Cambios en tu PC → `git push` al repo
2. Vercel despliega solo en cada push a `main`

No hace falta volver a crear Supabase ni Vercel; solo push.
