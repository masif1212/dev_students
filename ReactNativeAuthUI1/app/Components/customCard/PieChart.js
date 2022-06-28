import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

const data = [
    {   
        attendance :"p",

        key: 1,
        status:  40 , 
        svg: { fill: '#D2F790' },
    },
    {
        attendance :"p",
        key: 2,
        status: 60  ,
        svg: { fill: '#A4C3DA' }
    },
]

var filters ={
    attendance :"p"
} 

var out = data.filter(person => {
    return Object.keys(filters).every(filter => {
        return filters[filter] === person[filter]
    });
})


console.log(out)


const Labels = ({ slices, }) => {
    return slices.map((slice, index) => {
        const { labelCentroid, data} = slice;
        return (
            <Text
                key={index}
                x={labelCentroid[ 0]}
                y={labelCentroid[ 1 ]}
                fill={'black'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={20}
                stroke={'black'}
                strokeWidth={0.2}
               
            >
                {data.status}

                
            </Text>
        )
    })
}

const Pie = ({outerRadius}) => {
 
        return (
            <PieChart
            
              height={210}
              backgroundColor="transperant"
               paddingLeft="20"
                style={{ height: 150 }}
                valueAccessor={({ item }) =>item.status }
                data={data}
                outerRadius={outerRadius }
                innerRadius={0}
            >
                <Labels/>
            </PieChart>
        )
    }



export default Pie

