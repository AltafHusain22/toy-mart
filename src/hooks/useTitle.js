import { useEffect } from "react"

const useTitle =(title) =>{
	useEffect(()=>{
		document.title = `toys-mart | ${title}`;
	},[title])

}
export default useTitle