import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';

import BarLineChartBase from './BarLineChartBase';
import {barData} from './ChartDataConfig';
import MoveEnhancer from './MoveEnhancer'
import ScaleEnhancer from "./ScaleEnhancer";

class BarChart extends React.Component {
  getNativeComponentName() {
    return 'RNBarChart'
  }

  getNativeComponentRef() {
    return this.nativeComponentRef
  }

  render() {
    return <RNBarChart {...this.props} ref={ref => this.nativeComponentRef = ref} />;
  }
}

BarChart.propTypes = {
  ...BarLineChartBase.propTypes,

  drawValueAboveBar: PropTypes.bool,
  drawBarShadow: PropTypes.bool,

  data: barData
}

var RNBarChart = requireNativeComponent('RNBarChart', BarChart, {
  nativeOnly: {onChartSelect: true, onChange: true}
})

export default ScaleEnhancer(MoveEnhancer(BarChart))
