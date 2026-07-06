import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.model.js"


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Use a secure secret key in production
const TOKEN_EXPIRATION = "24h"; // Token expiration time

const createToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

// Register a new user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        if (!name || !email || !password || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (validator.isEmail(email) === false) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email"
            });
        }
        if (password.length < 8) {
            res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            })
        }
        try {
            if (await user.findOne({ email })) {
                return res.status(400).json({
                    success: false,
                    message: "user already exists"
                })
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const saveUser = await user.create({
            name,
            email,
            password: hashedPassword,
            phoneNumber
        });
        const token = createToken(saveUser._id);
        res.status(200).json({
            success: true,
            token,
            user: {
                id: saveUser._id,
                message: 'User Created Successfully'
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// To Login a user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        try {
            const foundUser = await user.findOne({ email });
            if (!foundUser) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                })
            }
            const match = await bcrypt.compare(password, foundUser.password);
            if (!match) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                })
            };
            const token = createToken(foundUser._id);
            res.status(200).json({
                success: true,
                token,
                user: {
                    id: foundUser._id,
                    name: foundUser.name,
                    email: foundUser.email
                }
            });

        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Server error"
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// To Get the user details

export const getUserDetails = async (req, res) => {
    try {
        const userData = await user.findById(req.user.id).select('name email');
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        res.json({
            success: true,
            user: userData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// To Update the user details
export const updateUserDetails = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email || !validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Valid fields are required"
            });
        };

        try {
            const exists = await user.findOne({ email, _id: { $ne: req.user.id } });
            if (exists) {
                return res.status(400).json({
                    success: false,
                    message: "Email already in use"
                });
            };

            const updatedUser = await user.findByIdAndUpdate(req.user.id, { name, email }, { new: true, runValidators: true }).select('name email');

            res.json({
                success: true,
                user: updatedUser
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Server error"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// To Change the user password
export const changeUserPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword || newPassword.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Valid fields are required"
            });
        };
        try {
            const findUser = await user.findById(req.user.id).select('password');
            if (!findUser) {
                return res.status(404).json({
                    success: false,
                    message: "user not found"
                });
            };
            const match = await bcrypt.compare(currentPassword, findUser.password);
            if (!match) {
                return res.status(400).json({
                    success: false,
                    message: "Current password is incorrect"
                });
            };
            findUser.password = await bcrypt.hash(newPassword, 10);
            await findUser.save();
            res.json({
                success: true,
                message: "Password changed successfully"
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Server error"
            });
        };

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
