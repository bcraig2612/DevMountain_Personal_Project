import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class BMICalculator extends Component {
    constructor() {
        super();

        this.state = {
            height_feet: '',
            height_inches: '',
            weight: ''
        }
    }
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
    calculatorBMI() {
      if (this.state.weight && this.state.height_feet && this.state.height_inches) {
          const INCHES_IN_FEET = 12;
          let height = Number(this.state.height_feet);
          height *= INCHES_IN_FEET;
          height += Number(this.state.height_inches);
          let weight = this.state.weight;
          let bmi = (weight / (height * height)) * 703;
          bmi = bmi.toFixed(2);
          return bmi;
      }
  }
  getBMIResults(bmi) {
    let bmiResults = {
        label: '',
        alertClass: ''
    };
    if (bmi <= 18.5) {
      bmiResults.label = 'Underweight';
      bmiResults.alertClass = 'danger';
  } else if (bmi <= 24.9) {
      bmiResults.label = 'Normal Weight';
      bmiResults.alertClass = 'success';
  } else if (bmi <= 29.9) {
      bmiResults.label = 'Overweight';
      bmiResults.alertClass = 'warning';
  } else if (bmi >= 30) {
      bmiResults.label = 'Obesity';
      bmiResults.alertClass = 'danger';
  } else {
      bmiResults.label = 'BMI';
      bmiResults.alertClass = 'primary'
    }
    return bmiResults;
  }
   render() {
        let bmi = this.calculatorBMI();
        let results = this.getBMIResults(bmi);
        return (
            <div className='col-md-8 m-auto'>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className='display-4 text-center'>Body Mass Index Calculator</h1>
                        <p className='lead text-center'>Enter your weight and height below.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Form>
                            <div className="form-group">
                                <legend>Weight</legend>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Input
                                            name='weight'
                                            className="form-control"
                                            id="bmi-weight"
                                            type="number"
                                            min="1"
                                            max="1000"
                                            value={this.state.weight}
                                            onChange={this.handleChange}
                                        />
                                        <label className="control-label" htmlFor="bmi-weight">lb</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <legend>Height</legend>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <Input
                                            name='height_feet'
                                            className="form-control"
                                            id="bmi-height_feet"
                                            type="number"
                                            min="1"
                                            max="12"
                                            value={this.state.height_feet}
                                            onChange={this.handleChange}
                                        />
                                        <label className="control-label" htmlFor="bmi-height_feet">ft</label>
                                    </div>
                                    <div className="col-xs-6">
                                        <Input
                                            name='height_inches'
                                            className="form-control"
                                            id="bmi-height_inches"
                                            type="number"
                                            min="0"
                                            max="12"
                                            value={this.state.height_inches}
                                            onChange={this.handleChange}
                                        />
                                        <label className="control-label" htmlFor="bmi-height_inches">in</label>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="col-sm-6">
                        <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
                    </div>
                </div>
            </div>
        );
    }
}

function BmiDisplay(props) {
    return (
        <div className={'bmi-result alert' + props.alertClass}>
            <div>{props.bmi || '--.-'}</div>
            <div className={props.alertClass == 'overweight' ? 'danger' : 'success'}>{props.label}</div>
        </div>
    );
}

export default BMICalculator;