import {Col, Row} from "react-bootstrap"


const bestSellingItems= [
    {
        img:"Img/bestSellign1.png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"Img/bestSellign2.png",
        name:"Volkswagen",
        price:"from $15k"
    },
    {
        img:"Img/bestSellign3.png",
        name:"Toyota",
        price:"from $27k"
    },
    {
        img:"Img/bestSellign4.png",
        name:"Mercedes-Benz",
        price:"from $60k"
    },
    {
        img:"Img/bestSellign5.png",
        name:"Hyundai",
        price:"from $30k"
    },
    {
        img:"Img/bestSellign6.png",
        name:"Infiniti",
        price:"from $54k"
    }
]


export const BestSelling = ()=>{
    return(
        <>
            <div className="container" style={{paddingTop:"86px"}}>
                <h1 className="text-center fw-bold mb-5">Explore best selling car makes</h1>

                <Row className="d-flex justify-content-center" style={{padding:"50px"}}>
                    {bestSellingItems.map(
                        ({img,name,price})=>(
                            // eslint-disable-next-line react/jsx-key
                            <Col md={4} className="SellingCard" >
                                <div className="vw-add">
                                    <img src={img} alt="" className="vw-logo w-[100px]" />
                                
                                    <div>
                                        <div className="vw-text">{name}</div>
                                        <div className="vw-price">{price}</div>
                                    </div>
                                </div>
                            </Col>
                        )
                    )

                    }
                </Row>
            </div>
        </>
    )
}