var cookie = require("cookie");
import { useDispatch } from "react-redux";
import Banner from "@/components/Banner";
import NewAvailable from "@/components/NewAvailable";
import Tag from "@/components/Tag";
import SpecialProductsTab from "@/components/SpecialProductTab";
import Slider from "@/components/Slider";
import { setAcademy, setStory, setThriller } from "@/Slices/specialBooksSlice";
import { setSlider, setFooter, setMeta } from "@/Slices/themeInfoSlice";
import { useEffect } from "react";
import { getRequest, postRequest } from "@/utils/axiosUtils";
import {
  accessTokenAPI,
  productByCategoryAPI,
  themeInfoAPI,
} from "@/apiEndpoints";
import MetaData from "@/components/MetaData";

export default function Home(props) {
  const dispatch = useDispatch();
  const themeData = props?.responseData?.themeData;
  const storyBook = props?.responseData?.storyProduct?.data;
  const academyBook = props?.responseData?.academyProduct?.data;
  const thrillerBook = props?.responseData?.thrillerProduct?.data;

  useEffect(() => {
    if (themeData?.logo?.light_logo) {
      localStorage.setItem("logo", JSON.stringify(themeData.logo?.light_logo));
    }
    if (themeData?.header?.body?.category_menu) {
      localStorage.setItem(
        "category",
        JSON.stringify(themeData.header?.body?.category_menu)
      );
    }
    if (themeData?.header?.body?.primary_menu) {
      localStorage.setItem(
        "primaryMenu",
        JSON.stringify(themeData.header?.body?.primary_menu)
      );
    }
    if (themeData?.theme_info?.category_1JXLtF?.list) {
      dispatch(setSlider(themeData?.theme_info?.category_1JXLtF?.list));
    }
    if (storyBook) {
      dispatch(setStory(storyBook));
    }
    if (academyBook) {
      dispatch(setAcademy(academyBook));
    }
    if (thrillerBook) {
      dispatch(setThriller(thrillerBook));
    }
    if (themeData?.footer?.body) {
      dispatch(setFooter(themeData?.footer?.body));
    }
    if (themeData?.seo) {
      dispatch(setMeta(themeData?.seo));
    }
  }, []);

  return (
    <>
      <MetaData />
      <Banner url="/banner.jpeg" />
      <Slider />
      <div className="row mb-5">
        <div className="col-sm-12">
          <SpecialProductsTab />
        </div>
      </div>
      <Banner url="/banner2.jpeg" />
      <div className="row mt-5">
        <div className="col-lg-3 col-md-12">
          <NewAvailable />
        </div>
        <div className="col-lg-9 col-sm-12">
          <Tag />
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  try {
    let responseData = null;
    if (req) {
      const headers = {
        Origin: "https://bookshop.webmanza.com",
      };
      const response = await postRequest(accessTokenAPI, {}, headers);
      const accessToken = response?.data?.access_token;
      const cookieString = cookie.serialize("accessToken", accessToken, {
        httpOnly: true,
      });
      res.setHeader("Set-Cookie", cookieString);
      headers.Authorization = `Bearer ${accessToken}`;
      const themeData = await postRequest(themeInfoAPI, {}, headers);
      const storyProduct = await getRequest(
        productByCategoryAPI,
        "858/?page=1&items_per_page=10",
        headers
      );
      const academyProduct = await getRequest(
        productByCategoryAPI,
        "863/?page=1&items_per_page=10",
        headers
      );
      const thrillerProduct = await getRequest(
        productByCategoryAPI,
        "860/?page=1&items_per_page=10",
        headers
      );
      responseData = {
        tokenData: response?.data,
        themeData: themeData?.data?.data,
        storyProduct: storyProduct?.data,
        academyProduct: academyProduct?.data,
        thrillerProduct: thrillerProduct?.data,
      };
    }
    return {
      responseData,
    };
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
};
