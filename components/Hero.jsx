

const Hero = () => {
    return (
        <>
            <div
                className="hero relative w-100 h-screen bg-cover lg:bg-cover bg-center flex flex-col justify-center 
            bg-[url('https://res.cloudinary.com/johnpaul/image/upload/v1667873220/hero-bg_rahc7q.jpg')]">
                <div className="flex flex-col justify-center space-y-8 items-center">
                    <h1 className="text-2xl text-gray-800 md:text-3xl md:tracking-widest lg:text-4xl uppercase tracking-wider font-bold w-100 bg-red-300/50 p-10 lg:px-40 py-10">Shop for your Toys now </h1>
                    <a href="#products" className="text-lg md:text-2xl border-2 border-red-300 text-red-200 font-medium hover:shadow-lg hover:bg-red-100 hover:text-black px-5 md:px-10 py-5">Shop Now</a>
                </div>
            </div>
        </>
    )
}

export default Hero