import App from "next/app"
import  "../styles/global.css"

export  default function  DemoApp({Component  , pageProps , example }){
           
    return (
    <>
    <Component {...pageProps} />
    </>
    )
}

DemoApp.getInitialProps = async(context)=>{
    const ctx = await App.getInitialProps(context);
    return {  ...ctx ,example:'data three' }
}


