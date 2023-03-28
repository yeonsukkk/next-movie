import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return(
    <>
      <footer>
        <h4>
          <Image 
            src="/logo.webp"
            alt="로고"
            width={100}
            height={80}
            unoptimized={true}
          />
        </h4>
        <div>
          <dl>
            <dt>통신판매업신고번호 : </dt>
            <dd>제2023-서울종로-0000호</dd>
          </dl>
          <dl>
            <dt>전화번호 : </dt>
            <dd>
              <Link href="tel:080-000-0000">080-000-0000</Link>
            </dd>
          </dl>
          <dl>
            <dt>대표 : </dt>
            <dd>강아무개</dd>
          </dl>
          <dl>
            <dt>이메일 주소 : </dt>
            <dd>
              <Link href="mailto:mMovie@moive.co.kr">mMovie@moive.co.kr</Link>
            </dd>
          </dl>
          <dl>
            <dt>주소 : </dt>
            <dd>대한민국 서울특별시 ㅁㅁ구 남부순환로 00, A동 21층 우편번호 00000</dd>
          </dl>
          <dl>
            <dt>사업자등록번호 : </dt>
            <dd>000-00-00000</dd>
          </dl>
          <p>
            <small>Copyright 2023.M movie.All rights reserved.</small>
          </p>
        </div>
      </footer>
    </>
  )
}