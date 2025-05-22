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

// Initialize router
const router = Router();

// Validate JWT every route
router.use(jwtValidation);

// Routes
router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
