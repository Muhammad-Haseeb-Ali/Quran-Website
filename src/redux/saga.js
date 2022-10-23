import {all, call, put} from 'redux-saga/effects'
import { FETCHING_SUCCESS,FETCHING_FAILED } from './constant'

async function fetchAPI(){
    console.log("API is called")
    const chapters = await 
    fetch("http://api.quran.com/api/v3/chapters")
    .then(res => res.json())
    .then(data => data)
    .catch(err => {throw err})
    const juzs = await 
    fetch("http://api.quran.com/api/v3/juzs")
    .then(res => res.json())
    .then(data => data)
    .catch(err => {throw err})
    return [chapters.chapters,juzs.juzs]
}
export function* callApi() {
    try{
        const data = yield call(fetchAPI);
        yield put({type:FETCHING_SUCCESS,data})
    }
    catch (data){
        yield put({type:FETCHING_FAILED,data:data.massage})
    }
}


export default function* rootSaga() {
    yield all([
        callApi()
      ])
}