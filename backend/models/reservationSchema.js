import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must contain at least 3 characters!"],
    maxLength: [30, "First name cannot exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must contain at least 3 characters!"],
    maxLength: [30, "Last name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [10, "Phone number must be 10 digits"],
    maxLength: [10, "Phone number must be 10 digits"],
  },
  time: {
    type: String,
    required: [true, "Reservation time is required"],
  },
  date: {
    type: String,
    required: [true, "Reservation date is required"],
  },
});

// Export the model
export const Reservation = mongoose.model("Reservation", reservationSchema);
