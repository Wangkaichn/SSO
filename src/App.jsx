import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { Router } from 'react-router-dom'
import router from './router'
import history from './router/history'
import { fetchCurrent } from '@src/redux/actions/currentUser'
import styles from './App.module.scss'


const App = ({ fetchCurrentUser }) => {
  const [loading, setLoading] = useState(false)
  const effect = async () => {
    try {
      setLoading(true)
      await fetchCurrentUser()
    } catch({ response }) {
      console.info('response: ', response)
      if (response && response.status === 401) {
        console.info('aaaaaaaaaaaaaaaaaaaaaaa')
        // window.location = '/login'
      }
    } finally {
      setLoading(false)
    }
    
  }
  useEffect(() => {
    effect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router history={history}>
      <Spin spinning={loading}>
        {loading ? <div className={styles.spin} /> : router()}
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
