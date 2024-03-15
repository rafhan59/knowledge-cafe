

const Blog = ({blog}) => {
    const {title, cover} = blog
    console.log(blog)
    return (
        <div>
            <img className="w-full" src={cover} alt={`${title}`} />
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

export default Blog;