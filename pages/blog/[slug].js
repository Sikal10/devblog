import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostItem from "../../components/PostItem";


const PostPage = ({frontmatter, content, slug}) => {

    return (
        <>
            <PostItem content={content} slug={slug} frontmatter={frontmatter} />
        </>
    );
};

export default PostPage;

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
    const {data: frontmatter, content} = matter(markdownWithMeta);

    return {
        props: {frontmatter, content, slug}
    }
}
