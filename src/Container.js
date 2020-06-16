import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';
import studentData from "./Data"



class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            studentenData: studentData
        }

    }

    render() {

        const dataStudenten = this.state.studentenData



        const dataEvelyn = this.state.studentenData.filter((student) => {
            return student.naam == "Evelyn"

        })

        const alleOpdrachten = dataEvelyn.map((item) => {
            return item.opdracht
        })


        const opdrachtenLijst = allOpdrachten => {
            allOpdrachten.forEach(opdrachten => {






            })
        }





        const scrum = this.state.studentenData.filter((ScrumOpdracht) => {
            return ScrumOpdracht.opdracht == "SCRUM";
        })

        const scrumValueArray = scrum.map((item) => {
            return item.moeilijkheid
        })

        const average = scrumValueArray.reduce((a, b) => a + b) / scrumValueArray.length




        console.log(scrumValueArray);
        console.log(alleOpdrachten);
        console.log(opdrachtenLijst(alleOpdrachten));





        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={40}
            >

                <VictoryAxis style={{ tickLabels: { angle: 90, fontSize: 3 } }}
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]}

                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x / 1}`)}
                />
                <VictoryGroup offset={1}
                    colorScale={"qualitative"}>

                    <VictoryBar
                        data={dataEvelyn}
                        x="opdracht"
                        y="leuk"
                    />
                    <VictoryBar
                        data={dataEvelyn}
                        x="opdracht"
                        y="moeilijkheid"
                    />

                </VictoryGroup>

            </VictoryChart >
        )
    }
}

export default Container;