import React from 'react';
import Title from "./Title";
import Post from "./Post";
import Pagination from "./Pagination";
import CategoryList from "./CategoryList";

const Blog = ({posts, numPages, currentPage, categories}) => {
    return (
        <>
            <Title title={"Blogs"} />

            <div className="flex justify-between">
                <div className="w-3/4 mr-10">
                    <h1 className={"text-4xl border-b-4 p-5 font-bold"}>Blogs</h1>

                    <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-5"}>{posts.map(({slug, frontmatter}, index) => <Post key={index} slug={slug} frontmatter={frontmatter} />)}</div>

                    <Pagination currentPage={currentPage} numPages={numPages}/>
                </div>

                <div className="w-1/4">
                    <CategoryList categories={categories} />
                </div>
            </div>

        </>
    );
};

export default Blog;