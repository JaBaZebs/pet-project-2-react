import { useSelector } from "react-redux";

export default function useAuth(){
    const username = useSelector(state => state.name);
    if(username !== ''){
        return true;
    }
    return false;
}