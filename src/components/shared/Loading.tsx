const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center justify-center gap-3 ml-96">
                <img src="/assets/images/logo-up.svg" alt="logo" width={35} height={35} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 h3-bold md:h2-bold">
                    SnapBliss
                </p>
            </div>
            <p className="items-center justify-center ml-96 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 h2-bold md:h2-bold">Where connections come to life.💪</p>
        </div>
    )
}

export default Loading
