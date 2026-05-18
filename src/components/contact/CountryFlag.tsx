/* Banderas vía flagcdn — requiere https://flagcdn.com en img-src (next.config.ts) */

export default function CountryFlag({ iso }: { iso: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${iso}.png`}
      srcSet={`https://flagcdn.com/w80/${iso}.png 2x`}
      alt=""
      width={20}
      height={15}
      loading="lazy"
      decoding="async"
      style={{ objectFit: "cover", borderRadius: "2px", flexShrink: 0, display: "block" }}
    />
  );
}
