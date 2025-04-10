import Image from "next/image";

type MarkdownImageProps = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  blurDataURL?: string;
};

export default function MarkdownImage(props: MarkdownImageProps) {
  const { src, alt, width, height, blurDataURL } = props;

  if (!src || !alt) {
    throw new Error("src and alt is required");
  }
  return (
    <Image
      blurDataURL={blurDataURL}
      placeholder={blurDataURL ? "blur" : "empty"}
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      className="rounded-xl border object-cover !my-0"
      draggable={false}
    />
  );
}
