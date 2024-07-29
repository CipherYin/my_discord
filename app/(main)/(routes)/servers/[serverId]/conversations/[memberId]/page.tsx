import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface MemberIdPageProps {
    params: {
        memberId: string,
        serverId: string
    }
}




const MemberIdPage = async ({
    params
}: MemberIdPageProps) => {
    const profile = await currentProfile()
    if(!profile){
        return redirectToSignIn();
    }
    const currentMember = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: profile.id
        },
        include: {
            profile: true
        }
    })
    if(!currentMember){
        return redirect("/")
    }
    return ( <div>
        Memebr Id Page
    </div> );
}
 
export default MemberIdPage;