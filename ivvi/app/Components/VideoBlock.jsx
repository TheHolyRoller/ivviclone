import React from 'react'
import v from '../Styles/VideoBlock.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/videoBackground.jpg'; 


function VideoBlock() {
  return (

    <section className={v.hero}>


    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      

        <h1 className={v.heroMainHeader}>
        <span>

        Introducing ivvi Notes
        </span>


        

        </h1>

        <article  className={v.heroSupportingText}>

          We understand these challenges, so we built ivvi Notes for you with our revolutionary Speech-to-Map™ technology. As you  listen, ivvi Notes transcribes the lecture and transforms it into a visual mind map with keywords and images. ivvi Notes is the ultimate solution for visual thinkers.
        </article>

        <button className={v.heroCTAButton}>
          <Link className={v.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button>

    </div>

    <div className={v.heroLaptopImageContainer}>

    {/* style='background-image: url("https://i.vimeocdn.com/video/1924540620-a71b0966e2994e5812bd5db761e7f475ec641b7c7132050df9e787d775180e8e-d?mw=1300&mh=731&q=70"); */}
    <figure style={{ position: "relative", paddingBottom: "56.25%",width: "714px", height: "470px", maxHeight: '470px',overflow: 'hidden', height: 0,  }}>

    <Image className={v.videoBackground} src={background} alt="video background" quality={100} loading='lazy'/> 
  {/* <iframe
    src="https://vimeo.com/1007634251?fl=pl&fe=sh"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "714px",
      height: "470px",
    }}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="ivvi Demo Video 30s"
  /> */}
</figure>


    </div>
    </section>
    </section>


)
}

export default VideoBlock