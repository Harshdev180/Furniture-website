export default function FurniturePreview({ image, alt }) {
    return (
        <img
            src={image}
            alt={alt}
            className="w-full h-auto rounded shadow"
        />
    );
}
