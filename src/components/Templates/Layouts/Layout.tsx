
import React, { ReactNode, useEffect, useState, useCallback, useRef  } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useCookies, withCookies } from 'react-cookie';
import SEO from './SEO';
import {darkTheme, lightTheme, ThemeType, Global, Common} from 'components/Templates/index';
import Link from 'next/link';
import MenuItem, {Item} from "components/Atoms/Convenience/MenuItem";
import MenuList from "components/Atoms/Convenience/MenuList";
import GotoTop from "components/Atoms/Convenience/GotoTop";
/**
 * 스타일링 코드
 */
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

type Props = {
    children?: ReactNode
    title?: string
};

const navList : Item[]=
    [
        {link:'/', name :'home'},
        {link:'/blog', name :'blog'},
        {link:'/service', name :'Service'},
        {link:'/about', name :'About'},
        {link:'/admin', name :'Admin'},
        {link:'/category2', name :'Category'}
    ];


/**
 * 레이아웃
 * @param Props
 * @returns
 */
function Layouts ({title, children} : Props){
    /**
     * 테마 상태값
     */
    const [cookies,setCookie, removeCookie] = useCookies(['theme']);
    // 초기 테마값은 쿠키에 값이 있는지 체크하고 없으면 디폴트 테마로 (OR연산 단축평가)
    const initTheme = cookies.theme || ThemeType.default
    const [theme, setTheme] = useState(initTheme);

    /**
     * theme 상태가 변경되면 쿠키도 변경
     */
    useEffect(() => {
        console.log(cookies.theme)
        setCookie('theme', theme)
    }, [theme]);

    /**
     * theme 상태를 변경한다.
     */
    const ToggleTheme = useCallback(
        () =>{
            (theme === ThemeType.dark)
                ?    setTheme(ThemeType.light)
                :    setTheme(ThemeType.dark)
        }, [theme] )

    // theme 상태값에 따른 테마 스타일을 get
    const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        // <CookiesProvider cookies ={cookies.theme}>
        <ThemeProvider theme={themeStyle}>
            <Global/>
            <Container>
                <SEO title = {title}/>
                <header>
                    <h1>header</h1>
                    <div className={"navigator"}>
                        <MenuList className={"hero-top-nav"} list={navList}/>
                        <div><button onClick={ToggleTheme}>테마스위치</button></div>
                    </div>
                    {/* <input type='text' ref={theme} /> */}
                    <div >현재 테마 : <span style={{color:'red'}}>{theme}</span></div>

                </header>
                <section>
                    <main>
                        {children}
                    </main>
                </section>
                <footer>
                    <h2>Footer</h2>
                </footer>
            </Container>
            <GotoTop />
            {/*<TopBtn onClick={goToTop}>Top</TopBtn>*/}
        </ThemeProvider>
        // </CookiesProvider>
    )
}
const TopBtn = styled.div`

  position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background-color: ${Common.palette.BLUE[8]}; color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;
`;
const goToTop = () =>{
    // 바로
    window.scrollTo(0, 0)
    // 부드럽게
    window.scroll({
        behavior:'smooth',
        top : 0,
        left : 0
    })
}


export default withCookies(Layouts);
