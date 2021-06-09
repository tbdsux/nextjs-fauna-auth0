/*
    Just a Link wrapper button.
*/

import { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { href, className, children } = props;

  return (
    <Link href={href}>
      <a {...props} className={className}>
        {children}
      </a>
    </Link>
  );
};
