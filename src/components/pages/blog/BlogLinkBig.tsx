import Link from "next/link";

const BlogLinkBig = ({
  linkText,
  link,
  className,
}: {
  linkText: string;
  link: string;
  className?: string;
}) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center blog-link ${className}`}
    >
      <div className="blog-link__content">
        <span className="blog-link__content__text textL">{linkText}</span>
      </div>
      <Link href={`${link}`} className="blog-link__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="40"
          viewBox="0 0 78 40"
          fill="none"
        >
          <path
            d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
            fill="white"
          />
          <path
            d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default BlogLinkBig;
