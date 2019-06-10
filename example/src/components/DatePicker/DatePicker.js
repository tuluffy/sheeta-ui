import React from 'react';
import './DatePicker.css';

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
const months = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12];
const days = (function () {
    let days = []
    for (let i = 31; i > 0; i--) {
        days.push(i)
    }

    return days
})();

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coordinates: [],
        }

        this.dateSelectedLineREF = React.createRef()
        this.dateSelectedYear = React.createRef()
        this.dateSelectedMonth = React.createRef()
        this.dateSelectedDay = React.createRef()
    }

    componentDidMount() {
        // 计算元素的位置
        this.dateSelectedLineDOM = this.dateSelectedLineREF.current
        this.dateSelectedYearDOM = this.dateSelectedYear.current
        this.dateSelectedMonthDOM = this.dateSelectedMonth.current
        this.dateSelectedDayDOM = this.dateSelectedDay.current

        setTimeout(() => {
            const {top, width, bottom} = this.dateSelectedLineDOM.getBoundingClientRect()
            this.setState({
                coordinates: [width, bottom]
            }, () => {
                Array.from([this.dateSelectedYearDOM, this.dateSelectedMonthDOM, this.dateSelectedDayDOM]).forEach(item => {
                    item.addEventListener('scroll', () => {
                        if (this.dateSelectedYearDOM.getBoundingClientRect().top > top && this.dateSelectedYearDOM.getBoundingClientRect().top < (top + 50)) {
                            document.elementFromPoint(this.dateSelectedYearDOM.getBoundingClientRect().top - 30, top).style = "color: cyan"
                        } else {
                            document.elementFromPoint(this.dateSelectedYearDOM.getBoundingClientRect().top - 30, top).style = "color: '#000'"
                        }
                        this.dateSelectedMonthDOM.getBoundingClientRect()
                        this.dateSelectedDayDOM.getBoundingClientRect()
                        document.elementFromPoint(width - 30, top).style = "color: cyan"
                    })
                })
            })
        }, 0)

        // Array.prototype.slice.call(document.getElementsByClassName('date-block'), 0).forEach(item => {
        //         console.log(item)
        //
        //         item.addEventListener('scroll', () => {
        //             console.log('哇哈哈')
        //         })
        //     }
        // )
        // Array.prototype.forEach.call(document.getElementsByClassName('date-block')).forEach(item => {
        //     console.log(item)
        // item.addEventListener('scroll', () => {
        //     console.log('哇哈哈')
        // })
        // })

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

                    <div className="date-block date-year"
                         ref={this.dateSelectedYear}
                    >
                        {
                            years.map(item => {
                                return (
                                    <div key={item}>{item}</div>
                                )
                            })
                        }
                    </div>

                    <div className="date-block date-month"
                         ref={this.dateSelectedMonth}
                    >
                        {
                            months.map(item => {
                                return (
                                    <div key={item}
                                         onClick={e => console.log(e.target.getBoundingClientRect().top)}
                                    >{item}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="date-block date-day"
                         ref={this.dateSelectedDay}
                    >
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