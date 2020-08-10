import React ,{ useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


function TinderCards() {

    const [people,] = useState([
        {
            name:"Elon Musk",
            url:"https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name:"Jeff Bezos",
            url:"https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1595348125&w=1400&h=950"
        },
        {
            name:"Shah Rukh Khan",
            url:"https://i.zoomtventertainment.com/story/Shah_Rukh_Khan_image.jpg?tr=w-400,h-300,fo-auto"
        },
        {
            name:"Johnny Depp",
            url:"https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
        },
    ]);


    // useEffect(() => {
    //     const unsubscribe = database.collection('people').onSnapshot(snapshot=>{
    //         setPeople( snapshot.docs.map(doc=>doc.data()) )
    //     });

    //     return ()=>{
    //         unsubscribe();
    //     }
    // }, [])

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {
                    people.map(person=>{
                        return (
                            <TinderCard
                                className="swipe"
                                key={person.name}
                                preventSwipe={["up","down"]}
                                >
                                <div
                                    style={{backgroundImage:`url(${person.url})`}}
                                    className="card"
                                    >
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TinderCards
