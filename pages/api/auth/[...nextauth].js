import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions = {
    session : {strategy :"jwt"} ,
    providers : [
        CredentialProvider({
            name : "credentials" ,
            Credential : {
                email : {
                    label : "Email",
                    type : "text" ,
                    placeholder : " Enter your email",
                },
                password :{
                    label : "Password" ,
                    type : "password"
                },
                async authorize(credentials , req){
                    return { name : "jamal"}
                }
            },
            
        })
    ]
};

export default NextAuth(authOptions);

