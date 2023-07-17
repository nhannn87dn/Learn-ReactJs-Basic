# Session 12

## AntDesign

Cài đặt: https://ant.design/docs/react/introduce

```bash
npm install antd
yarn add antd
```

Cách dùng:

```js
/*
Dùng Component nào thì destructuring ra
*/
import { Button, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
export default App;
```

***

##  Material-UI

Cài đặt: https://mui.com/material-ui/getting-started/installation/


```bash
npm install @mui/material @emotion/react @emotion/styled

yarn add @mui/material @emotion/react @emotion/styled
```
Xem chi tiết thêm ở link trên


Cách dùng:

```js
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

```


## Chakra UI

https://chakra-ui.com/