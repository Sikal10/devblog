import fs from "fs";
import path from "path";
import Blog from "../../../components/Blog";
import {POST_PER_PAGE} from "../../../config"
import {getPosts} from "../../../lib/posts";

const BlogPage = ({posts, numPages, currentPage, categories}) => {
    return (
        <Blog posts={posts} numPages={numPages} currentPage={currentPage} categories={categories} />
    );
};

export default BlogPage;

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const numPages = Math.ceil(files.length / POST_PER_PAGE)

    let paths = [];

    for (let i = 1; i <= numPages; i++) {
        paths.push({
            params: {page_index: i.toString()}
        })
    }

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const page = parseInt((params && params.page_index) || 1);
    const files = fs.readdirSync(path.join('posts'));
    const posts = getPosts();

    //get categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category);

    const uniqueCategories = [...new Set(categories)];

    const numPages = Math.ceil(files.length / POST_PER_PAGE)
    const pageIndex = page - 1;
    const orderedPosts = posts.slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE);

    return {
        props: {
            posts: orderedPosts,
            numPages,
            currentPage: page,
            categories: uniqueCategories
        }
    }

}