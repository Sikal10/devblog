import Title from "./Title";

const About = () => {
    return (
        <>
            <Title title={"About DevSpace"} />

            <h1 className={"text-4xl border-b-4 pb-5 font-bold"}>About</h1>

            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className={"text-2xl mb-5"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Sikal's Blog
                </h3>

                <p className={"mb-3"}>This is a blog built with Next.js and Markdown</p>

                <p className={"font-bold"}>Version 1.0.0</p>
            </div>
        </>
    );
};

export default About;