import { Form, Input, Button, DatePicker, Card } from 'antd';
import { useMemo } from 'react';

interface Props {
  title?: string;
  name: string;
  fieldList?: any[];
}

const FormComponent: React.FC<Props> = ({ title, fieldList, name }) => {
  const content = () => {
    const components = {
      input: Input,
      date: DatePicker,
      textArea: Input.TextArea,
    };

    return fieldList?.map((item) => {
      let Com = components.input;
      if (item.type && item.type in components) {
        Com = components[item.type];
      }
      return (
        <Form.Item
          label={item.label}
          name={[name, item.id]}
          key={[name, item.id].toString()}
          rules={[{ required: item.required }]}
        >
          <Com style={{ width: '100%' }} />
        </Form.Item>
      );
    });
  };

  return <Card title={title}>{content()}</Card>;
};

export default FormComponent;
