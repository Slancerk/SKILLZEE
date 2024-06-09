import mongoose from "mongoose"

export const dbConnection = async () => {
    mongoose.connect("mongodb+srv://psouvik260:oeLc40Kpjtbg4B2r@cluster2.f8ny4z3.mongodb.net/")
        .then(() => console.log("Database connected!"))
        .catch(() => console.log("Something went wrong while connecting to the database."))
}