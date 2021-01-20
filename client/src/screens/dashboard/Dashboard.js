import React from "react";
import { Grid } from "semantic-ui-react";

import "../../assets/css/dashboard.css";

import MenuColumn from "./MenuColumn";
import NewEntryModal from "./NewEntryModal";
import RenderChart from "./RenderChart";
import CalendarColumn from "./CalendarColumn";

const Dashboard = () => (
    <Grid>
        <Grid.Row className="dashboardContainer">
            <MenuColumn />
            <Grid.Column className="mainContent" width={9}>
                <NewEntryModal />
                <RenderChart />
            </Grid.Column>
            <CalendarColumn />
        </Grid.Row>
    </Grid>
);

export default Dashboard;
