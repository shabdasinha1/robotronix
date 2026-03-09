import Joi from "joi";

export const createProjectValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),

  category: Joi.object({
    slug: Joi.string().required(),
    label: Joi.string().required(),
  }).required(),

  industry: Joi.string().required(),
  heading: Joi.string().allow("", null),
  tech: Joi.array().items(Joi.string()),
});

export const updateProjectValidation = Joi.object({
  title: Joi.string(),
  description: Joi.string(),

  category: Joi.object({
    slug: Joi.string(),
    label: Joi.string(),
  }),

  industry: Joi.string(),
  heading: Joi.string(),
  tech: Joi.array().items(Joi.string()),
});