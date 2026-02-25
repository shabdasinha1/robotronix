import { publicApi } from "../api/axios";

/* ===============================
   GET ALL TESTIMONIALS (PUBLIC)
================================ */
export const getAllTestimonials = async () => {
  const { data } = await publicApi.get("/testimonial/alltestimonials");
  return data;
};
/* ===============================
   GET ALL INDUSTRY LEADERS LOGO (PUBLIC)
================================ */
export const getAllIndustryLeaders = async () => {
  const { data } = await publicApi.get("/industry-leaders");
  return data;
};
/* ===============================
   CAREER PAGE API'S
================================ */

// --------------- Current Jobs --------------------
export const getAllJobs = async () => {
  const { data } = await publicApi.get("/job");
  return data;
};


export const jobApply = async(payload)=>{
  const {data} = await publicApi.post('/application', payload);
  return data;
}