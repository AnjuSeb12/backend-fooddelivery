import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://christeenaanju:c8TbcAfpmeF7QOF8@cluster0.roo06vq.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}