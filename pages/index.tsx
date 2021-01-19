import React from "react";
import swell from "swell-js";

const client = swell.init(
  "next-jsn-commerce",
  "pk_yGDfBIdNBqIRGice1MGq9UG9Xz2CCmF0",
  {
    useCamelCase: true,
  }
);

const Home = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const test = await swell.products.list({});
          console.log(test);
        }}>
        asd
      </button>
    </div>
  );
};

export default Home;
