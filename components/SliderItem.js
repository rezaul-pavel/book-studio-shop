import React from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

const SliderItem = ({ src, alt, buttonName, id }) => {
  const router = useRouter();
  const clickHandler = (id) => {
    router.push(`/category/${id}`);
  };
  return (
    <div className="item">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <button className="btn btn-danger" onClick={() => clickHandler(id)}>
        {buttonName}
      </button>
    </div>
  );
};

export default SliderItem;
