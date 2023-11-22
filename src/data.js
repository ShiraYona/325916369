import dateformat from 'dateformat'
import { useEffect, useState } from "react"
import { Calendar } from 'primereact/calendar';
import { Fieldset } from 'primereact/fieldset';
// import {useNavigate} from "react-router-dom";
// const dates = () =>{
// const getDates = (props)=>{
//     const start = props.start
//     const end  = props.end

//     fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
// }
// const formatStart =(value)=>{
//      const d=dateformat(value, "yyyy-mm-dd")
//      getDates(d)
// //     const str=''
// //     const arr=value.splite('/')
// //     if(arr.length>1){
// //        const str=`${arr[0]}-${arr[1]}-${arr[2]}` 
// // }
// // const arr2=value.splite('/')
// //  if(arr2.length>1){
// //    const str=`${arr2[0]}-${arr2[1]}-${arr2[2]}` 
// // }

// // else str =value
// // return getDates(str);
// }
// const formatEnd =(value)=>{
//     const d1=dateformat(value, "yyyy-mm-dd")
//     getDates(d1)
// //     const str=''
// //     const arr=value.split('/')
// //     if(arr.length>1){
// //        const str=`${arr[0]}-${arr[1]}-${arr[2]}` 
// // }
// // const arr2=value.split('/')
// //  if(arr2.length>1){
// //    const str=`${arr2[0]}-${arr2[1]}-${arr2[2]}` 
// // }
// // else str =value
// // return getDates(str);

// }

// return<>
// <input placeholder ="תאריך התחלה" onBlur={e=>formatStart(e.target.value)}></input>
// <input placeholder ="תאריך סיום" onBlur={e=>formatEnd(e.target.value)}></input>
// <button onClick={getDates} >Click here!</button></>
// }
// export default dates;


function Getdate() {

    const [Date, setDate] = useState("")
    const [dateStart, setdateStart] = useState("")
    const [dateEnd, setdateEnd] = useState("")
    

    // const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await (await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min-on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${dateStart}&end=${dateEnd}`))

            const data = await response.json()
            setDate(data)
            console.log(data);
        }
        catch {
            console.log("error");
        }
    }
    useEffect(() => {

    }, [])
    const formatStart =(value)=>{
        const d=dateformat(value, "yyyy-mm-dd")
        //  const d= <Calendar dateFormat="yyyy-mm-dd" value={Date} onChange={(e) => setDate(e.value)}></Calendar>
 
        setdateStart(d)
    }
    const formatEnd =(value)=>{
        const d=dateformat(value, "yyyy-mm-dd")
        // const d= <Calendar dateFormat="yyyy-mm-dd" value={Date} onChange={(e) => setDate(e.value)}></Calendar>

        setdateEnd(d)
    }
   
    const show = () => {
        fetchData(dateStart, dateEnd)
      
    }
    // const parashot =Date.find (i => i.className="parashat") 
    // console.log(parashot);
if(Date==="")
    return <>
        <input placeholder="תאריך התחלה" onBlur={(e) => formatStart(e.target.value)} ></input>
        <input placeholder="תאריך סיום" onBlur={(e) => formatEnd(e.target.value)} ></input>
        
        <button onClick={() => {show() }}>show</button>
        {/* <button onClick={() => {  navigate('/timer') }}>צום</button> */}

       
     
    </>
    return<><Fieldset legend="המועדים והפרשות שבין התאריכים הנל">
     {Date && Date.map(i=>{
        return<div key={i.title} style={{border:"dotted"}}>
            <h1>{i.title}</h1>
            <div>title: {i.title}</div>
            <div>className: {i.className}</div>
            <div>hebrew: {i.hebrew}</div>
            {/* if({i.hebrew}=="צום")
            navigate('/timer') */}
            
            <p>
                <input type={"checkbox"}/>
                הצג פרשות שבוע בלבד
            </p>

        </div>})}</Fieldset>
     

        
       
        
    </>
}
export default Getdate


