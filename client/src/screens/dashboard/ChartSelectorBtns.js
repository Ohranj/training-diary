import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

const ChartSelectorBtns = ({ allEntries, getActiveChart }) => {
    const [uniqueExercises, setUniqueExercises] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);

    useEffect(() => {
        if (allEntries.loaded) {
            setUniqueExercises([
                ...new Set(
                    allEntries.entries
                        .flatMap((x) => x.exercises)
                        .map((x) => x.exercise)
                        .sort()
                ),
            ]);
        }
    }, [allEntries]);

    useEffect(() => {
        getActiveChart(activeBtn);
    }, [activeBtn, getActiveChart]);

    return allEntries.loaded
        ? uniqueExercises.map((exercise, i) => (
              <Button
                  key={i}
                  onClick={() => setActiveBtn(exercise)}
                  style={{
                      margin: "5px 10px",
                      fontFamily: "PT Sans",
                      color: activeBtn === exercise ? "#ffffff" : "#f2711c",
                      backgroundColor:
                          activeBtn === exercise ? "#f2711c" : "#ffffff",
                  }}
                  content={exercise}
                  size="small"
                  compact
                  circular
              />
          ))
        : null;
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(ChartSelectorBtns);
