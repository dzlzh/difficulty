import { Form, Input, Button, DatePicker } from 'antd';
import { useMemo } from 'react';

export default function FormComponent() {
  const fieldList = [
    {
      label: '姓名',
      id: 'name',
    },
    {
      label: '性别',
      id: 'sex',
    },
    {
      label: '出生日期',
      id: 'birthday',
      type: 'date',
    },
    {
      label: '民族',
      id: 'minzu',
      // type: 'date',
    },
    {
      label: '诊断',
      id: 'zhenduan',
      // type: 'date',
    },
    {
      label: '住址',
      id: 'address',
    },
    {
      label: '既往经历',
      id: '00099',
    },
    {
      label: '班级',
      id: 'class',
    },
    {
      label: '其他（备注）',
      id: 'memo',
    },
  ];

  const content = useMemo(() => {
    const components = {
      input: Input,
      date: DatePicker,
    };

    return fieldList.map((item) => {
      let Com = components.input;
      if (item.type && item.type in components) {
        Com = components[item.type];
      }
      return (
        <Form.Item label={item.label} id={item.id}>
          <Com style={{ width: '100%' }} />
        </Form.Item>
      );
    });
  }, [fieldList]);

  return (
    <div>
      <div>儿童信息登记表</div>
      <Form labelCol={{ span: 4 }}>
        {content}
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </div>
  );
}
