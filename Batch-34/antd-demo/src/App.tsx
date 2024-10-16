import { Button, Space } from 'antd';

function App() {

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </Space>
    </>
  )
}

export default App
