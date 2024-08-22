import {liveblocks} from "@/lib/liveblocks"
import { currentUser } from "@clerk/nextjs/server";
import { colors } from "@clerk/themes/dist/clerk-js/src/ui/foundations/colors";
import { info } from "console";
import { redirect } from "next/dist/server/api-utils";

export async function POST(request: Request) {
    const clerkUser = await currentUser();

    if(!clerkUser) redirect('/sign-in');

    const {id, firstName, lastName, emailAddresses, imageUrl} = clerkUser;

  const user = {
    id,
    info: {
      id,
      name : `${firstName} ${lastName}`,
      email : emailAddresses[0].emailAddresses,
      avatar: imageUrl,
      color: ''
    }
  }

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}