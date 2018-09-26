import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>
     Hi, my name is Shreyas. This blog is mostly for myself right now, but there is a part of me that hopes you find do something helpful in here. If you want to talk, email me at shreyas |dot| jaganmohan at gmail [dot] com.
    </p>
    <img style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }} width="300" height="300" src="https://avatars0.githubusercontent.com/u/3188413?s=460&v=4"></img>

    <p>
     I don't really have a main thesis or goal for this thing aside from marginally getting more clarity about what I'm writing about. Currently, I wish to get more clarity on the cloud infrastructure and tooling space. This includes topics like the container ecosystem and its trends, case studies on organizations in the space, implementations and extensive write-ups for systems like Kubernetes, all with a healthy dose of opinion.
    </p>
  </Layout>
)

export default IndexPage
