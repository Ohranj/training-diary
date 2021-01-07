import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { addMemo } from "../../actions/newEntry";

const NewEntryMemoForm = ({ dispatchMemo }) => (
    <Form>
        <TextArea
            placeholder="Provide any notes about your workout or diet here..."
            onChange={(e, { value }) => dispatchMemo(value)}
        />
    </Form>
);

const mapDispatchToProps = (dispatch) => ({
    dispatchMemo: (memo) => dispatch(addMemo(memo)),
});

export default connect(null, mapDispatchToProps)(NewEntryMemoForm);
