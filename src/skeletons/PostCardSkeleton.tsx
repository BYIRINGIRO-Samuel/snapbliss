const PostCardSkeletons = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      <div className="post-card-skeleton animate-pulse mb-5">
        <div className="flex-between">
          <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div className="skeleton w-32 h-6 rounded-md mb-2" />
            </div>
          </div>
        </div>
        <div className="small-medium lg:base-medium py-5">
          <div className="skeleton w-full h-8 rounded-md mb-2" />
        </div>
        <div className="skeleton w-full h-72 rounded-md" />
      </div>


      <div className="post-card-skeleton animate-pulse mb-5">
        <div className="flex-between">
          <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div className="skeleton w-32 h-6 rounded-md mb-2" />
            </div>
          </div>
        </div>
        <div className="small-medium lg:base-medium py-5">
          <div className="skeleton w-full h-8 rounded-md mb-2" />
        </div>
        <div className="skeleton w-full h-72 rounded-md" />
      </div>


      <div className="post-card-skeleton animate-pulse mb-5">
        <div className="flex-between">
          <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div className="skeleton w-32 h-6 rounded-md mb-2" />
            </div>
          </div>
        </div>
        <div className="small-medium lg:base-medium py-5">
          <div className="skeleton w-full h-8 rounded-md mb-2" />
        </div>
        <div className="skeleton w-full h-72 rounded-md" />
      </div>

      
      <div className="post-card-skeleton animate-pulse mb-5">
        <div className="flex-between">
          <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div className="skeleton w-32 h-6 rounded-md mb-2" />
            </div>
          </div>
        </div>
        <div className="small-medium lg:base-medium py-5">
          <div className="skeleton w-full h-8 rounded-md mb-2" />
        </div>
        <div className="skeleton w-full h-72 rounded-md" />
      </div>

    </div>
  );
};

export default PostCardSkeletons;
