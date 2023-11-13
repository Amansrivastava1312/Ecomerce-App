import React from "react";
import Layout from "../../component/layout/Layout";
import UserMenu from "../../component/layout/UserMenu";

const Oders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Oders;
