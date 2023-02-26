import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    collection,
    query,
    where,
    onSnapshot,
    doc, updateDoc
} from "firebase/firestore";
import { db, storage } from "../Firebase.js";


function ViewProfile(){
    const [profile,setProfile]=useState({})
    const param = useParams()
    const collName=useSelector((state)=>state.collName)
    console.log(param.id)
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const q = query(
            collection(db, "providers"),
            where("id", "==", param.id)
        );

        onSnapshot(q, (snapshot) => {
            setProfile(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                role: doc.data().role,
                phone: doc.data().phone,
                rate: doc.data().rate,
                spetialization: doc.data().spetialization,
              }))
            );
          });
    }
    console.log(profile)
    console.log(collName)
    return(
        <>
        <h3>{param.id}</h3>
        <h3>{collName}</h3>
        </>
        
    )

}

export default ViewProfile