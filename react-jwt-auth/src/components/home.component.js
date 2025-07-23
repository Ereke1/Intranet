// components/home.component.js
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Services from './services.component';
import Folders from './folder.component';
import Calendar from './calendar.component';
import InternalChat from './internal-chat.component';
import News from './news.component';
import UpcomingEvents from './events.component';
import AIAssistant from './ai-assistant.component';
import TasksModal from './task-modal.component';
import Footer from './footer.component';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            user: AuthService.getCurrentUser()
        };
    }

    componentDidMount() {
        if (!this.state.user) {
            this.setState({ redirect: true });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/login" />;
        }

        return (
            <div>
                <main>
                    <section>
                        <Services />
                        <Folders />
                    </section>
                    <Calendar user={this.state.user} />
                    <InternalChat />
                    <News />
                    <UpcomingEvents />
                    <AIAssistant />
                    <TasksModal />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;