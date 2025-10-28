// ud-ui-toolkit
import { Link as MUILink } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  history?: 'auto' | 'push' | 'replace';
}

const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const { children, href, onClick, history, ...rest } = props;

  const navigate = useNavigate();
  const handleLinkClick = React.useMemo(() => {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const url = new URL(event.currentTarget.href);
      navigate(url.pathname);
      onClick?.(event);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <MUILink ref={ref} href={href} {...rest} onClick={handleLinkClick}>
      {children}
    </MUILink>
  );
});

export default Link;