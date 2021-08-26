import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

const Post = ({slug, frontmatter, compact}) => {
    return (
        <div className={"w-full border px-10 py-6 bg-white rounded-lg mt-6 shadow-md"}>

            {!compact && <Image src={frontmatter.cover_image} alt={""} width={600} height={420} className={"mb-4 rounded"}/>}

            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">{frontmatter.date}</span>
               <CategoryLabel>{frontmatter.category}</CategoryLabel>
            </div>

            <div className={"mt-2"}>
                <Link href={`/blog/${slug}`}><a className={"text-2xl text-gray-700 font-bold hover:underline"}>{frontmatter.title}</a></Link>
                <p className={"text-gray-600 mt-2"}>{frontmatter.excerpt}</p>
            </div>

            {!compact && <div className={"flex justify-between items-center mt-6"}>
                <Link href={`/blog/${slug}`}>
                    <a className={"text-gray-900 hover:text-blue-600"}>Read More</a>
                </Link>
                <div className="flex items-center">
                    <img src={frontmatter.author_image} className={"mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"} alt=""/>
                </div>
            </div>}

        </div>
    );
};

export default Post;