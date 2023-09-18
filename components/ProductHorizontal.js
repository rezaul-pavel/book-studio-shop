const { default: Image } = require("next/legacy/image");
import Link from "next/link";

const ProductHorizontal = ({ productName, price, src, alt, url }) => {
  return (
    <Link className="custom-link" href={url || ""}>
      <div className="card remove-card-border mb-3">
        <div className="d-flex g-0">
          <div className="w-10">
            <Image
              src={src}
              alt={alt}
              objectFit="fill"
              width={70}
              height={80}
            />
          </div>
          <div className="w-75">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {productName}
              </h6>
              <h5 className="card-title">{`৳${price}`}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductHorizontal;
