import { Models } from "appwrite";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: Models.Document;
};

const UserProfile = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.$id}`}>
      <div className="relative group">
        <div className="w-16 h-16 sm:w-16 sm:h-16 lg:w- lg:h- xl:w-22 xl:h-22 max-w-full max-h-full overflow-hidden rounded-full border-[4px] border-white p-[2px] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="creator"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
      
        <div className="absolute bottom-0 left-0 w-auto px-2 z-50 text-center text-lime-700 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl font-bold">
          <p>{user.username}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfile;
