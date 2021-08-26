import Title from "./Title";
import Link from "next/link";
import Post from "./Post";
import {useRouter} from "next/router";
import CategoryList from "./CategoryList";

const Home = ({posts, categoryName, categories}) => {
    const router = useRouter();
    const path = router.pathname;

    return (
        <>
            <Title />

            {path === "/" ? <h1 className={"text-4xl border-b-4 p-5 font-bold"}>Latest Posts</h1> : <h1 className={"text-4xl border-b-4 p-5 font-bold"}>Posts in {categoryName}</h1>}

            {path === "/" && <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4"}>{posts.map(({slug, frontmatter}, index) => <Post key={index} slug={slug} frontmatter={frontmatter} />)}</div>}

            {path !== "/" && <div className="flex justify-between">
                <div className="w-3/4 mr-10">
                    <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-5"}>{posts.map(({slug, frontmatter}, index) => <Post key={index} slug={slug} frontmatter={frontmatter} />)}</div>
                </div>

                <div className="w-1/4">
                    <CategoryList categories={categories} />
                </div>
            </div>}


            {path === "/" &&  <Link href={"/blog"}>
                <a className={"block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 " +
                "transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full"}
                >
                    All Posts
                </a>
            </Link>}
        </>
    );
};

export default Home;