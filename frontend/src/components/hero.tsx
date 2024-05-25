import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <div className="container flex justify-center items-center h-screen relative">
            <video
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/bg-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 relative z-10">
                <div>
                    <h1 className="text-white lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-shadow-glow">
                        A smarter way to show your webapps to the world.
                    </h1>

                    <div className="flex flex-col items-start mt-10">
                        <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl dark:text-gray-400">
                            Experience hassle-free deployments with just one click. <br />Focus on what matters most
                            – building amazing products – while we handle the rest.
                        </p>
                        <Link
                            className="bg-gray-100 text-black py-2 px-4 rounded-xl mt-5 hover:bg-white hover:shadow-white hover:shadow-sm cursor-pointer"
                            to="landing"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Get Started
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}
