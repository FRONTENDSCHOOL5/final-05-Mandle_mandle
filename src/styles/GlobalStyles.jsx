import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
	
    ${reset}

 :root{
	--main-color: #036635 ;
	--sub-color:#B1D4C3;
	--border-color:#C4C4C4;
    --font-color: #000000;
    --sub-font-color: #767676;;
    --border-color: #DBDBDB ; 
    --background-color: #F2F2F2;
	--font-xl : 24px;
	--font-lg : 16px;
	--font-md : 14px;
	--font-sm : 12px;
  }

    :root {
    --font--bold: 700;
    --font--semibold: 500;
    --font-regular: 400;;
  }

  ${reset}


  
  body {
      font-family: 'SpoqaHanSansNeo-Regular';
      font-size: 10px;
  }

  
  
  *{
      box-sizing: border-box;
  
  }

	a{
		text-decoration: none;
		color: inherit;
	}
	html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
	a, dl, dt, dd, ol, ul, li, form, label, table, input,button{
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
    font-family: 'SpoqaHanSansNeo-Regular';
    box-sizing: border-box;
	}

	ol, ul{
		list-style: none;
	}
	
  input {
    all: unset;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
