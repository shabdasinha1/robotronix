import { publicApi } from "../api/axios";

/* ===============================
   GET ALL TESTIMONIALS (PUBLIC)
================================ */
export const getAllTestimonials = async () => {
  const {data} =  await publicApi.get("/testimonial/alltestimonials");
  return data;  
};
