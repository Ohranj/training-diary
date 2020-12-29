import React from "react";
import { Container, Header, List } from "semantic-ui-react";

const Welcome = () => (
    <Container textAlign="center">
        <Header as="h1" content="Welcome" />
        <Header
            as="h3"
            content="Manage your workouts and track your progress"
        />
        <List className="welcomeList" relaxed>
            <List.Item>
                <List.Icon name="heartbeat" />
                <List.Content>Track Exercises</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="weight" />
                <List.Content>Monitor Body Stats</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="line graph" />
                <List.Content>View Progress</List.Content>
            </List.Item>
        </List>
    </Container>
);

export default Welcome;
