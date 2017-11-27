import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import PersonalInfoForm from './personal_info_form';
import PhotoUploadForm from './photo_upload_form';
import PaymentForm from './payment_form';

class FormTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Camp Info" value={0} />
          <Tab label="Personal Info" value={1} />
          <Tab label="Photo Upload" value={2} />
          <Tab label="Payment" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            Swipe to see the next slide
          </div>
          <PersonalInfoForm
            form={this.props.form}
            onUpdateChineseName={(newName) =>
              this.props.onUpdateChineseName(newName)}/>
          <PhotoUploadForm />
          <PaymentForm />
        </SwipeableViews>
      </div>
    );
  }
}

FormTabs.propTypes = {
  form: PropTypes.object,
  onUpdateChineseName: PropTypes.func,
}

export default FormTabs;
