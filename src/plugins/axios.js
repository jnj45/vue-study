import axios from 'axios';

let config = {
    headers: {'X-Requested-With':'XMLHttpRequest'},
    baseURL: process.env.VUE_APP_API_SERVER_URL, //'http://localhost:8080',
    
    // withCredentials: true, // Check cross-site Access-Control
    // onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
      //var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      //vue.$store.commit('common/setProgressStatus', 'upload');
      //vue.$store.commit('common/setProgress', percentCompleted);
    // },
  
    // `onDownloadProgress` allows handling of progress events for downloads
    // browser only
    // onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
      //var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      //vue.$store.commit('common/setProgressStatus', 'download');
      //vue.$store.commit('common/setProgress', percentCompleted);
    // },
};
  
const _axios = axios.create(config);
console.log('axios instance created!!!');

_axios.interceptors.request.use(
config => {
    try {
        // Do something with request data
        return config;
    } catch (err) {
        console.error('[_axios.interceptors.request] config : ' + err.message);
    }
},
error => {
    try {
        // vue.$awn.alert('request : '+error.message);
        this.$swal('request : '+error.message);
        // Do something with request error
        return Promise.reject(error);
    } catch (err) {
        console.error('[_axios.interceptors.request] error : ' + err.message);
    }
},
);
_axios.interceptors.response.use(
response => {
    try {
        // Do something with response data
        return response;
    } catch (err) {
        console.error('[_axios.interceptors.response] response : ' + err.message);
    }
},
error => {
    try {
        console.log('[_axios.interceptors.response] error!!!!!!!');
        console.log(error);
        console.log(error.response)
        var errorStatus = error.response.status;
    
        if(errorStatus == '400') this.$swal(error.response.data);
        if(errorStatus == '401') this.$swal('인증에 실패했습니다.');
        if(errorStatus == '403') this.$swal('권한이 없습니다.');
        if(errorStatus == '500') this.$swal('서버에서 오류가 발생하였습니다.');
        
        return error.response;
    } catch(err) {
        console.error('[_axios.interceptors.response] error : '+err.message);
    }
},
);

export default _axios;