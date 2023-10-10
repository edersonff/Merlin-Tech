import api from "../api";
import { ContactForm } from "./type";

export const contactService = {
  send: async (data: ContactForm) => await api.post("/contact", data),
};
