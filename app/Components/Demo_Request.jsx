import React from 'react';
import ti from '../Styles/DemoRequest.module.css';
import Link from 'next/link';
import Image from 'next/image';

function DemoRequest({
  mainHeading,
  supportingHeadline,
  bulletPoints = [],
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className={ti.featureMainContainer}>
      <div className={ti.gridContainer}>
        <div className={ti.textContainer}>
          <h2 className={ti.mainHeading}>{mainHeading}</h2>

          {supportingHeadline && (
            <div className={ti.supportingHeadlineContainer}>
              <div className={ti.supportingHeadline}>{supportingHeadline}</div>
            </div>
          )}

          {bulletPoints.length > 0 && (
            <div className={ti.bulletPointListContainer}>
              <ul className={ti.bulletPointList}>
                {bulletPoints.map((point, index) => (
                  <li key={index} className={ti.bulletPointListItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {ctaText && ctaLink && (
            <Link className={ti.ctaLink} href={ctaLink}>
              <button className={ti.cta}>{ctaText}</button>
            </Link>
          )}
        </div>

        {imageSrc && (
          <div className={ti.imageContainer}>
            <Image
              className={ti.mainImage}
              src={imageSrc}
              alt={imageAlt || 'image'}
              quality={100}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default DemoRequest;
