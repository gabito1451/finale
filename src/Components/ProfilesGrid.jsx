import React from "react";
import ProfileCard from "../ui/ProfileCard"; // Import the ProfileCard Component
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar1.svg";
const ProfilesGrid = () => {
  const profiles = [
    {
      image: avatar1,
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
    {
      image: avatar2,
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
    {
      image: avatar1,
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },

    {
      image: avatar2,
      name: "TOLANI CLARK",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc facilisi congue vel ipsum ullamcorper molestie morbi. Tristique ",
    },
  ];

  return (
    <div className="bg-[#0d47a1] py-20 px-10 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilesGrid;
