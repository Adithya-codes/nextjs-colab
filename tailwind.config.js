module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "320px",
      xs: "411px",
      sm: "576px",
      md: "769px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },

    container: {
      screens: {
        xxs: "100%",
        xs: "100%",
        sm: "100%",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },

      center: true,
    },

    textFillColor: (theme) => theme("transparent"),
    textStrokeWidth: (theme) => theme("3px"),

    extend: {
      colors: {
        footer: "#3e3e3e",
        "sidebar-text": "#818181",
        sidebar: "#111",
        transparent: "transparent",
        h3: "#17153b",
        btn: "#262261",
        yellowBtn: "#ffff00",
        clipColor1: "#f0e350",
        clipColor2: "#e52f7b",
        primary: "#fff200",
        'navy-blue':"#262261",
        pink:'#de3871'
      },

      fontSize: {
        h1: "4.25rem",
        4.125:'4.125rem',
        globe: "5.625rem",
        0.93:'0.93rem',
        1:'1rem',
        1.1875:'1.1875rem',
        1.19:'1.19rem',
        1.2: "1.2rem",
        1.4:'1.4rem',
        1.45:'1.45rem',
        1.3: "1.3rem",
        1.6: "1.6rem",
        1.7:'1.7rem',
        1.8:'1.8rem',
        1.75:'1.75rem',
        2: "2rem",
        2.1:'2.1rem',
        2.3:'2.3rem',
        0.9: "0.9rem",
        2.5: "2.5rem",
        6.8: "6.8rem",
        5: "5rem",
        5.2: "5.2rem",
        6.2: "6.2rem",
        7.2: "7.2rem",
        7.81:'7.81rem',
        8.4: "8.4rem",
        10: "10rem",
        2.8: "2.8rem",
        3.12: "3.12rem",
        3.38:'3.38rem',
        3.43: "3.43rem",
        3.8: "3.8rem",
        5.3: "5.3rem",
        2.8: "2.8rem",
      },
      maxWidth: {
        33.3: "33.3%",
        50: "50%",
        58.3: "58.3%",
        41: "41.6%",
        81: "81%",
        66.6: "66.6%",
        70.6: "70.6%",
        83.3: "83.3%",
        115:'115%',
        12.5: "12.5rem",
        8: "8rem",
        9.3:'9.375rem',
        15:'15rem',
        80: "80rem",
      },

      minWidth: {
        33.3: "33.3%",
        58: "58%",

        50: "50%",
        41: "41",
        "30v": "30vw",
      },

      minHeight: {
        1: "1px",
        43.75: "43.75rem",
      },

      inset: {
        21: "21%",
        13.5:'13.5%',
        45:'45%',
        48:'48%'
      },

      height: {
        25: "24rem",
        40: "40rem",
        48:'48rem',
        49:"49rem",
        50: "50rem",
        51:'51rem',
        45: "45rem",
        53: "53rem",
        55:'55rem',
        30: "28rem",
        93.5: "93.5vh",
        90: "90vh",
        33: "33rem",
        35: "35rem",
        "100v": "100vh",
        "60v": "60vh",
        110: "110%",
      },

      width: {
       
        21: "21rem",
        28: "28rem",
        32.5:'32.5rem',
        35:'35%',
        40.3:'40.3%',
        41.6: "41.6%",
        45:'45%',
        53.1:'53.125rem',
        57.5:'57.5rem',
        59.3:'59.3rem',
        58.3:'58.3%',
        65:'65%',
        70.3: "70.3%",
        80:'80%',
        75: "75rem",
        22.5: "22.5rem",
        103:'103%',
      },

      fontFamily: {
        display: ['"Proxima Nova"', "sans-serif"],
        smallText: ["Roboto", "sans-serif"],
        paragraph: ['"Proxima Regular"', "sans-serif"],
        button:["Rubik","sans-serif"]
      },

      lineHeight: {
        0.9: "0.9",
        1.65: "1.65",
        1.2: "1.2",
        0.8: "0.8",
        1.4: "1.4",
        1: "1",
      },

      spacing: {
        75: "75rem",
      },
      backgroundSize: {
        60: "60%",
        100: "100%",
        90: "90%",
      },

      backgroundPosition: {
        250: "-250%",
        500: "500%",
        "top-17": "371% 2rem",
      },

      margin: {
        offset: "8.3%",
        '10%':'10%',
        50: "50%",
        25: "25%",
        23:'7rem',
        22:'22%',
        24:'24%',
        27:'27%',
        33:'33%'
      },

      padding: {
        "40%": "40%",
        0.0625: "0.0625rem",
        0.625:'0.625rem',
        3.125: "3.125rem",
      },

      gradientColorStops: (theme) => ({
        primary: "#fff200",
        secondary: "#fdba12",
        third: "#dc1e45",
        fourth: "#fff200",
      }),

      backgroundImage: (theme) => ({
        "grated-pattern":
          "url('/images/svg/GratedBackground.svg'), linear-gradient(180deg, #f0e530, #e52f7b) ",
        globe: "url('/images/globe.png')",
        unicorn: "url('/images/unicorn.png')",
        "hand-left": "url('/images/left-hand.png')",
        "hand-right": "url('/images/right-hand.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};
