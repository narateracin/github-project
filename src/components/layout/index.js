import React from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import * as S from './styled';

function Layout({ children }) {
  return (
    <S.WrapperLayout>
        <Header/>
        {useGithub.loading ? <p>Loading</p> : <>{children}</>}
    </S.WrapperLayout>
  )
}

export default Layout