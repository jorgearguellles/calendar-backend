const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
  try {
    const events = await Event.find().populate("user", "name");

    res.status(200).json({
      ok: true,
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error getting events",
    });
  }
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();

    res.status(201).json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error creating event",
    });
  }
};

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const userId = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }

    if (event.user.toString() !== userId) {
      return res.status(401).json({
        ok: false,
        msg: "You are not allowed to update this event",
      });
    }

    const newEvent = {
      ...req.body,
      user: userId,
    };

    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error updating event",
    });
  }
};

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const userId = req.uid;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }

    if (event.user.toString() !== userId) {
      return res.status(401).json({
        ok: false,
        msg: "You are not allowed to delete this event",
      });
    }

    await Event.findByIdAndDelete(eventId);

    res.status(200).json({
      ok: true,
      msg: "Event deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error deleting event",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
