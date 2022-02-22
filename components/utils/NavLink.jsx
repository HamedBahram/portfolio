import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ href, className, children, ...props }) => {
  const router = useRouter()
  const isMatch = href === router.asPath

  const classes = isMatch
    ? `${className} underline decoration-2 decoration-react-link underline-offset-8`
    : className

  return (
    <Link href={href} {...props}>
      <a className={classes}>{children}</a>
    </Link>
  )
}

export default NavLink
