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

    <h3> Things I'm Currently Working On: </h3>
    <p>
    <a href="https://github.com/codeamp"><b>CodeAmp.</b></a> I've been working on this project for about a year now, and it's what really started my path of learning the cloud infrastructure space. It's a flexible deployments system that provides a friendly UI layer for developers to build, deploy and manage apps.
    </p>
    <p>
    <a href="https://deploywithkumo.com"><b>Kumo.</b></a> The developer experience is highly inefficient, especially for people who want simplicity in their deployments workflow. For people who want to build full cloud applications and services, Kumo provides the simplicity and guarantees to make it easy. For more on developer inefficiencies, <a href="https://stripe.com/reports/developer-coefficient-2018">this report released by Stripe</a> is a good place to start.
    </p>
  </Layout>
)

export default IndexPage
