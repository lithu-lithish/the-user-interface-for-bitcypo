import React from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Testimonial from './Testimonial'
import Works from './Works'

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/services" component={Services} />
                    <Route path="/testimonail" component={Testimonial} />
                    <Route path="/works" component={Works} />
                </Switch>
            </Router>
        </div>
    )
}