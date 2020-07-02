import Router from 'next/router';
import { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default function Search() {
  const [user, setUser] = useState('');

  function handleChange(e) {
    setUser(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    Router.push(`/${user}`);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={user}
          onKeyPress={(e) => handleSubmit(e)}
          onChange={handleChange}
          aria-describedby="basic-addon1"
          placeholder="캐릭터 이름을 입력하세요"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleClick}>
            확인하기
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}
