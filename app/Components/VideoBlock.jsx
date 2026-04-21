import React from 'react'
import { IVVI_APP_URL } from './ivviAppUrl'
import v from '../Styles/VideoBlock.module.css'; 
import Link from 'next/link';
import LiteVimeoEmbed from './LiteVimeoEmbed';

function VideoBlock() {
  return (

    <section className={v.hero}>


    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

        <h2 className={v.heroMainHeader}>
        <span>

        Introducing ivvi Notes
        </span>

        </h2>

        <p  className={v.heroSupportingText}>

          We understand these challenges, so we built ivvi Notes for you with our revolutionary Speech-to-Map™ technology. As you  listen, ivvi Notes transcribes the lecture and transforms it into a visual mind map with keywords and images. ivvi Notes is the ultimate solution for visual thinkers.
        </p>

        <Link
          className={v.heroCTAButton}
          href={IVVI_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try ivvi Notes now
        </Link>

    </div>

    <div className={v.heroLaptopImageContainer}>

    <figure className={v.videoContainer}>

  <LiteVimeoEmbed
    className={v.mainVideoFrame}
    videoId="1007634251"
    title="ivvi Demo Video 30s"
  />

  
</figure>


    </div>
    </section>
    </section>


)
}

export default VideoBlock