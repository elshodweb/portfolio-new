import MyLink from './components/Link/MyLink';
import styled from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styled.wrapper}>
      <h1 className={styled.title}>Not Found</h1>
      <p className={styled.message}>Could not find the requested resource</p>
      <p className={styled.link}>
        Go to <MyLink href="/" className={styled.link}>Home</MyLink>
      </p>
    </div>
  );
}
