import { TEvent, TUsers } from "@/types/EventType";
import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8080";

const portalURL = "http://localhost:3000";
export const getAllEvents = async () => {
  try {
    const res = await axios.get(apiURL + "/events");

    if (res.status === 200) {
      // sort by date asc
      const data = res.data.sort((a: TEvent, b: TEvent) => {
        return (new Date(a.eventDate) as any) - (new Date(b.eventDate) as any);
      });
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};

export const getEventsById = async (id: string) => {
  try {
    const res = await axios.get(apiURL + "/events/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};

export const createEvent = async (data: TEvent) => {
  try {
    const res = await axios.post(apiURL + "/events", data);

    if (res.status === 201) {
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateEvent = async (data: TEvent) => {
  try {
    const res = await axios.put(apiURL + "/events", data);

    if (res.status === 200) {
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (data: TEvent) => {
  try {
    const res = await axios.delete(apiURL + "/events/" + data.id);

    if (res.status === 200) {
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = () => {
  try {
    const users = [
      {
        nickname: "bishal",
        name: "bishal@test.com",
        picture:
          "https://s.gravatar.com/avatar/3e88accfb161c1aa77319649ea9b52ff?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbi.png",
        updated_at: "2024-08-13T16:01:18.104Z",
        email: "bishal@test.com",
        email_verified: false,
        sub: "auth0|66bb764f76712722e873bbb9",
        sid: "9wPz65p2sndmrmzDDZnUR3npW7OqeyJk",
      },
      {
        nickname: "sebastial",
        name: "sebastial@test.com",
        picture:
          "https://s.gravatar.com/avatar/eee60977284863b81e772d6762e3865d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fse.png",
        updated_at: "2024-08-13T17:53:22.870Z",
        email: "sebastian@test.com",
        email_verified: false,
        sub: "auth0|66bb9d0cdb29318201ac8cbf",
        sid: "w52UuPX6T84AK-kfTqRUfV2nE6g9EOmE",
      },
      {
        nickname: "marwan",
        name: "marwan@test.com",
        picture:
          "https://s.gravatar.com/avatar/135782db4a88a124d640e59c41a8c762?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        updated_at: "2024-08-13T17:54:51.862Z",
        email: "marwan@test.com",
        email_verified: false,
        sub: "auth0|66bb8d6076712722e873d9a7",
        sid: "MohHNa8h_ORP9qPO2m6k-uCncRAvSYnE",
      },
    ];

    return users;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(portalURL + "/api/auth/me");
    if (res.status === 200) {
      return res.data;
    } else {
      return "No Data";
    }
  } catch (error) {
    console.error(error);
  }
};
