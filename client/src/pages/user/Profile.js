import React from "react";
import Layout from "../../component/layout/Layout";
import UserMenu from "../../component/layout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>{" "}
          <div className="col-md-8">
            <h1>Your Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
