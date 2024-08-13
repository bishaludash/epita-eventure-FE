import { TEvent } from "@/types/EventType";
import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8080";

export const getAllEvents = async () => {
  try {
    const res = await axios.get(apiURL + "/events");
    if (res.status === 200) {
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
