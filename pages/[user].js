import Layout from '../components/layout';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import { Spinner, ProgressBar, Button } from 'react-bootstrap';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserPage({}) {
  const router = useRouter();
  const { data, error } = useSwr(`/api/${router.query.user}`, fetcher);
  const now = data
    ? ((data.point.current * 100) / data.point.total).toFixed(10)
    : 0;

  return (
    <Layout>
      <div style={{ textAlign: 'center', fontSize: '39px' }}>
        {error ? (
          <div>존재하지 않는 사용자입니다.</div>
        ) : !data ? (
          <Spinner animation="border" variant="secondary" />
        ) : (
          <>
            <ProgressBar animated now={now} />
            <img src={data.point.avatar} style={{ margin: 'auto' }} />
            <br />
            <b>{data.user}</b>
            <sub style={{ bottom: '0' }}>(Lv.{data.point.level})</sub> 님의
            만렙까지 경험치 달성율은 <b style={{ color: 'hotpink' }}>{now} %</b>{' '}
            입니다.
            <br />
            <Button
              size="sm"
              variant="outline-secondary"
              href="/"
              style={{ marginTop: '20px' }}
            >
              홈으로
            </Button>
          </>
        )}
      </div>
    </Layout>
  );
}
