import styled from "styled-components";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import React, {useState} from "react";
import { InstaContext } from "../../App";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 5% auto;
  background-color: #ffffffdd;
  padding: 20px;
  border-radius: 5px;
  border: 7px solid gray;
`;

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
  }
`;

export const Login = () => {
  const state = React.useContext(InstaContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onClickHomeHandler = () => {
    if (pass && user) {
      state.meuDispatch({ type: "change_current_page", payload: "home" });
      state.meuDispatch({ type: "add_user", payload: { username: user } });
    }
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };

  const handleChangePass = (event) => {
    setPass(event.currentTarget.value);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text color="black">Login</Text>
      </TitleWrapper>
      <Form>
        <InputWrapper>
          <input
            type="text"
            placeholder="Digite o usuário"
            onChange={handleChangeUser}
          />
        </InputWrapper>
        <InputWrapper>
          <input
            type="password"
            onChange={handleChangePass}
            value={pass}
            placeholder="Digite a senha"
          />
        </InputWrapper>
      </Form>
      <Button onClick={onClickHomeHandler}>Ir para a Home</Button>
    </Wrapper>
  );
};
