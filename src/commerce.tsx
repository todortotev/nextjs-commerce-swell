import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import swell from "swell-js";

swell.init();

const Commerce = createContext<{}>({});

export function CommerceProvider({ children, config }: any) {
  const client = swell.init(
    "next-jsn-commerce",
    "pk_yGDfBIdNBqIRGice1MGq9UG9Xz2CCmF0",
    {
      useCamelCase: true,
    }
  );

  const [shop, setShop] = useState();

  const fetchSwell = async () => {};
}
