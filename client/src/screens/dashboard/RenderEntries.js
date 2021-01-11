import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllEntries } from "../../actions/entries";
import { Grid } from "semantic-ui-react";

const RenderEntries = ({ dispatchAllEntries, allEntries }) => {
    useEffect(() => {
        dispatchAllEntries();
    }, [dispatchAllEntries]);

    useEffect(() => {
        console.log(allEntries);
    }, [allEntries]);

    return (
        <Grid style={{ height: "75vh" }}>
            <Grid.Row>
                <Grid.Column></Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAllEntries: () => dispatch(getAllEntries()),
});

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderEntries);

// <Segment.Group compact horizontal size="small">
// {allEntries.loaded ? (
//     allEntries.entries.map((entry, i) => (
//         <Segment basic compact key={i}>
//             <Card
//                 raised
//                 header={entry.date}
//                 meta={
//                     entry.bodyweight +
//                     "kg " +
//                     " | " +
//                     entry.bodyfat +
//                     "% " +
//                     " | " +
//                     entry.calories +
//                     "calories"
//                 }
//                 description=""
//                 extra=""
//             />
//         </Segment>
//     ))
// ) : (
//     <p>still loading</p>
// )}
// </Segment.Group>
