import Home from "../components/Home";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function HomePage({posts}) {
    console.log(posts);
    return (
        <>
            <Home/>
        </>
    )
}

export const getStaticProps = () => {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map(filename => {
        const slug = filename.replace(".md", "");

        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), "utf-8");

        const {data:frontmatter} = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        };
    });

    console.log(posts)


    return {
        props: {
            posts
        }
    }

}
