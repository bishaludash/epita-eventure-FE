"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import { TUser } from "@/types/EventType";
import { getUser } from "@/api/api";
import Loading from "../UI/Loading";

const Profile = () => {
  const [profile, setProfile] = useState<TUser>({
    nickname: "",
    name: "",
    picture: "",
    updated_at: "",
    email: "",
    email_verified: false,
    sub: "",
    sid: "",
  });
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await getUser();
    setProfile(data);
    setisLoading(false);
  };

  if (isLoading) {
    return (
      <div className="w-full m-auto text-center pt-10">
        <Loading />
      </div>
    );
  }
  return (
    <div className="my-4 flex  flex-row gap-10">
      <div className="w-[800px]">
        <div className="-mt-4">
          <TextInput
            label={"Name"}
            name="eventName"
            value={profile.nickname}
            disabled={true}
            onChange={() => console.log("ici")}
          />
        </div>

        <TextInput
          label={"Email"}
          name="eventName"
          value={profile.email}
          disabled={true}
          onChange={() => console.log("ici")}
        />

        <TextInput
          label={"Email Verified"}
          name="location"
          value={profile.email_verified ? "Yes" : "No"}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextInput
          label={"SID"}
          name="sid"
          value={profile.sid}
          onChange={() => console.log("ici")}
          disabled={true}
        />

        <TextInput
          label={"Auth0 Id"}
          name="aid"
          value={profile.sub}
          onChange={() => console.log("ici")}
          disabled={true}
        />
      </div>
      <div>
        <figure>
          <img src={profile.picture} alt="Shoes" />
        </figure>
      </div>

      {/* <Toast /> */}
    </div>
  );
};

export default Profile;
