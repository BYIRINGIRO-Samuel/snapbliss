const ExploreSkeleton = () => {
    return (
        <div className="flex flex-col mt-40 sm:mt-22 explore-container-skeleton">
            <h2 className="h3-bold md:h2-bold w-full mt-20 mb-10 ml-24">Search Posts</h2>
            <div className="flex gap-1 px-4 w-full rounded-lg">
                <div className="skeleton w-full h-11 rounded-md mb-16 flex items-center gap-2 px-3 explore-search ml-10">
                    <img
                        src="/assets/icons/search.svg"
                        width={24}
                        height={24}
                        alt="search"
                    />
                    <p className="text-light-3">Search</p>
                </div>
            </div>
            <h3 className="h3-bold md:h2-bold w-full mt-3 mb-5 ml-24">Popular Today</h3>
            <ul className="grid-container">
                <div className="skeleton relative min-w-72 h-72 block" /> 
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" /> 
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" /> 
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
            </ul>
        </div>
    );
}

export default ExploreSkeleton;
