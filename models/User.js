const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, // 공백 없애주는 역할
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role : {
        type:Number,
        default:0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{ // 토큰 유효기간
        type:Number
    }
})

// Schema를 모델로 감싸는 거 

const User = mongoose.model('User',userSchema)

// 다른 파일에서 쓰기 위해

module.exports = {User}

// 모델은 어플리케이션의 정보, 데이터를 나타냄.
// 스키마는 데이터의 구조, 그 표현법, 자료 간의 관계를 형식 언어로 정의한 것
// 데이터베이스 내에서 데이터가 어떤 구조로 저장되는지 나타냄.