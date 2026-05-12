export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Christopher Paucar",
            url: "https://christopherpaucar.dev",
            logo: "https://christopherpaucar.dev/assets/icons/logoC.svg",
            sameAs: ["https://github.com/", "https://www.linkedin.com/"],
          }),
        }}
      />
    </>
  );
}