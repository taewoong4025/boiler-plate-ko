import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    //옵션의 종류
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능한 페이지
    //false => 로그인한 유저는 출입이 불가능한 페이지
    
    function AuthenticationCheck(props) {
        let navigate = useNavigate();
        const dispacth = useDispatch();
      
        useEffect(() => { // 페이지에 접근할 때마다 실행되서 권한을 확인할 수 있도록 함.

                dispacth(auth()).then(response => { // auth 액션함수가 반환하는 값(=reducer에게 전달될 값)
                    //백엔드에서 처리해서 가져온 정보
                    console.log(response)

                    //로그인 하지 않은 상태
                    if (!response.payload.isAuth) {
                        if (option) {
                            navigate('/login');
                        }
                    } else {
                        //로그인 한 상태
                        if (adminRoute && !response.payload.isAdmin) {
                            navigate('/');
                        } else {
                            if (option === false) {
                                navigate('/');
                            }
                        }
                    }

                })

            }
            , [])
        return (
            <SpecificComponent />
        )

    }


    return <AuthenticationCheck />
   
}