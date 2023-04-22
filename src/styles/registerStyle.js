import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color:white; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);

`;

export const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor:pointer;
`;
export const Tag= styled.div`
 color: white;
 font-size: 2rem;
 cursor:pointer;
`;
export const Headline= styled.div`
 color: white;
 font-size: 4rem;
 margin-bottom: 2rem;
`;
export const Background= styled.div`
 background-image: url('https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg');
 background-size: cover;
`;