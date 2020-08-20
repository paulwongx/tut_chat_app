import React from "react";
import ReactDOM from "react-dom";
import {
    Container
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from "chat/Chat";

const App = () => (
    <Container>
        <p>Bear claw ice cream chupa chups lollipop wafer sugar plum. Chocolate cake gummi bears chocolate bar. Pie marzipan bear claw chocolate bar donut dessert cookie oat cake. Donut wafer lollipop cheesecake chupa chups.</p>
        <h1>Chat!</h1>
        <Chat/>
        <div>Chat window here</div>
        <p>Pudding muffin bear claw brownie tiramisu dessert. Pudding jujubes dragée bonbon cake. Croissant liquorice bonbon bonbon. Tart sesame snaps cheesecake cupcake bear claw liquorice pie pudding.</p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
