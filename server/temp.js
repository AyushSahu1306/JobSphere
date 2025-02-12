import bcrypt from "bcryptjs";

const newPassword = "Khemu@dada123"; // Set your new password
const saltRounds = 10;

bcrypt.hash(newPassword, saltRounds, (err, hash) => {
    if (err) {
        console.error("Error hashing password:", err);
    } else {
        console.log("Hashed password:", hash);
    }
});
