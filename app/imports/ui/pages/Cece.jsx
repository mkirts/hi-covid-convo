import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** Renders the CECE chat-bot page broken up into two columns. One for instructions, and the other for Cece. */
/** Will also include a link to a survey page, where users can rate how well Cece answered their questions. */
export default class Cece extends React.Component {
  render() {
    const botStyle = {
      border: 'none',
    };
    const gold = {
      color: '#DDAF78',
    };
    return (
        <div className="chatbot" id="cece-page">
          <Grid container centered stackable row={3}>

            <Grid.Row textAlign='center'>
              <Header as='h1' inverted color='grey'>Meet Cece!</Header>
              <Header as='h3' inverted color='grey'>
                Meet the Hawaii Covid-19 chat-bot, Cece! If you have any questions that you have wanted to
                ask about Covid-19, you can just ask in the message box to the right, and Cece will be able to help you!
              </Header>
              <Header as='h3' inverted color='grey'>
                Whether you are unsure of what the current Covid-19 rules and regulations in Hawaii are, or if you want
                to
                find Covid-19 testing locations on the island, Cece will be able to help you and provide the appropriate
                sources for you so you don&apos;t have to do any research or searching!
              </Header>
              <Header as='h4' inverted color='grey'>
                Let us know what you think about Cece, and please fill out this <Link id="feedback" to='/Feedback' style={gold}>survey </Link>
                Let us know what you think about Cece, and please fill out this <Link to='/Feedback' style={gold}>survey </Link>
                to let us know how helpful Cece
                was!
              </Header>
            </Grid.Row>

            <Grid.Row textAlign='center'>
              <iframe
                  style={botStyle}
                  width="700"
                  height="800"
                  allow="microphone;"
                  src="https://console.dialogflow.com/api-client/demo/embedded/efa452bd-9d6e-4580-9aa0-5800d8027fdf">
              </iframe>
            </Grid.Row>
            <Grid.Row>

              <Header as='h4' inverted color='grey'>
                All information provided from Cece are not directly from us and are not claimed by us.
                They are gathered from online websites such as the Center for Disease Control and Prevention (CDC),
                hawaiicovid19, health.hawaii.gov, and oneoahu.org.
                For more information on the resources used for the Cece chat-bot, please visit out Resources page
                linked in the footer.
              </Header>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
