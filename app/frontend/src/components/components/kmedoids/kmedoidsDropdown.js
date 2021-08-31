import React, {Component} from 'react';
import {Form, Dropdown, Header} from 'semantic-ui-react';


export class KMedoidsDropdown extends Component {
    constructor(props) {
        super(props);
        this.options = this.props.metrics.map(m => {
            return {
                key: m,
                text: m[0].toUpperCase() + m.substr(1),
                value: m
            }
        });
        this.state = {
            metric: this.props.metric
        }
    }

    render() {
        return (
            <div className='kmedoids__dropdown'>
                <Form>
                    <Form.Field>
                        <Header size='small'>
                            Distance Metric:
                        </Header>
                        <Dropdown   className='kmedoids__dropdown-label'
                                    label='Distance Metric'
                                    fluid
                                    selection
                                    options={this.options}
                                    onChange={(_, data) => {
                                        this.setState({ metric: data.value });
                                        this.props.updateMetric(data.value);
                                    }}
                                    value={this.state.metric}
                        />
                    </Form.Field>
                </Form>
            </div>
        );
    }
};