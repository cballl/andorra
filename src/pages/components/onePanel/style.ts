import styled from "styled-components";

const Root = styled.div`
  .cart-index {
    display: flex;
  }

  .Cart {
      margin: 10px 10px 10px 10px;
  }
  
  .Cart:hover{
    box-shadow: 1px 1px 3px 3px gray;
  }

  .p2{
    font-size: 30px;
    color: gray;
  }
  
  .twoCart{
    display: flex;
  }

  .cart-item{
    display: flex;
  }
  
  .cart-item-index{
    background-color: #ffffff;
    width: 126px;
    height: 100px;
    margin: 10px 10px 10px 12px;
    border-radius: 20px;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  
  .cart-item-index:hover{
    box-shadow: 1px 1px 2px 2px gray;
  }
  
  .cart-sum{
    display: flex;
  }
  
  .cart-sum-left{
    background-color: #ffffff;
    width: 50%;
    height: 200px;
    margin: 10px 10px 10px 12px;
    border-radius: 20px;
  }
  
  .cart-sum-left-1{
    height: 70px;
    border-bottom: 1px solid #e4e7ed;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-items: center;
    align-items: center;
  }

  .little-cart{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-items: center;
    padding-top: 20px;
    //align-items: center;
    //margin-top: 4%;  
  }
  
  .little-cart-bak{
    width: 110px;
    height: 80px;
    background-color: #e4e7ed;
    border-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
    color: black;
  }

  .little-cart-bak:hover{
    box-shadow: 1px 1px 2px 2px gray;
  }
  
  
  
  
`


export {
    Root
}