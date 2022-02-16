import Image from "next/image"

const MDXComponents = {
  img: props => <Image alt={props.alt} {...props} />,
  Image
}

export default MDXComponents
