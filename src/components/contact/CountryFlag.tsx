/* Banderas vía flagcdn — requiere https://flagcdn.com en img-src (next.config.ts) */
import Image from "next/image";

export default function CountryFlag({ iso }: { iso: string }) {
  const src = `https://flagcdn.com/w40/${iso}.png`;
  const src2x = `https://flagcdn.com/w80/${iso}.png`;

  return (
    <div style={{ width: 20, height: 15, flexShrink: 0, display: "block", borderRadius: 2, overflow: "hidden" }}>
      <Image
        src={src}
        alt=""
        width={20}
        height={15}
        sizes="20px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
