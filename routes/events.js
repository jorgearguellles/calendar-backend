/*
  Events routes:
  /api/events

  - create route
  - get route
  - update route
  - delete route
*/

const { Router } = require("express");
const { jwtValidation } = require("../middlewares/jwtValidation");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { check } = require("express-validator");
const { fieldValidators } = require("../middlewares/fieldValidators");
const { isDate } = require("../helpers/isDate");

// Validators - Middlewares
const newEventValidator = [
  check("title", "Title is required").not().isEmpty(),
  check("start", "Start is required").custom(isDate),
  check("end", "End is required").custom(isDate),
  fieldValidators,
];

const updateEventValidator = [
  check("title", "Title is required").not().isEmpty(),
  check("start", "Start is required").custom(isDate),
  check("end", "End is required").custom(isDate),
  fieldValidators,
];

const deleteEventValidator = [
  check("id", "Id is required").not().isEmpty(),
  fieldValidators,
];

// Initialize router
const router = Router();

// Validate JWT every route
router.use(jwtValidation);

// Routes
router.get("/", getEvents);
router.post("/", newEventValidator, createEvent);
router.put("/:id", updateEventValidator, updateEvent);
router.delete("/:id", deleteEventValidator, deleteEvent);

module.exports = router;
