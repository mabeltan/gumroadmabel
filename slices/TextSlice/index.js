import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const TextSlice = ({ slice }) => (
  <section>
    
  <PrismicRichText field={slice.primary.eyebrow} />
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    
  <PrismicLink  field={slice.primary.linkfield}><span >{ slice.primary.linklabel }</span></PrismicLink>

  

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default TextSlice