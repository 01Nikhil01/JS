import SimpleBar from "simplebar-react";

const SimplebarReactClient = ({ children, ...options }) => {
  console.log(children);
  return <SimpleBar {...options}>{children}</SimpleBar>;
};

export default SimplebarReactClient;
