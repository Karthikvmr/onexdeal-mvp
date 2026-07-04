interface ProductGalleryProps {
  image: string;
  title: string;
}

const ProductGallery = ({ image, title }: ProductGalleryProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <img
        src={image}
        alt={title}
        className="h-125 w-full object-cover"
      />
    </div>
  );
};

export default ProductGallery;