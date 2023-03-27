import Image from 'next/image'
import Link from 'next/link'

export const Nav = () => {
  return(
    <>
      <header>
        <h1>
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="로고"
              width={401}
              height={242}
              priority
            />
          </Link>
        </h1>
      </header>
    </>
  )
}