import Home from "../components/Home";
import {getPosts} from "../lib/posts";

export default function HomePage({posts}) {
    return (
        <>
            <Home posts={posts}/>
        </>
    )
}

export const getStaticProps = () => {
    return {props: {posts: getPosts().slice(0, 6)}}
}
