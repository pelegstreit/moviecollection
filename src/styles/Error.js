import styled from "styled-components";
export const Background= styled.div`
background-image: url('https://static3.depositphotos.com/1002881/151/i/450/depositphotos_1519030-stock-photo-error-404.jpg');
background-size: cover;
height:61rem;
`;
export const Headline = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  font-size: 5rem 
  `;
export const Maindiv = styled.div`
position: absolute;
  /* min-height: 200px; */
  width: 600px;
  border: 1px solid blue;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
 justify-content: center; 
  align-items: center;
  margin-top: 10rem;
  background:white;
  margin-left:calc(50% - 300px);
  background-color: aqua;
  /* margin-right:50%; */
`;
