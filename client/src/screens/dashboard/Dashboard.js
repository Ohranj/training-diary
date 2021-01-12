import React from "react";
import { Grid } from "semantic-ui-react";

import "../../assets/css/dashboard.css";

import MenuColumn from "./MenuColumn";
import NewEntryModal from "./NewEntryModal";
import RenderEntries from "./RenderEntries";
import CalendarColumn from "./CalendarColumn";

const Dashboard = () => (
    <Grid>
        <Grid.Row className="dashboardContainer">
            <MenuColumn />
            <Grid.Column
                className="mainContent"
                style={{
                    border: "1px solid black",
                }}
                width={9}
            >
                <NewEntryModal />
                <RenderEntries />
            </Grid.Column>
            <CalendarColumn />
        </Grid.Row>
    </Grid>
);

export default Dashboard;
