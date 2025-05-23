const moment = require("moment");

// Custom validator to check if the date is valid
const isDate = (value) => {
  if (!value) {
    return false;
  }

  const date = moment(value);

  return date.isValid();
};

module.exports = {
  isDate,
};
