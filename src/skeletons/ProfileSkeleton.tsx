const profiles = Array(9).fill(null);

const ProfileSkeleton = () => {
  return (
    <div className="space-x-2 flex flex-wrap">
      {profiles.map((_, idx) => (
        <div 
          key={idx} 
          className={`chat-image avatar ${idx > 2 ? "hidden sm:block" : ""}`} 
        >
          <div className="size-20 rounded-full">
            <div className="skeleton w-full h-full rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileSkeleton;
