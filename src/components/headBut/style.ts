import styled from "styled-components";


const Root = styled.div`
  background-color: #ffffff;

  .head-item {
    display: flex;
    //justify-items: self-end;
  }

  .item {
    display: flex;
    margin-top: 10px;
    justify-items: center;
    align-items: center;

    span {
      width: 120px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .but-item {
    margin-left: 20%;
    margin-top: 10px;

    Button {
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  .two-item-but {
    margin: 10px;

    Button {
      margin: 5px 5px 5px 5px;
    }
  }



`

const TableRoot = styled.div`
  .item-root {
    color: #606266;
    display: grid;
    grid-template-columns: repeat(2, 20% 1fr);
  }

  .item-root-cli {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }

  .item-data-font {
    display: flex;
  }
`

const PageRoot = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  //background-color: red;
`


export {
    Root,
    TableRoot,
    PageRoot
}