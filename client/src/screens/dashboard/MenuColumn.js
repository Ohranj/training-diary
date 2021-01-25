import React, { useRef } from "react";
import { Grid, Segment, Header, Icon, Menu } from "semantic-ui-react";

const MenuColumn = () => {
    const menuItems = ["View Bodyweight", "View Bodyfat"];
    const activeHover = useRef("#f2711c");
    const inactiveHover = useRef("#ffffff");

    return (
        <Grid.Column className="menuColumn" width={3}>
            <Segment basic padded textAlign="center">
                <Header as="h2" icon size="small">
                    <Icon name="shield" />
                    Training Diary
                </Header>
            </Segment>
            <Menu text vertical>
                <Menu.Item header content="Body Graphs" />
                {menuItems.map((item, i) => (
                    <Menu.Item
                        key={i}
                        name={item}
                        onMouseEnter={({ target }) =>
                            (target.style.color = activeHover.current)
                        }
                        onMouseLeave={({ target }) =>
                            (target.style.color = inactiveHover.current)
                        }
                    />
                ))}
            </Menu>
        </Grid.Column>
    );
};

export default MenuColumn;
