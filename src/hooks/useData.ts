import React, { useEffect, useState } from "react";

export function useData() {
    const [data, setData] = useState([] as any []);
   
    useEffect(() => {
    //     const loadData =async () => {
    //         const url = `https://jsonplaceholder.typicode.com/users`
    //         const data = await fetch(url);
    //         const json = await data.json();
    //         setData(json.results);

    //     }
    //     loadData()
    // },[])

   
        const getData = () => {
            fetch("data.json", {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
              .then(function (response) {
                // console.log(response);
                return response.json();
              })
              .then(function (myJson) {
                // console.log(myJson);
                setData(myJson);
              });
          };

      getData();
    }, []);

    // const getPlumberById=(id:number) => {
    //     // const url = `https://jsonplaceholder.typicode.com/users`
    //     //     const data = await fetch(url);
    //         // const json = await data.json();
    //         fetch("data.json", {
    //           headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //           },
    //         })
    //           .then(function (response) {
    //             // console.log(response);
    //             return response.json();
    //           })

    //           const plumber = data.filter((plumbers: any) => plumbers.id === id)
    //           return plumber[0]

    // }
    return{
        data,
        // getPlumberById

    }
} 