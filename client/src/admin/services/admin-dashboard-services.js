import { api } from "../../api/axios";

/* =====================================================
   ADMIN DASHBOARD SERVICES
   (JWT Protected APIs)
===================================================== */

export const adminDashboardServices = {
  /* =====================================================
     MESSAGES MANAGEMENT
  ===================================================== */

  getMessages: async (params = {}) => {
    const { data } = await api.get("/messages", { params });
    return data;
  },

  getMessageById: async (id) => {
    const { data } = await api.get(`/messages/${id}`);
    return data;
  },

  deleteMessage: async (id) => {
    const { data } = await api.delete(`/messages/${id}`);
    return data;
  },

  /* =====================================================
     TESTIMONIALS MANAGEMENT
  ===================================================== */

  getTestimonials: async (params = {}) => {
    const { data } = await api.get("/testimonial/alltestimonials", { params });
    return data;
  },

  createTestimonial: async (payload) => {
    // const { data } = await api.post("/testimonial", payload);
    const { data } = await api.post("/testimonial", payload);
    return data;
  },

  updateTestimonial: async (id, payload) => {
    // console.log("user_id  :",id)
    const { data } = await api.patch(`/testimonial/${id}`, payload);
    return data;
  },

  deleteTestimonial: async (id) => {
    const { data } = await api.delete(`/testimonial/${id}`);
    // console.log(data);
    return data;
  },

  /* =====================================================
     LEADS MANAGEMENT
  ===================================================== */

  getLeads: async (params = {}) => {
    const { data } = await api.get("/leads", { params });
    return data;
  },

  deleteLead: async (id) => {
    const { data } = await api.delete(`/leads/${id}`);
    return data;
  },

  /* =====================================================
     JOBS / OPPORTUNITIES MANAGEMENT
  ===================================================== */

  getAllOpportunities: async (params = {}) => {
    const { data } = await api.get("/opportunities", { params });
    return data;
  },

  createOpportunity: async (payload) => {
    const { data } = await api.post("/opportunities", payload);
    return data;
  },

  updateOpportunity: async (id, payload) => {
    const { data } = await api.patch(`/opportunities/${id}`, payload);
    return data;
  },

  deleteOpportunity: async (id) => {
    const { data } = await api.delete(`/opportunities/${id}`);
    return data;
  },

  /* =====================================================
     APPLICATION MANAGEMENT
  ===================================================== */

  getApplications: async (params = {}) => {
    const { data } = await api.get("/application", { params });
    return data;
  },

  deleteApplication: async (id) => {
    const { data } = await api.delete(`/application/${id}`);
    return data;
  },

  updateApplicationStatus: async (id, payload) => {
    const { data } = await api.patch(`/application/${id}/status`, payload);
    return data;
  },
  /* =====================================================
   INDUSTRY LEADERS MANAGEMENT
===================================================== */

  getIndustryLeaders: async (params = {}) => {
    const { data } = await api.get("/industry-leaders", { params });
    return data;
  },

  createIndustryLeader: async (payload) => {
    const { data } = await api.post("/industry-leaders", payload);
    return data;
  },

  updateIndustryLeader: async (id, payload) => {
    const { data } = await api.patch(`/industry-leaders/${id}`, payload);
    return data;
  },

  deleteIndustryLeader: async (id) => {
    const { data } = await api.delete(`/industry-leaders/${id}`);
    return data;
  },

  /* =====================================================
   PORTFOLIO PROJECTS MANAGEMENT
===================================================== */

  getPortfolioProjects: async (params = {}) => {
    const { data } = await api.get("/portfolio/projects", { params });
    return data;
  },

  getPortfolioProjectById: async (id) => {
    const { data } = await api.get(`/portfolio/projects/${id}`);
    return data;
  },

  createPortfolioProject: async (payload) => {
    const { data } = await api.post("/portfolio/projects", payload);
    return data;
  },

  updatePortfolioProject: async (id, payload) => {
    const { data } = await api.patch(`/portfolio/projects/${id}`, payload);
    return data;
  },

  deletePortfolioProject: async (id) => {
    const { data } = await api.delete(`/portfolio/projects/${id}`);
    return data;
  },

  getPortfolioCategories: async () => {
    const { data } = await api.get("/portfolio/categories");
    return data;
  },
  restorePortfolioProject: async (id) => {
    return await api.patch(`/portfolio/projects/${id}/restore`);
  },
};

export default adminDashboardServices;
