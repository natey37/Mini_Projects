/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        // position: "absolute",
        // top: "70%",
        // left: "50%",
        // msTransform: "translate(-50%,-50%)",
        display: 'inline-block',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: 'black',
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        borderRadius: '15px',
        boxShadow: `0 5px ${theme.palette.secondary.light}`,
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        '&:active': {
            backgroundColor: theme.palette.success.main,
            boxShadow: '0 5px #666',
            transform: 'translateY(4px)'
        },
    },
}))
// import { UserWarningContext } from "../../contexts/UserWarningContext";
// import { Link } from "react-router-dom";
// import ReturnMediaQuery from "../../functions/screenSizing/returnMediaQuery";

export default function WinningModal({ close, text }) {
    const classes = useStyles()
    // const [open, setOpen] = useState(true)
    //   let { handleWarning, warning } = React.useContext(UserWarningContext);
    //   const mediaType = ReturnMediaQuery() === "desktop" ? true : false;
    return (
        <div
            css={{
                position: "fixed" /* Sit on top of the page content */,
                // display: "none" /* Hidden by default */,
                width: "100%" /* Full width (cover the whole page) */,
                height: "100%" /* Full height (cover the whole page) */,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgb(0,0,0,0.5)" /* Black background with opacity */,
                zIndex: 100 /* Specify a stack order in case you're using a different order for other elements */,
                cursor: "pointer" /* Add a pointer on hover */,
            }}
        // onClick={() => setOpen(false)}
        >
            <div
                css={{
                    border: "solid 3px red",
                    height: "50%",
                    minHeight: 300,
                    width: '50%',
                    borderRadius: 20,
                    backgroundColor: "#FDC0FF",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    //   fontSize: mediaType ? "min(5vw, 35px)" : "min(7vw, 30px)",
                    color: "#D924FF",
                    transform: "translate(-50%,-50%)",
                    msTransform: "translate(-50%,-50%)",
                }}
            >
                <div
                    css={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        // backgroundColor: 'red'
                    }}
                >
                    <div
                    // css={{
                    //     position: "relative",
                    //     // height: "50%",
                    //     // width: "80%",
                    //     top: "50%",
                    //     left: "50%",
                    //     transform: "translate(-50%,-50%)",
                    //     msTransform: "translate(-50%,-50%)",
                    //     // backgroundColor: 'red',
                    // }}
                    >
                        <div
                            css={{
                                // position: "absolute",
                                // top: "50%",
                                // left: "50%",
                                // transform: "translate(-50%,-50%)",
                                // msTransform: "translate(-50%,-50%)",
                                // height: "100%",
                                // width: "80%",
                                // marginTop: ,
                                padding: 40,
                                // margin: '0 auto',

                                fontSize: 25,
                                textAlign: "center",
                                fontWeight: "bold",
                                // marginBottom: 30
                            }}
                        >
                            {text}
                        </div>
                    </div>
                    <button className={classes.button} onClick={() => close(false)}>Close</button>
                </div>
            </div>

            {/* <Link
        to={"/style"}
        // onClick={() => {
        //     sessionStorage.removeItem('canvas')
        //     sessionStorage.removeItem('canvas2')
        //     sessionStorage.removeItem('canvas3')
        //     sessionStorage.removeItem('height')
        //     sessionStorage.removeItem('width')
        //     sessionStorage.removeItem('envelope_id')
        // }}
      >
        <button
          onClick={() => handleWarning()}
          css={{
            width: !mediaType && "40%",
            height: "5%",
            border: "solid 0px red",
            borderRadius: 10,
            backgroundColor: "#D924FF",
            position: "absolute",
            top: "70%",
            left: mediaType ? "40%" : "27.5%",
            fontSize: mediaType ? "min(3vw, 30px)" : "min(4vw, 30px)",
            color: "white",
            boxShadow: "1px 2px",
            transform: "translate(-50%,-50%)",
            msTransform: "translate(-50%,-50%)",
            "&:hover": {
              color: "#D546FF",
            },
            transition: "all .5s",
          }}
        >
          Yes, Continue
        </button>
      </Link>
      <button
        css={{
          height: "5%",
          width: !mediaType && "40%",
          border: "solid 0px green",
          boxShadow: "1px 2px",
          borderRadius: 10,
          backgroundColor: "#D924FF",
          position: "absolute",
          top: "70%",
          left: mediaType ? "60%" : "72.5%",
          fontSize: mediaType ? "min(3vw, 30px)" : "min(4vw, 30px)",
          color: "white",
          transform: "translate(-50%,-50%)",
          msTransform: "translate(-50%,-50%)",
          "&:hover": {
            color: "#D546FF",
          },
          transition: "all .5s",
        }}
        onClick={() => {
            handleWarning()
            window.history.pushState(null, null, window.location.pathname);
        }}
      >
        No, Go Back
      </button> */}
        </div >
    );
}
