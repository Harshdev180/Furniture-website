import React from "react";

const getWebpUrl = (url) => {
  try {
    if (!url || typeof url !== "string") return null;
    if (/\.(webp)(\?.*)?$/i.test(url)) return url;
    if (url.includes("images.unsplash.com")) {
      const u = new URL(url);
      u.searchParams.set("fm", "webp");
      return u.toString();
    }
    return null;
  } catch {
    return null;
  }
};

export default function Picture({ src, alt, className, style, ...rest }) {
  const webp = getWebpUrl(src);
  return (
    <picture {...rest}>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} className={className} style={style} loading="lazy" decoding="async" {...rest} />
    </picture>
  );
}
