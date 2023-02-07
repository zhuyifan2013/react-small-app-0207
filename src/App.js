import logo from './logo.svg';
import './App.css';
import {Button, Card, ListGroup, OverlayTrigger} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {jsonData} from "./DataSource";
import {useState} from 'react';
import {Routes, Route, Outlet, Link, Router, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selected, sort} from "./dataSlice";
import upIcon from "./assets/chevron.up.png";
import downIcon from "./assets/chevron.down.png";
import leftIcon from "./assets/chevron.left.png";

export function App() {
    // const testData = JSON.parse(jsonData);

    const homeData = useSelector(state => state.homeData)
    const dispatch = useDispatch()
    const downIcon = require("./assets/chevron.down.png")
    const upIcon = require("./assets/chevron.up.png")

    function sortClick() {
        dispatch(sort(!homeData.descend))
    }

    function itemSelected(index) {
        dispatch(selected(index))
    }

    return (
        <div style={styles.home}>
            <h2 style={styles.titleText}>Participants</h2>

            <Card style={styles.homeCard}>
                <div className="row" style={styles.tableTitle}>
                    <div className="col-6">Participant Name</div>
                    <div className="col-3">
                        ICD codes
                        <img style={styles.titleIcon} src={homeData.descend ? upIcon : downIcon} width="18" height="18"
                             onClick={sortClick}/>
                    </div>
                </div>
                <hr className="hr"/>
                {
                    homeData.participants.map((dataItem, index) => (
                            // <OverlayTrigger>
                            <Link to="detail" onClick={() => itemSelected(index)} style={styles.dataItem}>
                                <Card
                                    style={index === homeData.index ? styles.selectedCardStyle : styles.unSelectedCardStyle}>
                                    <Card.Body>
                                        <div className="row">
                                            <body style={styles.tableBodyName}
                                                  className="col-6">{dataItem.firstName} {dataItem.firstName}</body>
                                            <body style={styles.tableBodyNumber} className="col-3">
                                            {dataItem.diagnoses.length}
                                            </body>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        )
                    )
                }
            </Card>
        </div>
    )
}

export function DetailPage() {
    const homeData = useSelector(state => state.homeData)
    const participant = homeData.participants[homeData.index]
    const leftIcon = require("./assets/chevron.left.png")
    const navigate = useNavigate()
    return (
        <div style={styles.home}>
            <div className="row">
                <div className="col-2">
                    <Card.Text style={styles.detailBack}>
                        <Button style={{padding: 10, paddingLeft: 30, paddingRight: 30}} onClick={() => {
                            navigate(-1)
                        }}><img style={styles.backIcon} src={leftIcon} width="8" height="12"/>Back</Button>
                    </Card.Text>
                </div>
                <div className="col-8">
                    <Card style={styles.detailContainer}>
                        <h2 style={styles.detailTitle}>
                            {participant.firstName} {participant.lastName}
                        </h2>
                        <hr className="hr"/>
                        <div style={{color: "#97999b"}}>
                            ICD Codes ({participant.diagnoses.length})
                        </div>
                        {participant.diagnoses.map((item) => (
                                <Card style={styles.detailItem}>
                                    <div style={{display: "flex"}}>
                                        <div>Diabetes</div>
                                        <div style={{flexGrow: 1}}></div>
                                        <div style={{color: "#97999b"}}>{item.icdCode}</div>
                                    </div>
                                </Card>
                            )
                        )
                        }
                    </Card>
                </div>
                <div className="col-2">

                </div>


            </div>


        </div>
    )
}

const styles = {
    home: {
        backgroundColor: "#f6f7fa",
        padding: 20
    },
    homeCard: {
        padding: 20,
        marginTop: 30,
        marginLeft: 60,
        marginRight: 60
    },
    titleText: {
        color: '#062d8f',
        marginLeft: 20
    },
    tableTitle: {
        color: '#97999b'
    },
    tableBody: {
        color: '#626274'
    },
    tableBodyName: {
        marginLeft: 10,
    },
    tableBodyNumber: {
        color: '#062d8f'
    },
    selectedCardStyle: {
        margin: 10,
        borderWidth: 3,
        borderColor: 'rgba(77, 126, 248, 0.5)',
        boxShadow: '2px 4px 10px rgba(77, 126, 248, 0.1)',
    },
    unSelectedCardStyle: {
        margin: 10,
        boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    dataItem: {
        textDecoration: 'none'
    },
    titleIcon: {
        marginLeft: 10
    },
    backIcon: {
        marginRight: 15
    }
    ,
    detailTitle: {
        fontSize: 20
    },
    detailBack: {
        margin: 20
    },
    detailContainer: {
        padding: 20
    },
    detailItem: {
        backgroundColor: 'rgba(151,151,151,0.1)',
        border: 'none',
        margin: 5,
        padding: 10
    }
}
