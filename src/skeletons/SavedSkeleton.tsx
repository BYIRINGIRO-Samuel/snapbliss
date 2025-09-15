const SavedSkeleton = () => {
    return (
        <div className="mt-10">
            <ul className="grid-container">
                <div className="skeleton relative min-w-72 h-72 block" /> 
                <div className="skeleton relative min-w-72 h-72 block" /> 
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" /> 
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
                <div className="skeleton relative min-w-72 h-72 hidden sm:block" />
            </ul>
        </div>
    );
}

export default SavedSkeleton;
