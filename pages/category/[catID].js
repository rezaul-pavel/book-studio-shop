var cookie = require("cookie");
import { getRequest } from "@/utils/axiosUtils";
const { default: Products } = require("@/components/Product");
import { productByCategoryAPI } from "@/apiEndpoints";
import MetaData from "@/components/MetaData";

const Category = ({ initialData }) => {
  const products = initialData?.data;
  const cateName = initialData?.category?.[0]?.text || "Category";
  return (
    <>
      <MetaData />
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-center">{cateName}</h2>
        <div className="custom-border"></div>
      </div>
      <div className="row">
        {products?.map((product) => (
          <div key={product.id} className="col-sm-6 col md-4 col-lg-3">
            <Products
              price={product?.price?.base_sale}
              productName={product?.name}
              src={product?.thumbnail?.src || "/default_cover.png"}
              alt={"/default_cover.png"}
              url={`/details/${product?.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps({ params, req }) {
  try {
    const catID = params.catID;
    const accessToken = cookie.parse(req.headers.cookie || "").accessToken;
    const headers = {
      Origin: "https://bookshop.webmanza.com",
      Authorization: `Bearer ${accessToken}`,
    };
    const products = await getRequest(
      productByCategoryAPI,
      `${catID}/?page=1&items_per_page=10`,
      headers
    );
    return {
      props: {
        initialData: products.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
}

export default Category;
