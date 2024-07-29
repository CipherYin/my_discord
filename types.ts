import  { Member,Profile,Server } from "@prisma/client"
import { Channel } from "diagnostics_channel";
export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[];
}

