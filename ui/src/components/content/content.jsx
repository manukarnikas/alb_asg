import { useState } from "react";
import { Layout, Input, Button, Space, List, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./content.css";

const { Content } = Layout;

const { TextArea } = Input;

const ContentComponent = (props) => {
  const { listData, addListItem, deleteListItem } = props;

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <Content className="content">
      <TextArea
        rows={4}
        value={text}
        onChange={(e) => onChange(e)}
        placeholder="Enter task"
        maxLength={100}
      />
      <br />
      <br />

      <Space size="small" direction="horizontal">
        <Button
          type="primary"
          disabled={!text?.length}
          onClick={() => {
            addListItem(text);
            clearText();
          }}
        >
          Add
        </Button>
        <Button
          type="primary"
          danger
          disabled={!text?.length}
          onClick={() => clearText()}
        >
          Clear
        </Button>
      </Space>

      <br />
      <br />

      <List
        header={<div>Tasks</div>}
        bordered
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item?.task}</Typography.Text>
            <DeleteOutlined
              className="icon"
              onClick={() => deleteListItem(item?._id)}
            />
          </List.Item>
        )}
      />
    </Content>
  );
};

export default ContentComponent;
