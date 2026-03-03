import { ZodError } from "zod";

// const validate = (schema) => (req, res, next) => {
//   console.log((req.body))
//   try {
//     schema.parse({
//       body: req.body,
//       params: req.params,
//       query: req.query,
//     });
//     next();
//   } catch (error) {
//     if (error instanceof ZodError) {
//       return res.status(400).json({
//         success: false,
//         errors: error.errors,
//       });
//     }
//     next(error);
//   }
// };
const validate = (schema) => (req, res, next) => {
  try {
    // If schema has a "body" key, wrap req.body
    if (schema.shape && schema.shape.body) {
      schema.parse({ body: req.body, params: req.params, query: req.query });
    } else {
      schema.parse(req.body); // existing plain object schemas
    }
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
export default validate;
