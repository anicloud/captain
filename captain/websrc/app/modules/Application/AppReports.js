/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Line as LineChart} from 'react-chartjs-2';
import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading';
import {loadAppReports} from './actions';
import './AppReports.less';

class AppReports extends Component {
  constructor(props) {
    super(props);
    this.onSearchBoxFocused = this.onSearchBoxFocused.bind(this);
    this.onSelectApp = this.onSelectApp.bind(this);
    this.state = {
      searchBoxFocused: false,
      curProduct: undefined,
      curReports: undefined
    };
  }

  componentDidMount() {
    if (this.state.curProduct) {
      let curReports = this.props.reports.entities[this.state.curProduct.appId];
      if (!curReports) {
        loadAppReports(this.state.curProduct.appId);
      } else {
        this.setState({curReports});
      }
    }
  }

  onSearchBoxFocused() {

  }

  onSelectApp(app) {
    let curReports = this.props.reports.entities[app.appId];
    if (!curReports) {
      loadAppReports(app.appId);
    } else {
      this.setState({curReports});
    }
    this.setState({curProduct: app});
  }

  render() {
    const state = this.state;
    const props = this.props;
    const searchBoxClasses = {
      'search-box': 1,
      'focus': 1
    };
    let productsData = [];
    for (let data of Object.values(props.products.entities)) {
      productsData.push({
        key: data.appId,
        ...data
      });
    }
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };
    const chartData = {
      'activeUsers': {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            fill: true,
            lineTension: 0,
            backgroundColor: 'rgba(0,165,187,0.1)',
            borderWidth: 2,
            borderColor: 'rgba(0,165,187,0.4)',
            pointBorderColor: 'rgba(0,165,187,0.4)',
            pointBackgroundColor: 'rgba(0,165,187,0.1)',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: 'rgba(0,165,187,0.4)',
            pointHoverBorderColor: 'rgba(0,165,187,0.8)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: state.curReports ? state.curReports.week.activeUsers : [],
            spanGaps: false
          }
        ]
      },
      'installed': {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            fill: true,
            lineTension: 0,
            backgroundColor: 'rgba(0,165,187,0.1)',
            borderWidth: 2,
            borderColor: 'rgba(0,165,187,0.4)',
            pointBorderColor: 'rgba(0,165,187,0.4)',
            pointBackgroundColor: 'rgba(0,165,187,0.1)',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: 'rgba(0,165,187,0.4)',
            pointHoverBorderColor: 'rgba(0,165,187,0.8)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: state.curReports ? state.curReports.week.installed : [],
            spanGaps: false
          }
        ]
      },
      'launched': {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            fill: true,
            lineTension: 0,
            backgroundColor: 'rgba(0,165,187,0.1)',
            borderWidth: 2,
            borderColor: 'rgba(0,165,187,0.4)',
            pointBorderColor: 'rgba(0,165,187,0.4)',
            pointBackgroundColor: 'rgba(0,165,187,0.1)',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: 'rgba(0,165,187,0.4)',
            pointHoverBorderColor: 'rgba(0,165,187,0.8)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: state.curReports ? state.curReports.week.launched : [],
            spanGaps: false
          }
        ]
      }

    };
    return (
      <div className="reports">
        <div className="tool-bar">
          <div className="search-tool">
            <SearchInput placeholder="选择应用"
                         autoComplete={true}
                         dataSource={productsData}
                         onSelect={this.onSelectApp}
            />
          </div>
          {state.curProduct &&
          <div className="result">
            <div className="logo">
              <img src={state.curProduct.logo}/>
            </div>
            <div className="info">
              {state.curProduct.name}
            </div>
          </div>
          }
        </div>
        <div className="reports-content">
          <div className="container-fluid">
            <div className="row">
              <div className="caption">今日最新</div>
            </div>
            <div className="row">
              <div className="capsule col-lg-6">
                <div className="number">
                  {state.curReports ?
                    state.curReports.today.activeUsers : 0}
                </div>
                <div className="text">
                  <div className="title">活动用户</div>
                  <div className="subtitle">更新于1分钟前</div>
                </div>
              </div>
              <div className="capsule col-lg-offset-2 col-lg-6">
                <div className="number">
                  {state.curReports ?
                    state.curReports.today.installed : 0}
                </div>
                <div className="text">
                  <div className="title">应用安装</div>
                  <div className="subtitle">更新于1分钟前</div>
                </div>
              </div>
              <div className="capsule col-lg-offset-2 col-lg-6">
                <div className="number">
                  {state.curReports ?
                    state.curReports.today.launched : 0}
                </div>
                <div className="text">
                  <div className="title">应用启动</div>
                  <div className="subtitle">更新于1分钟前</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="caption">历史数据</div>
            </div>
            <div className="row">
              <div className="panel col-lg-11">
                <div className="panel-header">
                  <div className="title">活动用户数</div>
                  <div className="selector">
                    <select>
                      <option value="week">周视图</option>
                      <option value="month">月视图</option>
                      <option value="year">年视图</option>
                    </select>
                  </div>
                </div>
                <div className="panel-content">
                  {state.curReports ?
                    <div className="chart-graph">
                      <LineChart data={chartData.activeUsers} options={chartOptions}/>
                    </div>
                    :
                    <Loading>未选择产品</Loading>
                  }
                </div>
              </div>
              <div className="panel col-lg-offset-1 col-lg-11">
                <div className="panel-header">
                  应用安装量
                </div>
                <div className="panel-content">
                  {state.curReports ?
                    <div className="chart-graph">
                      <LineChart data={chartData.installed} options={chartOptions}/>
                    </div>
                    :
                    <Loading>未选择产品</Loading>
                  }
                </div>
              </div>
            </div>
            <div className="row">
              <div className="panel col-lg-11">
                <div className="panel-header">
                  应用启动次数
                </div>
                <div className="panel-content">
                  {state.curReports ?
                    <div className="chart-graph">
                      <LineChart data={chartData.launched} options={chartOptions}/>
                    </div>
                    :
                    <Loading>未选择产品</Loading>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.app.products,
    reports: state.app.reports
  };
}


AppReports.propTypes = {
};

AppReports.defaultProps = {
};

export default connect(mapStateToProps)(AppReports)