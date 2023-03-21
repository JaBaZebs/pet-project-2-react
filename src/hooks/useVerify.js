import ky from "ky";
import store from '../../redux/store.js'
import Types from "../../redux/actionType.js";


export default function verify(){
        ky.get('http://192.168.0.107:5000/verify', {credentials: 'include'}).json().then(data => {handle(data)});
        function handle(data){
            store.dispatch({type: Types.SET_USER, payload: {...data, loading: false}});
        }
}