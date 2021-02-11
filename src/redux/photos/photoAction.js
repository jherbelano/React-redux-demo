import axios from "axios";
import { 
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE
 } from "./photoType";

 export const fetchPhotoRequest = () => {
     return {
         type: FETCH_PHOTO_REQUEST
     }
 }

 const fetchPhotoSucess = (photos) => {
     return {
         type: FETCH_PHOTO_SUCCESS,
         payload: photos
     }
 }

 const fetchPhotoFailure = (error) => {
     return {
         type: FETCH_PHOTO_FAILURE,
         payload: error
     }
 }

 export const fetchPhotos = () => {
     return (dispatch) => {
         dispatch(fetchPhotoRequest)
         axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(result => {
                const photos = result.data
                dispatch(fetchPhotoSucess(photos))
            }).catch( err => {
                const errorMsg = err.message
                dispatch(fetchPhotoFailure(errorMsg))
            })
     }
 }