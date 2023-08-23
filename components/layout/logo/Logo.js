import Image from "next/image";
import Link from "next/link";

import classes from "./logo.module.scss";

function Logo() {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <Image
          src="/images/RealPros-logos_transparent.png"
          alt="Website Logo"
          priority={true}
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}

export default Logo;
