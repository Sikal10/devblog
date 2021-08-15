import Head from "next/head";

const Title = ({title, keywords, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={"keywords"} content={keywords}/>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};

Title.defaultProps = {
    title: "Welcome to DevSpace",
    keywords: "development, coding, programming",
    description: "The best info and news in programming."
}

export default Title;