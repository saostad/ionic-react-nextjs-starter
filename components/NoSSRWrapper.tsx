import dynamic from "next/dynamic";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NonSSRWrapper: React.FC<Props> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
