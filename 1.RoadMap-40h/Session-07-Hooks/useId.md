# useId

useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

Doc: <https://react.dev/reference/react/useId>

```js
import { useId } from 'react';
const id = useId()
```


```js
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

```