import { SliceZone, PrismicRichText } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Blog = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />

}


export default Blog

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    
    const client = createClient()
    const pages = await client.getAllByType("generic_page");
  
    // Get the paths we want to pre-render based on posts
    const paths = pages.map((page) => ({
      params: { uid: page.uid },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params, previewData }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const client = createClient({previewData})
    const page = await client.getByUID('generic_page', params.uid)
    // Pass post data to the page via props
    return { props: {page} }
}

