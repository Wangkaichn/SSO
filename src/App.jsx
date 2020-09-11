import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { Router } from 'react-router-dom'
import router from './router'
import history from './router/history'
import { fetchCurrent } from '@src/redux/actions/currentUser'
import styles from './App.module.scss'


const App = ({ isFetching = true, fetchCurrentUser }) => {
  const effect = async () => {
    const res = await fetchCurrentUser()
    console.info('res: ', res)
  }
  useEffect(() => {
    effect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router history={history}>
      <Spin spinning={isFetching}>
        {isFetching ? <div className={styles.spin} /> : router()}
      </Spin>
    </Router>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCurrentUser: () => fetchCurrent()(dispatch),
    ...props
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
