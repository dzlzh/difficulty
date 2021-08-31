// import { Form } from 'antd';
import Form from './Form';

import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>医教合作</h1>
      <Form />
    </div>
  );
}
