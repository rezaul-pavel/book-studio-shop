import React from "react";
import Image from "next/legacy/image";

const Banner = ({ url }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-12">
        <Image
          src={url}
          alt="Banner Image"
          layout="responsive"
          width={600}
          height={200}
        />
      </div>
    </div>
  );
};

export default Banner;
