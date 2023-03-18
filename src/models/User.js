import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    primaryname: {
        type: String,
        require: true
    },
    secondname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    avatar: {
        type: String,
        require: false
    }
});

// Antes de salvar o usuário encripitamos a senha
UserSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);

export default User;