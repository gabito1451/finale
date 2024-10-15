import React from "react";
import ProfileDetailForm from "../Components/ProfileDetailForm";
import Carousel from "../Components/Carousel";

const Profile = () => {
  return (
    <div>
      <Carousel children={<ProfileDetailForm />} />
    </div>
  );
};

export default Profile;
