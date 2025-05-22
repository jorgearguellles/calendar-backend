const { response } = require("express");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Get events",
  });
};

const createEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Create event",
  });
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Update event by id",
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Delete event by id",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
