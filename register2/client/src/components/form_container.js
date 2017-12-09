import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import FormTabs from './form_tabs';
import * as FormActions from '../actions/form_actions';

class FormContainer extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={"LIFEgame™"}
        />
        <h1>
          LIFEgame™ 2018 Bay Area Camp Registration
        </h1>
        <FormTabs
          form={this.props.form}
          onUpdateChineseName={(newName) =>
            {this.props.formActions.updateChineseName(newName);}}
        />
      </div>
        );
  }
}

function mapStateToProps(state, prop) {
  return {
    form: state.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formActions: bindActionCreators(FormActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);