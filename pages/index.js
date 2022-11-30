import { Navigation } from '../components/Navigation'
import { SliceZone, PrismicRichText } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, menu }) => {
  return <><Navigation navigation={menu} /><PrismicRichText field={page.data.title} /><SliceZone slices={page.data.slices} components={components} /></>
}


export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  const menu = await client.getByUID('navigation', 'navigation')

  return {
    props: {
      page,
      menu
    },
  }
}
