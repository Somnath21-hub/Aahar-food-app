import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    console.log("📦 Incoming req.body:", req.body); // debug line

    const body = req.body || {}; // fallback to empty object

    const { firstName, lastName, email, phone, date, time } = body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });

        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(','), 400));
        }

        return next(error);
    }
};
