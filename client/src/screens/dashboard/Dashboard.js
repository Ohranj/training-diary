import React from "react";
import { Grid } from "semantic-ui-react";

import "../../assets/css/dashboard.css";

import MenuColumn from "./MenuColumn";

const Dashboard = () => {
    return (
        <Grid>
            <Grid.Row className="dashboardContainer">
                <MenuColumn />
                <Grid.Column
                    style={{
                        border: "1px solid black",
                    }}
                    width={10}
                ></Grid.Column>
                <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Dashboard;
