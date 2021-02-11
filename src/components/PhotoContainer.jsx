import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    }
  }));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function PhotoContainer({ photoData, fetchPhotos }){
    useEffect(() => {
        fetchPhotos()
    }, [])

    const classes = useStyles();

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    
    return photoData.loading ? (
        <h2>Loading....</h2>
    ) : photoData.error ? (
        <h2>{photoData.error}</h2>
    ) : (
        <div>
            <div className={classes.root}>
                <Grid container spacing={5}>
                    {
                        photoData &&
                        photoData.photos &&
                        photoData.photos.slice(0, 12).map(photo => (
                            <Grid container item lg={3} md={4} sm={6} xs={12} spacing={3}>
                                <animated.div
                                    class="card"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}>
                                
                                    <img className={classes.image} src={photo.url}/>
                                </animated.div>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        photoData: state.photo
    }
}

const mapDipatchToProps = dispatch => {
    return {
        fetchPhotos: ()=> dispatch(fetchPhotos())
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(PhotoContainer)