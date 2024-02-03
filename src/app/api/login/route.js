import { connectUrl } from "@/connect/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { UserLogin } from "@/connect/adduser/user";



export  async function GET() {

   let data=([]);
   try{
    
    await mongoose.connect(connectUrl);

     data = await UserLogin.find();

   }
   catch(err){
    return NextResponse.json({result:false})
   }

   return NextResponse.json({result: data});


}



export async function POST(request){

await mongoose.connect(connectUrl);

const payload = await request.json();
 
const user = new UserLogin(payload);

const result = await user.save();

return NextResponse.json({result, status:true});



}
