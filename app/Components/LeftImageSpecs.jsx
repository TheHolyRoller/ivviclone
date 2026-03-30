import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import it from '../Styles/LeftImageSpecs.module.css';



function LeftImageSpecs({ 
  imageSrc, 
  imageAlt = 'feature image', 
  heading = '', 
  text = '', 
  linkText = '', 
  linkHref = '' 
}) {
  return (
    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

        <div className={it.imageContainer}>
          <Image 
            className={it.mainImage} 
            src={imageSrc} 
            alt={imageAlt} 
            quality={100} 
            loading='lazy' 
          />
        </div>

        <div className={it.textContainer}>
          {heading && <h2 className={it.mainHeading}>{heading}</h2>}

          {text && <p className={it.supportingText}>{text}</p>}

          {linkText && linkHref && (
            <Link href={linkHref}>
              <div className={it.linkStyle}>{linkText}</div>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}

export default LeftImageSpecs;
