import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queries";
import UserProfile from "./UserProfile";
import ProfileSkeleton from "../../skeletons/ProfileSkeleton";

const ChatHeader = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="flex bg-slate-900 overflow-x-auto rounded-bl-[20px]">
      <div className="flex flex-row ml-5">
        {isLoading && !creators ? (
          <ProfileSkeleton />
        ) : (
          <ul className="flex mt-2 mb-2 gap-5 ">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1  ">
               <UserProfile user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
