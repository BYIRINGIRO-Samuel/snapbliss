const LeftProfileSkeleton = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" /> 
            <div className="flex flex-col">
                <div className="skeleton w-32 h-6 rounded-md mb-2" /> 
                <div className="flex-center gap-2 text-light-3">
                    <div className="skeleton w-24 h-4 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default LeftProfileSkeleton
