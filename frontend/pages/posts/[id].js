import { getAllPostIds, getPostData } from "../../lib/posts"

export default function Post({postData}) {
    return (
        <div>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
  }