import React, { ChangeEvent, FormEvent, useState } from 'react';

function TestForm() {
  const [inputs, setInputs] = useState({
    userName: '',
    passwords: '',
    gender: '',
    favoriteFruit: '',
    acceptTerms: false,
    comments: '',
  });

  console.log('inputs',inputs);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'checkbox') {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setInputs((prevState) => ({ ...prevState, [target.name]: target.checked }));
    } else {
      const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement; // Kiểm tra kiểu
      setInputs((prevState) => ({ ...prevState, [target.name]: target.value }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Current Values:', inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" name="userName" value={inputs.userName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Enter your password:
        <input type="password" name="passwords" value={inputs.passwords} onChange={handleChange} />
      </label>
      <br />
      <label>
        Select your gender:
        <select name="gender" value={inputs.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Select your favorite fruit:
        <input
          type="radio"
          name="favoriteFruit"
          value="apple"
          checked={inputs.favoriteFruit === 'apple'}
          onChange={handleChange}
        />
        Apple
        <input
          type="radio"
          name="favoriteFruit"
          value="banana"
          checked={inputs.favoriteFruit === 'banana'}
          onChange={handleChange}
        />
        Banana
        <input
          type="radio"
          name="favoriteFruit"
          value="orange"
          checked={inputs.favoriteFruit === 'orange'}
          onChange={handleChange}
        />
        Orange
      </label>
      <br />
      <label>
        Accept terms and conditions:
        <input
          type="checkbox"
          name="acceptTerms"
          checked={inputs.acceptTerms}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your comments:
        <textarea name="comments" value={inputs.comments} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;