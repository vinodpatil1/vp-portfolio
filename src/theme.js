import { extendTheme } from "@chakra-ui/react";


const myThemes = extendTheme({
  colors: {
    themcolor: {
      100: "#C9F31D",
      200: "#1F1F1F",
      300: "#131313",
      400: "#070707",
      500: "hsl(0, 0%, 40%)",
      600: "hsl(0, 0%, 60%)",
      700: "hsl(0, 0%, 64%)",
      800: "hsl(0, 0%, 35%)",
      900: "hsl(0, 0%, 100%)",
      1000: "#333333",
      border_100: "hsl(0, 0%, 20%)",
    },
  },
  fontSizes :{
      sa : "13px",
      s0 : "15px",
      s1 : "16px",
      s2 : "18px",
      s3 : "20px",
      s4 : "22px",
      s5 : "24px",
      s6 : "45px",
      s7 : "46px",
      s8 : "36px",
      s9 : "40px",
      s10 : "32px",
      s11 : "55px",

  },

     

 fontWeights :{
  weight :{
      Light : "300",
      Regular: "400",
      Medium : "500",
      SemiBold : "600",
      Bold :"700",
  }
},
buttons :{
  colormode :{
      primary : "#C9F31D",
      Regular: "#fff",
     
  }
}
})



export default myThemes;