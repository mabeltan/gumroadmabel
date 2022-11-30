import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ImageLeftContentRight = ({ slice }) => (
  <section>
    <div className='ImageLeft'>
      { slice.variation !== 'noImage' ? <img className='Image' src={slice.primary.imagefield.url} alt={slice.primary.imagefield.alt} /> : undefined}
    </div>
    <div className='ContentRight'>
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
    </div>
    {slice.va}
    <style jsx>{`
        section {
          width: 100%;
          margin: 0 0;
          text-align: center;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
        .title {
          color: #8592e0;
        }
        .ImageLeft {
          aspect-ratio: 1 / 1;
        }
        .Image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ContentRight {
          place-self: center;
          padding: 1em 2em;
        }

        @media only screen and (max-width: 600px) {
          section {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
        }
    `}</style>
  </section>
)

export default ImageLeftContentRight