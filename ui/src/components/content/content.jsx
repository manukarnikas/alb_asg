import { useState } from "react";
import { Layout, Input, Button, Space, List, Typography } from "antd";
import "./content.css";

const { Content } = Layout;

const { TextArea } = Input;

const ContentComponent = (props) => {
  const { listData, addListItem } = props;

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
        placeholder="Enter text to publish to SQS"
        maxLength={100}
      />
      <br />
      <br />
      <Space size="middle" direction="vertical">
        <Space size="small" direction="horizontal">
          <Button
            type="primary"
            disabled={!text?.length}
            onClick={() => addListItem(text)}
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
        <List
          className="list-container"
          header={<div>Tasks</div>}
          bordered
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item?.task}
            </List.Item>
          )}
        />
      </Space>
    </Content>
  );
};

export default ContentComponent;
