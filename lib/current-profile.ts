import { auth } from "@clerk/nextjs/server";

import {db} from "./db"
import { redirect } from 'next/navigation';
import { Profile } from "@prisma/client";



export const currentProfile = async ()=> {
    const {userId} = auth()
    if(!userId){
        return redirect("/sign-in");
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    }) as Profile;

    return profile
}