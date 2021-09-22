import { Form, Button } from 'antd';
import useRequest from '@ahooksjs/use-request';
import FormComponent from './Form';
import { fieldList, guardianFieldList } from './config';

import styles from './index.less';

export default function IndexPage() {
  const { run: submit } = useRequest(
    (params) => {
      console.log('--提交的参数', params);
      // 提交接口
    },
    {
      manual: true,
    },
  );

  function onFinish(values: any) {
    console.log('==onFinish==', values);
    // TODO: 提交请求
    submit(values);
  }

  return (
    <div className={styles.container}>
      {/* 页面标题 */}
      <h1 className={styles.title}>医教合作</h1>

      <Form
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        validateMessages={{ required: '${label} 是必填项!' }}
      >
        <FormComponent
          name="child"
          title="儿童信息登记表"
          fieldList={fieldList}
        />
        <FormComponent
          name="guardian"
          title="监护人信息登记表"
          fieldList={guardianFieldList}
        />
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </div>
  );
}
