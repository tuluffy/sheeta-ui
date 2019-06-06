import React from 'react';
import cs from 'classnames';
import './DatePicker.css';

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
const months = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12];
const days = (function () {
    let days = []
    for(let i = 31; i > 0; i--) {
        days.push(i)
    }

    return days
})();

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.dateSelectedLineREF = React.createRef();
    }

    componentDidMount() {
        // 计算元素的位置
        this.dateSelectedLineDOM = this.dateSelectedLineREF.current;
        console.log(this.dateSelectedLineDOM)
    }

    render() {

        return (
            <div className="date-picker-container">
                <div className="result-bar">
                    <div className="result">年月日</div>
                    <div className="confirm">确定</div>
                </div>

                <div className="date-picker-content">
                    <div className="date-selected-line"
                         id="line"
                         ref={this.dateSelectedLineREF}
                    ></div>

                    <div className="date-block date-year">
                        {
                            years.map(item => {
                                return (
                                    <div key={item}>{item}</div>
                                )
                            })
                        }
                    </div>

                    <div className="date-block date-month">
                        {
                            months.map(item => {
                                return (
                                    <div key={item}>{item}</div>
                                )
                            })
                        }
                    </div>

                    <div className="date-block date-day">
                        {
                            days.map(item => {
                                return (
                                    <div key={item}>{item}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}