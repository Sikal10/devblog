import Home from "../../../components/Home";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {getPosts} from "../../../lib/posts";

export default function CategoryBlogPage({posts, categoryName, categories}) {
    return (
        <>
            <Home posts={posts} categoryName={categoryName} categories={categories} />
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const categories = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), "utf-8");

        const {data:frontmatter} = matter(markdownWithMeta);

        return frontmatter.category.toLowerCase()
    });

    const paths = categories.map(category => ({
        params: {category_name: category}
    }))


    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {category_name}}) => {
    const posts = getPosts();
    const categoryPosts = posts.filter(post => post.frontmatter.category.toLowerCase() === category_name)

    //get categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category);

    const uniqueCategories = [...new Set(categories)];


    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
            categories: uniqueCategories
        }
    }

}
