import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const [logo, setLogo] = useState();
  const themeInfo = useSelector((state) => state.themeInfo);
  const footerData = themeInfo?.footer;

  useEffect(() => {
    setLogo(JSON.parse(localStorage.getItem("logo")));
  }, []);

  return (
    <footer className="bg-light text-dark pt-4 pb-2">
      <div className="container">
        <div className="row border-bottom">
          <div className="col-md-5">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={60}
              objectFit="cover"
            />
            <p>{footerData?.column1?.list?.text_oaT6SY?.content}</p>
          </div>
          <div className="col-md-5">
            <h4>{footerData?.column2?.list?.newsletter_nvABLM?.title}</h4>
            <p>{footerData?.column2?.list?.newsletter_nvABLM?.subtitle}</p>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>
            {footerData?.column4?.list?.menubar_87srO8?.list?.map((item) => (
              <>
                <Link className="custom-link" key={item?.id} href={item.path}>
                  {item.text}
                </Link>
                <br />
              </>
            ))}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 text-center">
            <p className="mb-0">&copy; 2023 Book Shop</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
