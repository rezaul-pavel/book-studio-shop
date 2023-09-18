import Image from "next/legacy/image";
import Link from "next/link";

const Products = ({ productName, price, src, alt, url }) => {
  return (
    <Link className="custom-link" href={url || ""}>
      <div className="card card-shadow remove-card-border card-width m-3">
        <Image src={src} alt={alt} width={150} height={200} objectFit="fill" />
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-body-secondary text-wrap">
            {productName}
          </h6>
          <h5 className="card-title">{`৳${price}`}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Products;
