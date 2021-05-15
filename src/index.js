import ReactDOM from "react-dom";
ReactDOM.render(
    <table border="1" width="1000">
        <tr>
            <td colSpan="2" align="center"><Name/></td>
        </tr>
        <td><ImgIlon/></td>
        <td width="600" valign="top"><i><Question name="Илон Рив Маск"/></i> <Answer nameResult=" -американский предприниматель, изобретатель, инженер и
            миллиардер."/>
            <div><Question data="Дата и место рождения:"/> <Answer dataResult="28 июня 1971 г. (возраст 49 лет), Претория, ЮАР"/></div>
            <div><Question money="Собственный капитал:"/> <Answer moneyResult="90,8 миллиарда USD (2020 г.) Forbes"/></div>
        </td>
        <tr>
            <td colSpan="2" align="center"><Link/></td>
        </tr>
    </table>,
    document.getElementById('root'));
function Name() {
    return <h1>Илон Маск</h1>
}
function ImgIlon() {
    return <img src="ilon.jpeg" width= "500" />
}
function Question(props) {
    return <b> {props.name} {props.data}{props.money} </b>
}
function Answer(props) {
    return <span>{props.nameResult} {props.dataResult} {props.moneyResult}</span>
}