const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        //making sure only one person has the same email
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase() === "password") {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number');
            }
        }
    }
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login.');
    }

    return user;
}

// MIDDLEWARE - Pre / Post can be accessed
// Hashing the password before saving
userSchema.pre('save', async function (next) {
    const user = this;

    console.log('just before saving');
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    // we call it when we are done the work we need to do
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User