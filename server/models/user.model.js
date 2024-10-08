import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        required:false,
        default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F42%2F80%2Fmaneki-neko-japanese-lucky-cat-fortune-symbol-vector-10214280.jpg&f=1&nofb=1&ipt=18aee661821c8561e8a32bb4fae6d6364b0a30ded8cbba69b5379fbb5f9ba771&ipo=images"
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true}
)

const User = mongoose.model('User', userSchema)

export default User