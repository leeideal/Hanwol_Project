import ApexChart from "react-apexcharts"
import styled from "styled-components";
 
const Container = styled.section`
    margin-top: 20px;
    margin-bottom: 150px;
`

function MissionChart () {
    return (
        <Container>
            <ApexChart 
        type="line"
        series={[
            {
                name: "",
                data: [50,75,25,100,50,0,33]   // map함수는 기본적으로 return값으로 array를 줌
            },
        ]}
        height = {`350px`}
        width = {`100%`}
        options={{
            theme:{
                mode: "dark",
            },
            chart : {
                toolbar:{           // 차트위에 기능바
                    show:false,
                },
                background: "transparent",      // 배경색
            },
            markers : {
                size: 8,
                colors: `#98D4BF`,
                strokeColors: '#fff',
                strokeWidth: 3,
                hover: {
                    size: 10,
                    sizeOffset: 3
                  }
            },
            grid: {                 // 차트에 눈금선
                show: true,
            },
            yaxis:{                 // y축
                show: true,
                color: '#F0F0F0',
                min : 0,
                max : 100,
                tickAmount: 4,
                axisBorder: {
                    show: true,
                    color: '#F0F0F0',
                    offsetX: 0,
                    offsetY: 0
                },
                labels: {
                    style : {
                        colors : "#A2A2A6"
                    },
                    formatter: (value) => `${value}%`  
                }
            },
            xaxis:{     
                tickPlacement: 'between',            // x축
                labels:{            // x축 값
                    show:true,
                    style : {
                        colors : "#A2A2A6"
                    }
                },
                axisTicks:{         // x축 눈금선
                    show: false,
                },
                axisBorder: {       // x축 축선
                    show: false,
                },
                type : "date",
                categories: ["15일 월요일", "16일 화요일", "17일 수요일", "18일 목요일", "19일 금요일", "20일 토요일", "21 월요일"]
            },
            tooltip: {              // 마우스를 갔다대면 나오는 정보창
                y: {
                    formatter: (value) => `$ ${value.toFixed(2)}`       // 값을 넘겨주는 함수
                },
                x: {
                    show: false
                },
                
            },
            stroke: {               // line 스타일 설정
                curve: "smooth",    // line을 부드럽게 만들어줌
                width: 4,           // line 두께 설정
                color : `${props => props.theme.lineColor}`
            },
        }}
        />
        </Container>
    )
}
export default MissionChart;