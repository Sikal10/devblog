import CategoryLabel from "./CategoryLabel";
import Link from "next/link";
import Title from "./Title";
import marked from "marked";

const PostItem = ({slug, content, frontmatter}) => {
    const {title, date, excerpt, category, cover_image, author, author_image} = frontmatter;

    return (
        <>
            <Title title={title} />

            <Link href={"/blog"}>Go Back</Link>

            <div className="flex justify-between items-center mt-4">
                <h1 className="text-5xl mb-7">{title}</h1>
                <CategoryLabel>{category}</CategoryLabel>
            </div>

            <img src={cover_image} className={"w-full rounded"} alt=""/>

            <div className="flex justify-between items-center bg-gray-200 p-2 my-8">
                <div className={"flex items-center"}>
                    <img src={cover_image} className={"mx-4 w-10 h-10  object-cover rounded-full hidden sm:block"} alt=""/>
                    <h4>{author}</h4>
                </div>

                <div className={"mr-4"}>{date}</div>
            </div>

            <div className="blog-text mt-2">
                <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
            </div>

        </>

    );
};

export default PostItem;