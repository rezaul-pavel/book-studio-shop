var cookie = require("cookie");
const { default: Image } = require("next/legacy/image");
import { getRequest } from "@/utils/axiosUtils";
import { productDetailsAPI } from "@/apiEndpoints";
import MetaData from "@/components/MetaData";

const ProductDetails = ({ initialData }) => {
  const details = initialData?.data;
  return (
    <div className="row p-2">
      <MetaData
        description={details?.seo?.description}
        keywords={details?.seo?.keywords}
        title={details?.seo?.title}
      />
      <div className="col-sm-12 col-md-4">
        <Image
          src={details?.thumbnail?.src}
          alt={details?.name}
          width={400}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="col-sm-12 col-md-8">
        <h2>{details?.name}</h2>
        <h4 className="text-body-secondary">
          Price: ৳{details?.price?.base_sale}
        </h4>
        <h6>Product Details</h6>
        <p>{details?.description}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params, req }) {
  try {
    const prodID = params.prodID;
    const accessToken = cookie.parse(req.headers.cookie || "").accessToken;
    const headers = {
      Origin: "https://bookshop.webmanza.com",
      Authorization: `Bearer ${accessToken}`,
    };
    const productDetails = await getRequest(productDetailsAPI, prodID, headers);
    return {
      props: {
        initialData: productDetails.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
}

export default ProductDetails;
